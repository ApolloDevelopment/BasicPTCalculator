$(document).ready(() => {

  $('.toggleExamples').on('click', function () {
    $(this).siblings('div').slideToggle(150);
    $(this).siblings('.syntax').fadeToggle('fast');
  })


});
