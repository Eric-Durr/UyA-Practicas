
document.addEventListener("DOMContentLoaded", (event) => {

    const list = document.querySelector("#contactList");
    list.innerHTML = "";
    
    database.collection("contactos").get().then((snapshot) => {
        snapshot.forEach( (doc) => {
            list.innerHTML += `<a href="#!" class="collection-item text-grey center-align"> Nombre: ` + doc.data().nombre + " <br> Email: "+ doc.data().email + ` </a>`; 
        });
    })
});


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
        document.querySelector('#userName').value = '';
        document.querySelector('#userEmail').value = '';
        const contactModal = document.querySelector("#modalContact");
        const instance = M.Modal.getInstance(contactModal);
        instance.close()
        M.toast({
            html: `Contacto añadido con éxito`,
            classes: "rounded blue-grey darken-2",
            displayLength: 50000
        })
    })
    .catch( (docRef) => {
        console.log("Error añadiendo contacto: ",error);
        document.querySelector('#userName').value = '';
        document.querySelector('#userEmail').value = '';
        const contactModal = document.querySelector("#modalContact");
        const instance = M.Modal.getInstance(contactModal);
        instance.close()
        M.toast({
            html: `Error añadiendo contacto`,
            classes: "rounded blue-grey darken-2",
            displayLength: 50000
        })
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

   