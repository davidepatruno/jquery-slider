


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
    }
  }
  else {
    if ($('.images img').hasClass("active")){
      immagineattiva.prev('img').addClass('active');
      immagineattiva.prev('img').removeClass('unactive');
      immagineattiva.removeClass('active');
      immagineattiva.addClass('unactive');
      // console.log(immagineattiva);
      var nascosta = $('.images .unactive');
      // console.log(nascosta);
    }
  }
})
