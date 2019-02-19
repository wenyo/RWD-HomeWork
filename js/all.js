
/* cart-commodity-like start */

$(document).ready(function() {
  $('.product_1 .unlike').click(function(event) {
    $('.product_1 .unlike').addClass('none');
    $('.product_1 .like').removeClass('none');
  });
  $('.product_1 .like').click(function(event) {
    $('.product_1 .like').addClass('none');
    $('.product_1 .unlike').removeClass('none');
  });
  $('.product_2 .unlike').click(function(event) {
    $('.product_2 .unlike').addClass('none');
    $('.product_2 .like').removeClass('none');
  });
  $('.product_2 .like').click(function(event) {
    $('.product_2 .like').addClass('none');
    $('.product_2 .unlike').removeClass('none');
  });
  $('.product_3 .unlike').click(function(event) {
    $('.product_3 .unlike').addClass('none');
    $('.product_3 .like').removeClass('none');
  });
  $('.product_3 .like').click(function(event) {
    $('.product_3 .like').addClass('none');
    $('.product_3 .unlike').removeClass('none');
  });
  $('.product_4 .unlike').click(function(event) {
    $('.product_4 .unlike').addClass('none');
    $('.product_4 .like').removeClass('none');
  });
  $('.product_4 .like').click(function(event) {
    $('.product_4 .like').addClass('none');
    $('.product_4 .unlike').removeClass('none');
  });
});

/* cart-commodity-like end */


$(document).ready(function() {
    $('.header .container .hamburger_menu').click(function(event) {
      $('.header .container').addClass('showmenu');
      $('.header .container .hamburger_menu').addClass('none');
      $('.header .container .cancel').removeClass('none');
    });
    $('.header .container .cancel').click(function(event) {
        $('.header .container').removeClass('showmenu');
        $('.header .container .cancel').addClass('none');
        $('.header .container .hamburger_menu').removeClass('none');
      });
});