$(document).ready(function() {
    $('#cep').on('blur', function() {
      var cep = $(this).val().replace(/\D/g, ''); 
      if (cep.length === 8) {
        $.ajax({
          url: `https://viacep.com.br/ws/${cep}/json/`,
          type: 'GET',
          dataType: 'json',
          success: function(data) {
            if (!data.erro) {
              $('#endereco').val(data.logradouro);
              $('#bairro').val(data.bairro);
              $('#cidade').val(data.localidade);
            }
          },
          error: function() {
            console.log('Error calling Viacep API.');
          }
        });
      }
    });

    $('#cadastroButton').on('click', function() {
      $('#myForm').remove();
      $('body').append('<h1>Cadastro realizado com sucesso!</h1>');
    });
  });