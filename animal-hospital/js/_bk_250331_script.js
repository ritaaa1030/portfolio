

$('.header-navbtn').on('click',() => {
  $('body').toggleClass('is-nav-open');
});

$('.header-navbtn').on('click', function () {
  $('body').removeClass('is-nav-open');
});
