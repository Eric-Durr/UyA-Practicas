
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('lista-tareas-propuestas/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}