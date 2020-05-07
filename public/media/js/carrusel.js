document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });


// CAROUSEL
$(document).ready(function(){
    $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
    );
  });
  
  autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 2000);
  }