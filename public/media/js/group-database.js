

/*
document.addEventListener("DOMContentLoaded", event => {

    //const contacto1 = database.collection("contactos").doc("contacto1");
    contacto1.onSnapshot(doc => {
        
        
        const data = doc.data();
        const list = document.querySelector("#contactList");
        list.innerHTML = "";
        list.innerHTML = `<a href="#!" class="collection-item text-grey center-align">` + data.nombre + data.Apellidos + `</a>`; 
        console.log(data); 
        
    });

});
*/




const mySubmit = document.querySelector("#mySubmit");
mySubmit.addEventListener("click", () => {

    const title = document.querySelector("#groupNameInput").value;
    const members = document.querySelector("#members").value;


    firestore.collection("grupos").add({
        Miembros: members,
        Nombre: title
    })
    .then( (docRef) => {
        console.log("Grupo añadido a la base de datos con ID: ", docRef.id)
    })
    .catch( (docRef) => {
        console.log( "Error añadiendo el grupo: ", error)
    } )


    console.log(title)
    console.log(members)
 
});


