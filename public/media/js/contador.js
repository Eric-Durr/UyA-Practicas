//Cuenta número de párrafos
const parrafos = document.getElementsByTagName("p");
  console.log("Número de párrafos: "+parrafos.length);

//Cuenta número de enlaces
const enlaces = document.getElementsByTagName("a");
  console.log("Número de enlaces: "+enlaces.length);

//Cuenta número de encabezados

const encabezados1 = document.getElementsByTagName("h1");
const encabezados2 = document.getElementsByTagName("h2");
const encabezados3 = document.getElementsByTagName("h3");
const encabezados4 = document.getElementsByTagName("h4");
const encabezados5 = document.getElementsByTagName("h5");
const encabezados = encabezados1.length + encabezados2.length + encabezados3.length + encabezados4.length + encabezados5.length;
  console.log("Número de encabezados: "+encabezados);