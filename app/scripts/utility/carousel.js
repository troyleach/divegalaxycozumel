/* The below might want to live on the indivedual view bc then I can have lots of carousels*/
$(document).ready(function(){
  $('.picture-carousel').slick({
      autoplay: true
  });
  $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
  });
});
 
