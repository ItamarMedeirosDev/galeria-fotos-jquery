$(document).ready(function(){
  
   $('header button').click(function(){
      $('form').slideDown();
   })

   $('#cancelar').click(function(){
      $('form').slideUp();
   })

   $('form').on('submit', function(e){
      e.preventDefault();
      const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
      const novoItem = $('<li style="display:none"></li>').append(
          `<img src="${enderecoDaNovaImagem}">`,
          `<div class="overlay-image-link">
              <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                  Ver imagem em tamanho real
              </a>
           </div>`
      );
      $('ul').append(novoItem);
      $('#endereco-imagem-nova').val('');
      $(novoItem).fadeIn(1000);
  });
  
})

