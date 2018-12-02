


$('.arrow').click(function(){
  var immagineattiva = $('.images .active');
  if ($(this).hasClass("right_arrow")){
    var successiva = immagineattiva.next('img');
    console.log(successiva);
    if (successiva.length > 0) {
      if ($('.images img').hasClass("active")){
        immagineattiva.next('img').addClass('active');
        immagineattiva.next('img').removeClass('unactive');
        immagineattiva.removeClass('active');
        immagineattiva.addClass('unactive');
        // console.log(immagineattiva);
        var nascosta = $('.images .unactive');
        // console.log(nascosta);
      }
    }
    else {
      $('.images img').first().addClass('active');
      $('.images img').first().removeClass('unactive')
      $('.images img').last().removeClass('active');
      $('.images img').last().addClass('unactive')
    }
  }
  else {
    var precedente = immagineattiva.prev('img');
    console.log(precedente);
    if (precedente.length == 0) {
      $('.images img').last().addClass('active');
      $('.images img').last().removeClass('unactive');
      $('.images img').first().addClass('unactive');
      $('.images img').first().removeClass('active');
    }
    else {
      if ($('.images img').hasClass("active")) {
        immagineattiva.prev('img').addClass('active');
        immagineattiva.prev('img').removeClass('unactive');
        immagineattiva.removeClass('active');
        immagineattiva.addClass('unactive');
        // console.log(immagineattiva);
        var nascosta = $('.images .unactive');
        // console.log(nascosta);
      }
    }
  }
})
