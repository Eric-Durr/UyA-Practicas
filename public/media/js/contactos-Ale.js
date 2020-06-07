//Inicializa CLOUD FIRESTORE

//Agregar documentos

function guardar(){

  var nombre = document.getElementById('userName').value;
  var email = document.getElementById('userEmail').value;
  
  db.collection("usuarios").add({
    name: nombre,
    mail: email
  })

  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';

  })

  .catch(function(error){
    console.error("Error adding document: ", error);
  });

}