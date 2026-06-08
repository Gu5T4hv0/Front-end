const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORTA = 3000;
const ARQUIVO_PEDIDOS = path.join(__dirname, 'pedidos.json');

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

// Inicia o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando! Abra: http://localhost:${PORTA}`);
});