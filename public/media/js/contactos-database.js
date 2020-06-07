
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


const formulario = document.querySelector("#addContact");
formulario.addEventListener("submit", (e) => {

    const database = firebase.firestore();
    const name = formulario["nameToAdd"].value;
    const contacto1 = database.collection("contactos").doc("contacto1");
    contacto1.update({nombre: name});
});

   