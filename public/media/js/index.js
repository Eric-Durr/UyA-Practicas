console.log("hello world")

// Estas lineas de código inicializa las 
// funciones javascript de Materialize.
 
document.addEventListener('DOMContentLoaded', function() {

    M.AutoInit(); 
    M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

});

//Slider inir

$(document).ready(function(){
  $('.slider').slider({
    fullWidth: true,
    indicators: false,
    height: 900
  });
});


// WAI-ARIA index management

  function close()
  {
    const side = M.Sidenav.getInstance(elem);
  }

  function changeValues(e)  
  {
    if(e.keyCode==13)
    {
      list = document.getElementById("traday-nav").getElementsByTagName("LI");
      console.log(list);
      for (let i = 0; i < list.length; i++)
      {
        list[i].childNodes[0].tabIndex=0;
      }
    }
  }

  function nullValues(e)  
  {
    if(e.keyCode==13)
    {
      list = document.getElementById("traday-nav").getElementsByTagName("LI");
      console.log(list);
      for (let i = 0; i < list.length; i++)
      {
        list[i].childNodes[0].tabIndex=-1;
      }
    }
  }