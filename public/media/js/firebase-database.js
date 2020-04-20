var firebaseConfig = {
    apiKey: "******************",
    authDomain: "****************",
    databaseURL: "*****************",
    projectId: "*********************",
    storageBucket: "******************",
    messagingSenderId: "***************",
    appId: "***********************"
  };

firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos

var database = firebase.database();
var referencia = database.ref('/');

//Consultar datos en la raiz

referencia = database.ref('/');
referencia.once('value', snapshot => {
    console.log(snapshot.val());
});
