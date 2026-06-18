require('dotenv').config();
const produtos = require('./produtos.js');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { MercadoPagoConfig, Preference } = require('mercadopago');

const app = express();
const PORTA = 3000;
const ARQUIVO_PEDIDOS = path.join(__dirname, 'pedidos.json');
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});
const preference = new Preference(client);

// Permite ler JSON do body das requisições
app.use(express.json());

// Serve todos os arquivos da pasta (html, svg, etc.)
app.use(express.static(__dirname));

// Rota que salva o pedido
app.post('/salvar-pedido', (req, res) => {
  const novoPedido = req.body;

  // Lê os pedidos existentes (ou começa com lista vazia)
  let pedidos = [];
  if (fs.existsSync(ARQUIVO_PEDIDOS)) {
    const conteudo = fs.readFileSync(ARQUIVO_PEDIDOS, 'utf-8');
    pedidos = JSON.parse(conteudo);
  }

  // Adiciona data/hora ao pedido
  novoPedido.data = new Date().toLocaleString('pt-BR');

  // Adiciona o novo pedido à lista
  pedidos.push(novoPedido);

  // Salva de volta no arquivo
  fs.writeFileSync(ARQUIVO_PEDIDOS, JSON.stringify(pedidos, null, 2));

  console.log('Novo pedido salvo:', novoPedido);
  res.json({ sucesso: true });
});

app.post('/criar-pagamento', async (req, res) => {
  const { id, qty, nome, quarto } = req.body;
  const produto = produtos[id];
  const quantidade = Number(qty);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto nao encontrado.' });
  }

  if (!Number.isInteger(quantidade) || quantidade < 1) {
    return res.status(400).json({ erro: 'Quantidade invalida.' });
  }

  try {
    const resultado = await preference.create({
      body: {
        items: [
          {
            title: produto.nome,
            quantity: quantidade,
            unit_price: produto.precoNum
          }
        ],
        metadata: {
          produtoId: id,
          nome,
          quarto
        }
      }
    });

    res.json({ link: resultado.init_point || resultado.sandbox_init_point });
  } catch (erro) {
    console.error('Erro ao criar pagamento:', erro);
    res.status(500).json({ erro: 'Erro ao criar pagamento.' });
  }
});

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando! Abra: http://localhost:${PORTA}`);
});
