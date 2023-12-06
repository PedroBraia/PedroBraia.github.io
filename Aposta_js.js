let saldo = 100;

  function realizarAposta() {
    const valorAposta = parseInt(document.getElementById('valorAposta').value);

    if (valorAposta > saldo) {
      alert('Você não tem saldo suficiente para essa aposta.');
      return;
    }

    const chanceDeVencer = Math.random();

    if (chanceDeVencer > 0.5) {
      // Usuário venceu
      saldo += valorAposta;
      exibirResultado(true, valorAposta);
    } else {
      // Usuário perdeu
      saldo -= valorAposta;
      exibirResultado(false, valorAposta);
    }

    // Atualiza o saldo exibido na página
    document.getElementById('saldo').innerText = saldo;
  }

  function exibirResultado(venceu, valorAposta) {
    const resultadoElement = document.getElementById('resultado');
    
    if (venceu) {
      resultadoElement.innerText = `Você ganhou $${valorAposta}!`;
    } else {
      resultadoElement.innerText = `Você perdeu $${valorAposta}. Tente novamente.`;
    }
  }