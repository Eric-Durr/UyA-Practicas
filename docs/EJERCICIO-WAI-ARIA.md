# Ejercicio de WAI-ARIA: Revisón de páginas con formularios:
    El siguiente documento va a registrar el cambio de accesibilidad proporcionado por el etiquetado
    de propiedades WAI-ARIA de la página en algunos de sus elementos de interacción 

## [Página principal](https://traday-362aa.web.app/index.html)
    En el apartado de la página principal se va a hacer especial hincapié ,pese a que sea 
    un error presente en la mayoría, a la barra de navegación ya que esta ofrece una vista
    lateral responsiva y una superior para dispositivos más grandes. Además se revisará que 
    el foco pase por todos los elementos.

El primer problema que nos encontramos es que la herramienta de chromevox se ve forzada a 
leer los dos menús cuando se explora la página ya que para la herramienta de tabulación esta 
está presente y no oculta. Además los enlaces de la lista no son 100% accesibles desde teclado
y el menú debe poderse cerrar. Para solucionar esto se ha optado por establecer el *tabindex=-1* atrubito el cual se cambia a *0* mediante javascript para activar su interacción con un enter o un click. Cuando se sale de este el *tabindex*
vuelve a ser *0*

los códigos quedarían así:
```html
      function changeValues(e)  
      {
        if(e.keyCode==13)
        {
          list = document.getElementById("traday-nav").getElementsByTagName("LI");
          console.log(list);
          for (let i = 0; i < list.length; i++)
          {
            list[i].childNodes[0].tabIndex=0;
          }
        }
      }

      function nullValues(e)  
      {
        if(e.keyCode==13)
        {
          list = document.getElementById("traday-nav").getElementsByTagName("LI");
          console.log(list);
          for (let i = 0; i < list.length; i++)
          {
            list[i].childNodes[0].tabIndex=-1;
          }
        }
      }
```
Y en el siguiente .gif se confirma su correcto funcionamiento:

![imagenes de captura de modales](./media/img/nav.gif)

Otro de los problemas se encontraba en el uso de los botones, los cuales al ser enlaces no funcionaban con la tecla enter.
Para solucionarlo se ha cambiado a botones. Además estos en lugar de leer su contenido, chromevox debe nombrar su propósito. Por ello se ha editado también esta característica.


Lo siguiente a revisar son los modales abiertos por los propios botonoes. A estos se les debe añadir el rol "dialog" para que el foco sepa la región en la que puede y no puede actuar. También se emplea *aria-labeledby* para indicarle, mediante el id, de qué elemento va a tomar el nombre que debe indicar y  *aria-describedby* para proporcionar una descripción de lo que se hace. 

Se han incluido también las etiquetas correspondientes de nombramiento y requerimiento a los formularios y botones que contienen los modales. (*aria-label* *aria-required*)



En el siguiente .gif se muestra su correcto funcionamiento:
![imagenes de captura de modales](./media/img/modals.gif)

## Página de perfil

## Página cambio de monedas
