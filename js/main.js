$(document).ready(() => {

  $('.toggleExamples').on('click', function () {
    $(this).siblings('div').slideToggle(150);
    $(this).siblings().children().find('p').fadeOut('fast');
    $(this).toggleClass('active');
  })


  $('.submit').on('click', function () {
    $(this).siblings('.answer').fadeIn('slow');
  })

});
