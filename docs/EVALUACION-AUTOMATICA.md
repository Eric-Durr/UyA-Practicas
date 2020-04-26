# INFORME Evaluación automática de la accesibilidad

Se pretende analizar y hacer uso de la evaluación automática de la accesibilidad que proporcionan los validadores HTML y CSS del W3C, WAVE y contraste de colores sobre las páguinas de inicio de los siguientes sitios:

- [Cermi]("https://www.cermi.es")
- [Cabildo de Tenerife]("https://www.tenerife.es/portalcabtfe/es/")
- [La Caixa]("https://www.caixabank.es/index_es.html")

***
## Evaluación automática de la web [Cermi]("https://www.cermi.es")
***

Se analizarán por separado las evaluaciones automáticas realizadas por cada herramienta sobre la web [Cermi]("https://www.cermi.es")

### Validadores HTML y CSS del W3C

- **Validador HTML**

Para analizar el código HTML se ha hecho uso de la herramienta de [validación HTML](http://validator.w3.org) del W3C.

Una vez introducimos el link de la web a analizar, se muestra una serie de conflictos y warnigns. En total se registran 61 advertencias y errores para la web Cermi.
Los warnings que se nos presentan en sí mismos, se muestran elementos que realmente no son necesarios y deberían de ser omitidos. Un ejemplo de ello se muestra a continuación.

![warnings-html](../public/media/img/warning-html.png "Imagen que muestra ejemplo de warning")

Por otro lado, los errores que se muestran referentes al código HTML de la web, son en su mayoría referentes a fallos a la hora de establecer atributos. Estos errores no entorpecen la funcionalidad de la página en cuestión.

![error-html](../public/media/img/error-html.png)

- **Validador CSS** 

Para analizar el código CSS se ha hecho uso de la herramienta de [validación CSS](http://jigsaw.w3.org/css-validator/) del W3C.

Por esta parte, también se nos muestran una serie de warnigns y errores. Los errrores encontrados se tratan de dos errores sintáticos y el uso de una propiedad no válida para una función. Éstos se muestran a continuación:

![error-css](../public/media/img/error-css.png "Imagen que muestra ejemplo de warning")

Los warnings pertenecientes a esta web, en su gran mayoría se tratan del error "(...) is a unknown vendor extension". Estos tipo de warning es a causa de que el prefijo del mismo fue creado por un explorador específico, y por tanto, W3C no lo reconoce como parte del código de CSS.

![warning-css](../public/media/img/warning-css.png)


### WAVE

Después de analizar la web con WAVE se nos muestran exactamente 15 errores y 7 advertencias. Los errores graves vienen dadas sobretodo por la falta de texto alternativo a imágenes, tal y como se muestra a continuación: 

![wave-error1](../public/media/img/wave-error1.png)

El siguiente error que se nos muestra, es la ausencia de un documento de lenguaje definido.

![wave-error2](../public/media/img/wave-error2.png)

### Contraste de colores

Para analizar el Contraste de Colores sobre la web de [Cermi]("https://www.cermi.es") se ha hecho uso de la herramienta [A11Y]("https://color.a11y.com/Contrast/"). Una vez introducido el link de la web a analizar, se muestra de que ésta no presenta problemas referidos a la elección de contraste de colores. 

![color-contrast](../public/media/img/color-contrast.png "Imagen que muestra los colores analizados por la herramienta.")



***
## Evaluación automática de la web [Cabildo de Tenerife]("https://www.tenerife.es/portalcabtfe/es/")
***

Se analizarán por separado las evaluaciones automáticas realizadas por cada herramienta sobre la web [Cabildo de Tenerife]("https://www.tenerife.es/portalcabtfe/es/")

### Validadores HTML y CSS del W3C

<br>

Resultado general del **Análisis HTML:**

    Tras pasar la página web del Cabildo de Tenerife por la herramienta surgen 38 registros de análisis. La mayoría son warning, además, relacionados con el mismo tipo de aviso. Se hace mención a que el atributo "type" no es usado por recursos de JavaScript

![warn-img-cabildo]( ../public/media/img/warn-img-cabildo.png "imagen que ejemplifica el anterior punto, se puede ver un warning en color amarillo exponiendo lo antes explicado")

    Sin embargo este hecho no afecta a la accesibilidad del sitio.

    Por otro lado los errores que son detectados, en su mayoría, no afectan gravemente a la 
    accesibilidad de la página, son producto de un uso no estandarizado de algunas propiedades.
    Sin embargo hay varios un errores denominado como:
![err-img-cabildo]( ../public/media/img/err-img-cabildo.png "imagen que ejemplifica el      anterior punto, se puede ver un error en color rojo exponiendo lo antes explicado")

>"A link element must not appear as a descendant of a 
    body element unless the link element has an itemprop attribute or has a rel attribute whose 
    value contains"

    Esto podría provocar errores y confusión a la hora de organizar los elementos de la web y en su posterior navegación por medio de otras herramientas.

<br>
<br>

Resultado general del **Análisis CSS:**
    
    Una vez más la mayoría de registros de análisis que nos vuelca la herramienta son advertencias. Siendo 8 de los registros errores de entre los cuales se pueden abstraer dificultades de accesibilidad.

    La Mayoría de advertencias sobre CSS  se deben a uso no estandar o menos ortodoxo de las 
    propiedades.

![css-warngs-img]( ../public/media/img/css-warngs-img.png)

    Haciendo hincapié en el análisis de errores la mayoría pueden deberse al uso de framework
    y JS al calcular propiedades y apariencias. Este tipo de errores no supone, en la mayoría
    de los casos un impedimento que penalice la accesibilidad. De entre ellos el que más se 
    acerca a esta situación es el siguiente:

![css-err-img]( ../public/media/img/css-err-img.png)
>   Propiedad no válida : speak none no es un valor de speak : none

    Este podría estar invalidando de manera involuntaria algunas herramientas de control por voz.


<br>
<br>

### WAVE

Resultado general del **Análisis WAVE** para la accesibilidad según **WCAG:**

    Tras ejecutar el analizador con esta página salen solamente dos errores graves además de 4 errores de contraste. Sin embargo si lo comparamos con los puntos positivos son superados por estos que son 25.

    También cabe destacar que la estructura de jerarquía HTML es limpia, concisa y no redundante en la mayoría de sus puntos. Algunos de los elementos, tal y como lo señalan los avisos, la estrtuctura es redundante en las imágenes dado que presentan el mismo texto alternativo donde, además, este no explica la imágen, no poniéndole título. Esto podría difuminar la imagen de la web si se usase con un explorador por lectura de la misma.

![notitle-warn-img]( ../public/media/img/notitle-warn-img.png)

<br>
<br>

### Contraste de colores

Resultado general del **análisis de contraste** de la herramienta **a11y:**

    Tras ejecutar el análisis de contraste saltan tres errores  en contraposición a los 4 de la anterior herramienta.Se podrían interpretar como graves. No se alejan demasiado del ratio adecuado pero podrían dificultar la lectura de algunos usuarios con disfunción visual.

![contrast-cab-img]( ../public/media/img/contrast-cab-img.png)

    El primer error está principalmente presente en los elementos de botón y algunos títulos

![contrast-cab-example]( ../public/media/img/contrast-cab-example.png)





***
## Evaluación automática de la web [La Caixa]("https://www.caixabank.es/index_es.html")

***

Se analizarán por separado las evaluaciones automáticas realizadas por cada herramienta sobre la web [La Caixa]("https://www.caixabank.es/index_es.html")

### Validadores HTML y CSS del W3C

Respecto al [validador HTML de W3C](http://validator.w3.org) en la página de [La Caixa](https://www.caixabank.es/index_es.html) nos han aparecido 7 errores y 27 alertas. Los primeros errores que nos salen están relacionados con el atributo meta, en principio estos errores no tienen un impacto significativo en la accesivilidad:

![ErrorMetaCaixa](../public/media/img/ErrorMetaCaixa.PNG "Imagen que muestra los errores meta en el código html de la página de La Caixa")

En cuanto al error *"Stray end tag link"* probablemente sea debido a que la etiqueta *link* no esté abierto al principio. Por último, sale un error *"Bad value for attribute id on element div: An ID must not be the empty string"* que sí es un fallo más grave ya que hay un id="" que no tiene ningún nombre. Esto puede confundir a los lectores de pantalla y dificultar la accesivilidad.

Respecto al [validador CSS de W3C](http://jigsaw.w3.org/css-validator/) en la página de [La Caixa](https://www.caixabank.es/index_es.html) nos han aparecido 2 errores y 289 alertas:

![ErrorCSSCaixa](../public/media/img/ErrorCSSCaixa.PNG "Imagen que muestra los errores de CSS de la página de La Caixa")

Respecto al primer error simplemente nos indica que hay una propiedad no válida para width que han llamado *"device-width"*. Este error no debería suponer un problema muy grande para la accesibilidad aunque si habría que cambiarlo.

### WAVE

La herramienta [WAVE](http://wave.webaim.org/?lang=es) es bastante útil para facilitar la accesibilidad según las pautas de WCAG.

Los únicos errores que detecta esta aplicación en la página de [La Caixa](https://www.caixabank.es/index_es.html) son de contraste, los cuales serán explicados con más detalle en el apartado de Contraste de colores. Además, podemos encontrar algunas alertas relacionadas con el tamaño del texto, ya que en algunos puntos se podría dificultar con esto a personas con falta de vista por ser tan pequeño. Esto se puede solucionar de la forma más simple que es aumentarlo de tamaño:

![ContrasteColorCaixa](../public/media/img/LetraPequeñaCaixa.PNG "Imagen que muestra las alertas detectadas por letra demasiado pequeña en la página de La Caixa")

También hay algunas alertas porque hay links redundantes y otras porque hay títulos redundantes, lo que podría llegar a ser un problema para personas que se pueden perder facilmente o distraer. Esto puede ser solucionado con técnicas como la eliminación o modificación de estos para poder evitarlo.

### Contraste de colores

Tras usar la página web de [contraste de color](https://color.a11y.com/Contrast/), hemos llegado a la conclusión de que la página de [La Caixa](https://www.caixabank.es/index_es.html) cumple bastante bien con las pautas de contraste de color. Solo son destacables dos errores ya que hay letras en color blanco y con fondo gris, que puede dificultar la visualización para aquellas personas con algún tipo de disfuncionalidad visual. Los errores son los siguientes:

![ContrasteColorCaixa](../public/media/img/ContrasteColorCaixa.PNG "Imagen que muestra los errores detectados con el contraste de color de la Caixa")

Estos errores son facilmente solucionables con técnicas como aumentar el contraste hasta 4,5:1 o con señales visuales adicionales cuando las diferencias de color transmiten información.