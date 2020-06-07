/*
document.addEventListener("DOMContentLoaded", event => {

    const contacto1 = database.collection("contactos").doc("contacto1");
    contacto1.onSnapshot(doc => {

        const data = doc.data();
        const list = document.querySelector("#contactList");
        list.innerHTML = "";
        list.innerHTML = `<a href="#!" class="collection-item text-grey center-align">` + data.nombre + data.Apellidos + `</a>`; 
        console.log(data); 

    });

});
*/

// Lectura de documento de CONTACTOS
const boton = document.querySelector("#myButton");
boton.addEventListener("click", () => {

    const name = document.querySelector("#userName").value;
    const email = document.querySelector("#userEmail").value;

    database.collection("contactos").add({
        email: email,
        nombre: name
        
    })
    .then((docRef) => {
        console.log("Contacto añadido a la BD con ID: ", docRef.id);
        document.querySelector('userName').value = '';
        document.querySelector('userEmail').value = '';
    })
    .catch((docRef) => {
        console.log("Error añadiendo el contacto: ", error)
    })
 
});

// Escritura de los elementos del documento
document.addEventListener("DOMContentLoaded", event => {
    database.collection("contactos").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
    
});

   