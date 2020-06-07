//Inicialización


//Inicializa CLOUD FIRESTORE
var db = firebase.firestore();

//Agregar Conctactos

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      userName: name,
      email: email,
      
    });
  }