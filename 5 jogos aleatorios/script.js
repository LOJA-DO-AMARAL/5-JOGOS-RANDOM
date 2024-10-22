document.getElementById('sortear-btn').addEventListener('click', () => {
  const jogosInput = document.getElementById('jogos').value;
  const excluirInput = document.getElementById('excluir').value;

  let jogos = jogosInput.split(',').map(j => j.trim()).filter(j => j !== "");
  const jogosExcluir = excluirInput.split(',').map(j => j.trim()).filter(j => j !== "");

  if (jogos.length < 5) {
    alert('Insira pelo menos 5 jogos para sortear.');
    return;
  }

  const jogosValidos = jogos.filter(jogo => !jogosExcluir.includes(jogo));

  if (jogosValidos.length < 5) {
    alert('Jogos válidos insuficientes para o sorteio.');
    return;
  }

  const sorteados = new Set();
  while (sorteados.size < 5) {
    const index = Math.floor(Math.random() * jogosValidos.length);
    const jogo = jogosValidos[index];
    sorteados.add(jogo);
  }

  const jogosSorteadosList = document.getElementById('jogos-sorteados');
  jogosSorteadosList.innerHTML = '';  // Limpa a lista antes de exibir novos resultados

  Array.from(sorteados).forEach((jogo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${jogo}`;
    jogosSorteadosList.appendChild(li);
  });

  document.getElementById('resultado').style.display = 'block';
});
