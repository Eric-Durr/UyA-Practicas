// Inicializar la base de datos
var config = {
  apiKey: "AIzaSyANBMwjLUMhYwq2CDywa0Z47G2E3aJQ3ex",
  authDomain: "veigapp.firebaseapp.com",
  databaseURL: "https://veigapp.firebaseio.com",
  projectId: "firebase-veigapp",
  storageBucket: "firebase-veigapp.appspot.com",
  messagingSenderId: "841479533091"
};

firebase.initializeApp(config);

function exito()
{
  $("#spinner").html("");
  location.assign('index.html');
}

$(function()
{
  $("#botonLogin").click(function()
  {
      $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
      var email=$("#email").val();
      var password=$("#password").val();

      firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error)
      {
          $("#spinner").html("");
          //console.log(error);
          alert ("Error detectado:\n\n"+error.message);
      });
  });

  $("#botonRegistro").click(function()
  {
      location.assign('registro.html');
  });


  $("#botonCancelar").click(function()
  {
      location.assign('index.html');
  });

});