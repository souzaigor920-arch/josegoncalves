const temperaturaEl = document.getElementById("dados-temperatura");

  // Sua chave da API
  const API_KEY = "493dc09413fba7cd978ea866c616bac1";

  // Cidade e país
  const cidade = "José Gonçalves,BR";

  async function buscarTemperatura() {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;

      const resposta = await fetch(url);
      const dados = await resposta.json();

      const temp = Math.round(dados.main.temp);
      const descricao = dados.weather[0].description;

      temperaturaEl.textContent = `${temp}°C — ${descricao}🌧️`;
    } catch (erro) {
      temperaturaEl.textContent = "Erro ao carregar temperatura 🌧️";
      console.error(erro);
    }
  }

  // Atualiza ao carregar
  buscarTemperatura();

  // Atualiza a cada 10 minutos
  setInterval(buscarTemperatura, 600000);


  function toggleLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}