function buscarClima() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = '96948e0a530dab431b8012034064c4dc'; // Substitua pela sua chave API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperatura = data.main.temp;
        document.getElementById('resultado').textContent = `A temperatura em ${cidade} é ${temperatura}°C.`;
      })
      .catch(error => {
        console.error('Erro ao buscar o clima:', error);
      });
  }