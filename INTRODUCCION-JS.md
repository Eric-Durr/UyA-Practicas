# PRÁCTICA 5 : INTRODUCCIÓN A JAVASCRIPT
    Ejercicios para la comprensión de JavaScript y la 
    Composición del DOM y su estructura en arbol.

## TABLA DE LAS FUNCIONES JAVASCRIPT PARA EL DOM. 
| Funciones JavaScript     | Propósito           | 
| ------------- |:-------------:| 
| **document.getElementById(id)** | Selecciona un **elemento** del documento por medio del **valor id**.       | 
| **document.getElementsByTagName(name)**      | Se selecciona una **lista de nodos** cuyo elemento es el especificado como parametro **name**      |   
| **element.innerHTML = new html content** | Introduce HTML en el elemento elegido.     |  
| **element.attribute = new value** |    |   
| **element.style.property = new style** | Establece una propiedad de estilo para el **elemento**      |   
| **element.setAttribute(attribute, value)** | Establece el valor de un atributo en el elemento insdicado. Si el atributo ya existe, el valor es actualizado.   | 
| **document.createElement(element)** | Crea un elemento HTML especificado por "element".     | 
| **document.removeChild(element)** | Elimina un nodo hijo del DOM y puede devolver el nodo eliminado.      | 
| **document.appendChild(element)** | Crea el nodo **element** como último hijo del nodo    | 
| **document.replaceChild(new, old)** | Reemplaza el nodo **old** por el nodo **new**.     |  
| **document.write(text)** | Escribe una cadena de texto **text** dentro del hilo de **document**.  |  
| **document.getElementById(id).onclick = function(){code}** |     |

Esta información ha sido revisada en el siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript)

## ESQUEMA DEL ARBOL DOM DEL [FICHERO ENLAZADO](https://campusvirtual.ull.es/1920/pluginfile.php/258285/mod_assign/intro/dom.html).

```
html
│
└───head
│   │
│   └───title
|       |
│       └───DOM
│   
└───body
    │
    └───h1
    |   |
    │   └───Introducción al árbol DOM
    │
    └───p
    |   |
    │   └───El DOM es una interfaz de objeto de un documento HTML, 
    │       representa de forma estructurada el documento y proporciona 
    │       interfaces para su manipulación.
    │
    └───p
    |   │
    |   └───Puedes consultar información en la 
    |   │
    |   └───a---href=https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n
    |       |
    │       └───Documnetación de Mozilla
    └───p
    |   |
    │   └───Algunos tipos de datos:
    │
    └───ul
    |   │
    |   └───li
    |   |   |
    |   |   └───document
    |   │
    |   └───li
    |   |   |
    |   |   └───element
    |   │
    |   └───li
    |       |
    |       └───attribute
    │
    └───p
    |   |
    │   └───Introduce tu correo si quieres más información 
    │
    └───form---action=https://www.ull.es
        │   ---method=post
        │
        └───h2
        |   │
        |   └───Ejemplo para el árbol DOM
        │
        └───p
        |   │
        |   └───Puedes introducir tu correo, si quieres suscribirte
        │
        └───div
            │
            └───div
            |    │
            |    └───label---for=newsletterEmailInput
            |    |   │
            |    |   └───E-mail
            |    │
            |    └───input---id=newsletterEmailInput
            │             ---type=email
            │             ---name=email
            │             ---required=
            │             ---placeholder=you@example.com
            │             ---size=30
            |
            └───div
                 │
                 └───button---id=newsletter-submit
                     │     ---class=button neutral newsletter-submit
                     │     ---type=submit
                     |
                     └───Sign up now 

```

    Las etiquetas HTML hijas de otras etiquetas html son nodos hijos en la jerarquía.
    El texto que encierra dicha etiqueta es así mismo un nodo hijo de la propia 
    etiqueta. Sin embargo los atributos están posicionados al mismo nivel. Tal y como
    muestra el siguiente esquema:

![DOM-diagram](media/img/DOM-model.svg.png)

> más información en este [link](https://en.wikipedia.org/wiki/Document_Object_Model)

## FUNCIÓN JAVASCRIPT PARA CALCULAR EL CAMBIO ENTRE DIFERENTES MONEDAS

## FUNCIÓN JAVASCRIPT PARA CALCULAR EDAD Y SUELDO

## FUNCIÓN JAVASCRIPT PARA INFORME DE LA CÁNTIDAD DE ELEMENTOS EN EL INICIO

```
Esto es un bloque de código.
```

