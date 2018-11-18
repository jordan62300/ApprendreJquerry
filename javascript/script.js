$(document).ready(() => {
  $('.menu').on('mouseenter', event => {
    $(event.currentTarget).addClass('currentjavas');
  }).on('mouseenter', () => {
    $('.test').removeClass('current');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('currentjavas');
  }).on('mouseleave', () => {
    $('.test').addClass('currentjavas');
  })
  $('.menu').on('mouseenter', () => {
    $('.test').removeClass('currentjavas');
})
  $('.test').on('mouseenter', () => {
    $('.test').addClass('currentjavas');
  })
});
