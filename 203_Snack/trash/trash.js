// confirmação ainda não tera backend


function mostrarToast(mensagem) {
      const toast = document.getElementById('toast');
      toast.textContent = mensagem;
      toast.classList.remove('show');
      void toast.offsetWidth; // reinicia animação
      toast.classList.add('show');
    }

    async function enviarPedido(tipoPagamento) {
      const quarto = document.getElementById('quarto').value.trim();
      const nome = document.getElementById('nome').value.trim();

      if (!quarto || !nome) {
        mostrarToast('Preencha todos os campos!');
        return;
      }

      const pedido = {
        produto: produto.nome,
        preco: produto.preco,
        quarto: quarto,
        nome: nome,
        pagamento: tipoPagamento
      };

      try {
        const resposta = await fetch('/salvar-pedido', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pedido)
        });

        const resultado = await resposta.json();

        if (resultado.sucesso) {
          mostrarToast('Pedido enviado com sucesso!');
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 2000);
        }
      } catch (erro) {
        mostrarToast('Erro ao enviar pedido. Tente novamente.');
        console.error(erro);
      }
    }