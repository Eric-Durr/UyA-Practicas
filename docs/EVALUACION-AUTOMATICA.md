
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

### WAVE

### Contraste de colores












***
## Evaluación automática de la web [Cabildo de Tenerife]("https://www.tenerife.es/portalcabtfe/es/")
***

Se analizarán por separado las evaluaciones automáticas realizadas por cada herramienta sobre la web [Cabildo de Tenerife]("https://www.tenerife.es/portalcabtfe/es/")

### Validadores HTML y CSS del W3C

<br>
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


### WAVE

Resultado general del **Análisis WAVE** para la accesibilidad según **WCAG:**


### Contraste de colores

Resultado general del **análisis de contraste** de la herramienta **Contrast Analyser:**











***
## Evaluación automática de la web [Cabildo de Tenerife][La Caixa]("https://www.caixabank.es/index_es.html")

***

Se analizarán por separado las evaluaciones automáticas realizadas por cada herramienta sobre la web [La Caixa]("https://www.caixabank.es/index_es.html")

### Validadores HTML y CSS del W3C

### WAVE

### Contraste de colores