
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
        const groupModal = document.querySelector("#modalGroup")
        const instance = M.Modal.getInstance(groupModal)
        instance.close()
        M.toast({html: 'Grupo añadido con éxito',
                 classes: 'rounded blue-grey darken-2 ',
                displayLength:5000})
    })
    .catch( (docRef) => {
        console.log( "Error añadiendo el grupo: ", error)
        const groupModal = document.querySelector("#modalGroup")
        const instance = M.Modal.getInstance(groupModal)
        instance.close()
        M.toast({html: 'Error añadiendo el grupo',
                 classes: 'rounded black ',
                displayLength:5000})
    } )


    console.log(title)
    console.log(members)
   
});


mySubmit.addEventListener("keydown", (e) => {

    if (e.keyCode === 13)
    {
        const title = document.querySelector("#groupNameInput").value;
        const members = document.querySelector("#members").value;
    
    
        firestore.collection("grupos").add({
            Miembros: members,
            Nombre: title
        })
        .then( (docRef) => {
            console.log("Grupo añadido a la base de datos con ID: ", docRef.id)
            const groupModal = document.querySelector("#modalGroup")
            const instance = M.Modal.getInstance(groupModal)
            instance.close()
            M.toast({html: 'Grupo añadido con éxito',
                     classes: 'rounded teal lighten-2 ',
                    displayLength:5000})
        })
        .catch( (docRef) => {
            console.log( "Error añadiendo el grupo: ", error)
            const groupModal = document.querySelector("#modalGroup")
            const instance = M.Modal.getInstance(groupModal)
            instance.close()
            M.toast({html: 'Error añadiendo el grupo',
                     classes: 'rounded black ',
                    displayLength:5000})
        } )
                        
    
    
        console.log(title)
        console.log(members)
     
    }
    
});

// Clear database

const clearBtn = document.querySelector("#clearButton")

clearBtn.addEventListener("click", () => {



    firestore.collection("grupos").get().then((snapshot) => {
        snapshot.forEach( (doc) => {
            firestore.collection("grupos").doc(doc.id).delete()
            .then( (docRef) => {
                console.log("Grupos eliminados correctamente", docRef.id)
                M.toast({html: 'Grupos eliminados',
                         classes: 'rounded blue-grey darken-1 ',
                        displayLength:5000})
            })
            .catch( (docRef) => {
                console.log("Error eliminando los grupos", docRef.id)
                M.toast({html: 'Grupos eliminados',
                         classes: 'rounded black white-text',
                        displayLength:5000})
            } ) 
        });
    })

    console.log(title)
    console.log(members)
 
});


clearBtn.addEventListener("keydown", (e) => {

    if (e.keyCode === 13)
    {
        
    
        firestore.collection("grupos").get().then((snapshot) => {
            snapshot.forEach( (doc) => {
                firestore.collection("grupos").doc(doc.id).delete()
                .then( (docRef) => {
                    console.log("Grupos eliminados correctamente", docRef.id)
                    M.toast({html: 'Grupos eliminados',
                             classes: 'rounded blue-grey darken-1 ',
                            displayLength:5000})
                })
                .catch( (docRef) => {
                    console.log("Error eliminando los grupos", docRef.id)
                    M.toast({html: 'Error eliminado los grupos',
                             classes: 'rounded black white-text',
                            displayLength:5000})
                } ) 
            });
        })
    
        console.log(title)
        console.log(members)
     
    }
    
});
