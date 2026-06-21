// Imports e configuração inicial
require('dotenv').config();  
const produtos = require('./produtos.js');  //Carrega o arquivo .env e coloca as variáveis dele em process.env. Precisa ser a primeira linha.
const express = require('express');
const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');
const { createClient } = require('@supabase/supabase-js');
// Importa as bibliotecas do servidor, Mercado Pago e Supabase.

// Configurações do app
const app = express();
const PORTA = 3000;
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});
const preference = new Preference(client);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// Inicializa os clientes do Mercado Pago e Supabase.

// Middlewares
// Permite ler JSON do body das requisições
app.use(express.json());

// Serve todos os arquivos da pasta (html, svg, etc.)
app.use(express.static(__dirname));

// Rota que salva o pedido
app.post('/salvar-pedido', async (req, res) => {
  const { produto, preco, quantidade, nome, quarto, tipo } = req.body;

  const { error } = await supabase.from('pedidos').insert({
    produto,
    preco,
    quantidade,
    nome,
    quarto,
    tipo,
    status: 'esperando pedido'
  });

  if (error) {
    console.error('Erro ao salvar pedido no Supabase:', error);
    return res.status(500).json({ erro: 'Erro ao salvar pedido.' });
  }

  return res.json({ sucesso: true });
});

app.post('/criar-pagamento', async (req, res) => {
  const { id, qty, nome, quarto } = req.body; //Pega id, qty, nome, quarto do corpo da requisição
  const produto = produtos[id]; //Busca o produto no objeto produtos pelo id
  const quantidade = Number(qty);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto nao encontrado.' });
  }

  if (!Number.isInteger(quantidade) || quantidade < 1) {
    return res.status(400).json({ erro: 'Quantidade invalida.' });
  }
  //(linhas 57-63)Valida se o produto existe e se a quantidade é um número inteiro maior que zero. Se não, retorna erro.

  try {
    const resultado = await preference.create({
      body: {
        items: [
          {
            title: produto.nome,
            quantity: quantidade,
            unit_price: produto.precoNum
          }  //(linhas 65-74)Chama preference.create() no Mercado Pago montando o item com nome, quantidade e preço real
        ],
        metadata: {
          produtoId: id,
          nome,
          quarto //(linhas 75-79)Guarda nome e quarto nos metadata — esses dados ficam salvos na preferência do MP pra você consultar depois
        }
      }
    });

    res.json({
      link: resultado.init_point || resultado.sandbox_init_point,
      preferenceId: resultado.id
    });  //Retorna o link de pagamento (init_point para produção, sandbox_init_point para teste)
  } catch (erro) {
    console.error('Erro ao criar pagamento:', erro);
    res.status(500).json({ erro: 'Erro ao criar pagamento.' });
  }
});

app.post('/webhook', async (req, res) => {
  try {
    if (req.body.type !== 'payment') {
      return res.sendStatus(200);
    }

    const payment = new Payment(client);
    const detalhes = await payment.get({ id: req.body.data.id });

    if (detalhes.status !== 'approved') {
      return res.sendStatus(200);
    }

    const { produtoId, nome, quarto } = detalhes.metadata || {};
    const produto = produtos[produtoId];
    const item = detalhes.additional_info?.items?.[0] || {};
    const preferenceId = detalhes.order?.id || detalhes.id;

    const { data: existente } = await supabase
      .from('pedidos')
      .select('id')
      .eq('preference_id', preferenceId)
      .maybeSingle();

    if (existente) {
      return res.sendStatus(200); // já processado, ignora
    }
    const { error } = await supabase.from('pedidos').insert({
      produto: item.title || produto?.nome,
      preco: produto?.preco,
      quantidade: Number(item.quantity),
      nome,
      quarto,
      tipo: 'amarelo',
      status: 'pagamento feito',
      preference_id: preferenceId
    });

    if (error) {
      console.error('Erro ao salvar pedido do webhook no Supabase:', error);
    }
  } catch (erro) {
    console.error('Erro no webhook do Mercado Pago:', erro);
  }

  return res.sendStatus(200);
});

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando! Abra: http://localhost:${PORTA}`);
});
