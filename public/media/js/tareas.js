
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
  })

  .catch((docRef) => {
    console.log("Error al añadir la tarea.", Error);
  })
});