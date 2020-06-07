
document.addEventListener("DOMContentLoaded", (event) => {

    const list = document.querySelector("#contactList");
    list.innerHTML = "";
    firestore.collection("grupos").get().then((snapshot) => {
        snapshot.forEach( (doc) => {
            list.innerHTML += `<a href="#!" class="collection-item text-grey center-align">` + doc.data().Nombre + " | "+ doc.data().Miembros + ` miembros </a>`; 
        });
    })
});





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


