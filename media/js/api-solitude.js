
import $ from "jquery";


const sol_button = document.getElementById("solitude")

sol_button.onclick = function solicitudJSON() {
  $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId=1"  
  , success: function(result){
    console.log(result);
    $("#contenedorSolicitud").html(result[0].postId);
  }});
}