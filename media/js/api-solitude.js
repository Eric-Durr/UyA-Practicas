
import {$} from "jquery";


const sol_button = document.getElementById("solitude")

sol_button.onclick = function solicitudJSON() {
  $.ajax({url: "https://jsonplaceholder.typicode.com/comments?postId=1"  
  , success: function(result){
    console.log(result);

    $("#contenedorTitulos").html(" ");
    parsearTitulo(result);
    $("#contenedorInformacion").html(" ");
    parsearObjeto(result);
  }});
}

function parsearTitulo(result) {

  let fields = Object.keys(result[0]);

    for (let i = 0; i < fields.length; i++) {
     $("#contenedorTitulos").append("<th>" + fields[i] + "</th>");
    }
}

function parsearObjeto(result) {
 
  for (let i = 0; i < result.length; i++) {
    $("#contenedorInformacion").append("<tr>");

    $("#contenedorInformacion").append("<td>" + result[i].postId + "</td>");
    $("#contenedorInformacion").append("<td>" + result[i].id + "</td>");
    $("#contenedorInformacion").append("<td>" + result[i].name + "</td>");
    $("#contenedorInformacion").append("<td>" + result[i].email + "</td>");
    $("#contenedorInformacion").append("<td>" + result[i].body + "</td>");
    
    
    $("#contenedorInformacion").append("</tr>");
  }
  
}
