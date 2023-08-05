$(document).ready(function() {
    $.ajax({
      url: 'https://api.escuelajs.co/api/v1/products?offset=0&limit=1',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        if (data.length > 0) {
          var product = data[0];

          
          var cardHTML = `
            <div class="card">
              <img src="${product.images[0]}" class="card-img-top" alt="Imagem do produto">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Price: ${product.price}</p>
              </div>
            </div>
          `;

          $('#cardContainer').html(cardHTML);
        } else {

          $('#cardContainer').html('<p>Nenhum produto encontrado.</p>');
        }
      },
      error: function(xhr, status, error) {
        console.error('Erro na requisição Ajax: ' + status + ' - ' + error);
        $('#cardContainer').html('<p>Erro ao carregar os dados.</p>');
      }
    });
  });