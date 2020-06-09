// Añadir tareas a la base de datos
const boton = document.querySelector("#myButton");
boton.addEventListener("click", () => {
  const titulo = document.querySelector("#taskTitle").value;
  const descripcion = document.querySelector("#taskDescription").value;

  database.collection("tareas_propuestas").add({
    Descripcion: descripcion,
    Titulo: titulo
  })

  .then((docRef) => {
    console.log("Tarea añadida a la bbdd por el id: ", docRef.id);
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDescription').value = '';

    const taskModal = document.querySelector("#modalTask")
    const instance = M.Modal.getInstance(taskModal)
    instance.close()
    M.toast({html: 'Tarea añadida exitosamente',
             classes: 'rounded blue-grey darken-2 ',
            displayLength:5000})
  })

  .catch((docRef) => {
    console.log("Error al añadir la tarea.", Error);
    document.querySelector('#taskTitle').value = '';
    document.querySelector('#taskDescription').value = '';

    const taskModal = document.querySelector("#modalTask")
    const instance = M.Modal.getInstance(taskModal)
    instance.close()
    M.toast({html: 'Error al añadir la tarea',
             classes: 'rounded black white-text',
            displayLength:5000})
  })
});

// Cargar las tareas pendientes
document.addEventListener("DOMContentLoaded", (event) => {

  const list = document.querySelector("#lista-tareas-pendientes");
  list.innerHTML = "";
  database.collection("tareas_pendientes").get().then((snapshot) => {
      snapshot.forEach( (doc) => {
        let innElem = "";
        innElem += 
          `
          <li class="collection-item">
            <p>
              <label>
                `
            if (doc.data().Hecho == true)
            {
              innElem += `<input type="checkbox"  checked="checked" />`
            }
            if (doc.data().Hecho != true)
            {
              innElem += `<input type="checkbox" />`
            }
                  
            innElem +=
            `
                  <span class="teal-text darken-4">
                  <span tabindex="0">
                  `
                  +
                  doc.data().Titulo
                  +
                  `
                  </span>
                  <p tabindex="0">
                  `
                  +
                  doc.data().Descripcion
                  +
                  `
                  <p>
                  </span>
                </label>
              </p>
            </li>
          `
          list.innerHTML += innElem
      });
  })
});

// Cargar las tareas propuestas
document.addEventListener("DOMContentLoaded", (event) => {

  const list = document.querySelector("#lista-tareas-propuestas");
  list.innerHTML = "";
  database.collection("tareas_propuestas").get().then((snapshot) => {
      snapshot.forEach( (doc) => {
        let innElem = "";
        innElem += 
        `
          <li class="collection-item">
            <p>
              <label>
                  <span class="teal-text darken-4">
                    <span tabindex="0">
                    `
                    if (doc.data().Hecho == true)
                    {
                      innElem += `<strike aria-label="Tarea`
                      innElem += doc.data().Titulo
                      innElem += `realizada">`
                    }
                    innElem += doc.data().Titulo
                    if (doc.data().Hecho == true)
                    {
                      innElem += `</strike>`
                    }      
                    innElem +=        
                    `
                    </span>
                  
                  </span>
            
                </label>
              </p>
            </li>
            `
          
          list.innerHTML += innElem
        });
  })
});