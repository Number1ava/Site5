$(function () {
  $(".slider").slick({
      dots:true,
      arrows:false,
      autoplay:true,
  });
});

$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.menu').toggleClass('active');
  })
})
