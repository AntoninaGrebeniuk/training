$(document).ready(function () {
  $('.header-nav li a').click(function () {
    // 1
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body,html').animate({ scrollTop: destination }, 1400);
  });
});
