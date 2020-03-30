# PRÁCTICA 5 : INTRODUCCIÓN A JAVASCRIPT
    Ejercicios para la comprensión de JavaScript y la 
    Composición del DOM y su estructura en arbol.

## TABLA DE LAS FUNCIONES JAVASCRIPT PARA EL DOM. 
A continuación se muestra una tabla que describe el propósito de las funciones javascript vistas en los documentos de la asignatura.

| Funciones JavaScript     | Propósito           | 
| ------------- |:-------------:| 
| **document.getElementById(id)** | Selecciona un **elemento** del documento por medio del **valor id**.       | 
| **document.getElementsByTagName(name)**      | Se selecciona una **lista de nodos** cuyo elemento es el especificado como parametro **name**      |   
| **element.innerHTML = new html content** | Introduce HTML en el elemento elegido.     |  
| **element.attribute = new value** |  Establece un valor al nodo del atributo de **element**  |   
| **element.style.property = new style** | Establece una propiedad de estilo para el **elemento**      |   
| **element.setAttribute(attribute, value)** | Establece el valor de un atributo en el elemento insdicado. Si el atributo ya existe, el valor es actualizado.   | 
| **document.createElement(element)** | Crea un elemento HTML especificado por "element".     | 
| **document.removeChild(element)** | Elimina un nodo hijo del DOM y puede devolver el nodo eliminado.      | 
| **document.appendChild(element)** | Crea el nodo **element** como último hijo del nodo    | 
| **document.replaceChild(new, old)** | Reemplaza el nodo **old** por el nodo **new**.     |  
| **document.write(text)** | Escribe una cadena de texto **text** dentro del hilo de **document**.  |  
| **document.getElementById(id).onclick = function(){code}** |  **function** se llevará a cabo una vez se realice el **evento** onClick   |

> Esta información ha sido revisada en el siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript)

## ESQUEMA DEL ARBOL DOM DEL [FICHERO ENLAZADO]().

## FUNCIÓN JAVASCRIPT PARA CALCULAR EL CAMBIO ENTRE DIFERENTES MONEDAS

## FUNCIÓN JAVASCRIPT PARA CALCULAR EDAD Y SUELDO

## FUNCIÓN JAVASCRIPT PARA INFORME DE LA CÁNTIDAD DE ELEMENTOS EN EL INICIO
El código mostrado a continuación se encuentra almacenado dentro de la carpetas /media/js, en el fichero llamado contador.js

```js
//Cuenta número de párrafos
const parrafos = document.getElementsByTagName("p");
  console.log("Número de párrafos: "+parrafos.length);

//Cuenta número de enlaces
const enlaces = document.getElementsByTagName("a");
  console.log("Número de enlaces: "+enlaces.length)

//Cuenta número de encabezados
const encabezados = document.getElementsByTagName("h4");
  console.log("Número de encabezados: "+encabezados.length)
```

```
Esto es un bloque de código.
```

