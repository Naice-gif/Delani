/*This is the business logic */
$(document).ready(function () {
  $('.hidden').click(function () {
    $('.showing').show();
    $('.hidden').hide();


  });
  $('.showing').click(function () {
    $('.showing').hide();
    $('.hidden').show();

  });
  $('.img').click(function () {
    $('.para').show();
    $('.img').hide();


  });
  $('.para').click(function () {
    $('.para').hide();
    $('.img').show();

  });
  $('.pro').click(function () {
    $('.product').show();
    $('.pro').hide();


  });
  $('.product').click(function () {
    $('.pro').show();
    $('.product').hide();

  });

  $('#image-1').hover(function () {
    $('#image-1').mouseenter(function () {
      $(".fol-1").show();
    });
    $('#image-1').mouseleave(function () {
      $(".fol-1").hide();
    });

  });

  $('#image-2').hover(function () {
    $('#image-2').mouseenter(function () {
      $(".fol-2").show();
    });
    $('#image-2').mouseleave(function () {
      $(".fol-2").hide();
    });
  });


  $('#image-3').hover(function () {
    $('#image-3').mouseenter(function () {
      $(".fol-3").show();
    });
    $('#image-3').mouseleave(function () {
      $(".fol-3").hide();
    });

  });
  $('#image-4').hover(function () {
    $('#image-4').mouseenter(function () {
      $(".fol-4").show();
    });
    $('#image-4').mouseleave(function () {
      $(".fol-4").hide();
    });

  });
  $('#image-5').hover(function () {
    $('#image-5').mouseenter(function () {
      $(".fol-5").show();
    });
    $('#image-5').mouseleave(function () {
      $(".fol-5").hide();
    });

  });
  $('#image-6').hover(function () {
    $('#image-6').mouseover(function () {
      $(".fol-6").show();
    });
    $('#image-6').mouseout(function () {
      $(".fol-6").hide();
    });

  });
  $('#image-7').hover(function () {
    $('#image-7').mouseenter(function () {
      $(".fol-7").show();
    });
    $('#image-7').mouseleave(function () {
      $(".fol-7").hide();
    });

  });
  $('#image-8').hover(function () {
    $('#image-8').mouseenter(function () {
      $(".fol-8").show();
    });
    $('#image-8').mouseleave(function () {
      $(".fol-8").hide();
    });

  });
  $('#button').click(function (event) {
    var name = $('#One').val();
    var email = $('#two').val();
    var message = $('#exampleFormControlTextarea1').val();
    if ((name !== '') && (email !== '') && (message !== '')) {
      /* this is the user Interface */
      alert(name + ' ' + 'we have received your message and we thank you for your time')
    } else {
      alert('please input your contact information')
    }
  });

});