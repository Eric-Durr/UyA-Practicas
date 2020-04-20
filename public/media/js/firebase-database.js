
// Referencia a la base de datos

const referencia = database.ref('/');

//Consultar datos en la raiz

referencia = database.ref('/');
referencia.once('value', snapshot => {
    console.log(snapshot.val());
});
