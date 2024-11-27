document.querySelectorAll('.hero-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    
    const url = link.getAttribute('href');

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.body.innerHTML = data;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
        alert('Erro ao carregar a página. Tente novamente mais tarde.');
      });
  });
});
