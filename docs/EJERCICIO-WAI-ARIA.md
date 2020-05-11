# Ejercicio de WAI-ARIA: Revisón de páginas con formularios:
    El siguiente documento va a registrar el cambio de accesibilidad proporcionado por el etiquetado
    de propiedades WAI-ARIA de la página en algunos de sus elementos de interacción 

## Página principal

## Página de perfil

## Página [cambio de monedas](https://traday-362aa.web.app/exchange.html) 
    En esta sección nos vamos a encargar de analizar los problemas que nos encontremos en nuestra página, concretamente en la parte que implementamos del cambio de moneda. Esta parte de la página es de alto riesgo para la accesibilidad ya que contiene formularios que, si no tratamos y etiquetamos de forma correcta, un lector de pantalla como Chrome Vox podría perderse o saltarse algo importante. Por ello, a continuación pondremos los errores que hemos ido encontrando tras usar Chrome Vox y cómo los hemos solucionado mediante el uso de WAI-ARIA.

    
### Error 1

Uno de los primeros errores que nos encontramos nada mas empezar fue que a la hora de moverse por la página con tabulador, nunca podíamos acceder con el foco a la zona del resultado. Esto es un problema ya que si una persona con deficiencia visual quisiera usar nuestro cambio de moneda, jamás podría escuchar cual es el resultado del cambio. En el siguiente gif se puede ver el error comentado:

![exchange-error-resultado]( ../public/media/img/gif_exchange1.gif "gif donde se puede observar el error de foco en resultado")

La solución que encontramos usando WAI-ARIA fue usar la etiqueta **tabindex=0**, con esto sí que conseguimos que a la hora de tabular saltase el foco de Cambiar a Resultado. En el gif que mostramos a continuación se puede ver:

![exchange-solucion-resultado]( ../public/media/img/gif_exchange2.gif "gif donde se puede observar la solución del error de foco en resultado")

### Error 2

Este error es muy parecido al error 1, en este caso, cuando navegábamos con el tabulador por el menú superior, nos saltaba el foco de Grupos a Moneda base, sin pasar por el título **Cambio entre monedas**, el cual nos pareció importante ya que una persona con algún tipo de deficiencia visual tiene que saber que va a acceder a la sección donde podrá realizar el cambio de moneda. En el siguiente gif se puede ver el error en cuestión:

![exchange-error-cambio]( ../public/media/img/gif_exchange3.gif "gif donde se puede observar el error de foco en cambio de moneda")

La solución para esto fue la misma que en el anterior error, al añadir la etiqueta **tabindex=0** conseguimos que el foco pasara por el título de cambio de monedas al saltar de Grupos a Moneda Base. En el gif siguiente se puede ver:

![exchange-solucion-cambio]( ../public/media/img/gif_exchange4.gif "gif donde se puede observar la solución del error de foco en cambio de monedas")


### Error 3

Cuando el foco pasaba por el botón para cambiar, Chrome Vox decía "Cambiar send". Esto se debía a que en el botón, además de la palabra cambiar, sale un avión de papel, el cual recibe este nombre y el lector de pantalla lo nombraba. A continuación dejo el fragmento de código en cuestión:

```
<button class="btn waves-effect waves-light" 
        value="click"
        type="button"
        id="myButton"
        onclick="convertCurrency(this.form)">Cambiar
    <i class="material-icons right">send</i>
</button>
```

Para solucionar esto, implementamos la etiqueta aria-label="", la cual nos permite especificar una string para usar como etiqueta accesible. Es decir, evita que el lector de voz diga "send" y diga lo que pongamos entre las "". En nuestro caso pusimos aria-label="moneda" y así Chrome Vox al pasar por este botón dice "Cambiar moneda" en vez de "Cambiar send". Con esto hemos logrado que una persona que use algún lector de pantalla tenga más claro para que sirve.

### Errores menores

Por último, vamos a comentar algunos "errores" menores que encontramos a la hora de usar un lector de pantalla como Chrome Vox.

- Lo primero es que cuando el foco pasaba por moneda base y moneda al cambio, no quedaba muy claro si el usuario tenía que escribir o seleccionar, la solución que encontramos fue modificar el texto y poner "Seleccione una moneda base" y "Selecciona una moneda al cambio". Con esto estamos seguros que una persona con algún tipo de deficiencia visual sabrá que tiene que seleccionar y no escribir en el formulario.

![Exchange-error-monedas]( ../public/media/img/error-exchange1.PNG "imagen donde se puede ver cómo quedó la página tras las modificaciones en las monedas")

- Este error menor es muy parecido que el anterior, ya que en valor a determinar teníamos puesto el número 10, para así dar a entender a una persona que tenga buena visión que ahí tenía que poner un número. El problema es que si la persona está usando un lector de pantalla, la voz decía simplemente "diez" y esto era muy poco intuitivo, así que lo modificamos por "Escriba un valor para la moneda base". Con esto, el lector de pantalla diría esa frase y a la persona con falta de visión le quedaría muy claro que ahí era donde tenía que introducir un número.

![Exchange-error-valor]( ../public/media/img/error-exchange2.PNG "imagen donde se puede ver cómo quedó la página tras la modificación en valor a determinar")