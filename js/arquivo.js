document.querySelector('.hero-link').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
  
    // Faz o fetch do conteúdo da nova página
    fetch('projetos.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Substitui todo o conteúdo da página
        document.body.innerHTML = data;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
        alert('Erro ao carregar a página. Tente novamente mais tarde.');
      });
  });
  

  document.querySelector('.hero-link').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
  
    // Faz o fetch do conteúdo da nova página
    fetch('int-exp.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Substitui todo o conteúdo da página
        document.body.innerHTML = data;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
        alert('Erro ao carregar a página. Tente novamente mais tarde.');
      });
  });
  

