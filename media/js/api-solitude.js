
import $ from "jquery";


const sol_button = document.getElementById("solitude")

sol_button.onclick = function solicitudJSON() {
  $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId=1"  
  , success: function(result){
    console.log(result);
    parsearObjeto(result);
  }});
}

function parsearObjeto(result) {
  $("#contenedorSolicitud").html(" ");
  
  $("#contenedorSolicitud").append("<thead><tr>");

  
    let fields = Object.keys(result[0]);

    for (let i = 0; i < fields.length; i++) {
     $("#contenedorSolicitud").append("<th>" + fields[i] + "</th>");
    }
  
  $("#contenedorSolicitud").append("</tr></thead>");
  $("#contenedorSolicitud").append("<tbody>");
  for (let i = 0; i < result.length; i++) {
    $("#contenedorSolicitud").append("<tr>");

    $("#contenedorSolicitud").append("<td>" + result[i].postId + "</td>");
    $("#contenedorSolicitud").append("<td>" + result[i].id + "</td>");
    $("#contenedorSolicitud").append("<td>" + result[i].name + "</td>");
    $("#contenedorSolicitud").append("<td>" + result[i].email + "</td>");
    $("#contenedorSolicitud").append("<td>" + result[i].body + "</td>");
    
    
    $("#contenedorSolicitud").append("</tr>");
  }
  $("#contenedorSolicitud").append("</tbody>");
}
