
# INFORME Criterios - Técnicas WCAG 2.1 (II) - Principio Comprensible y Robusto

Se pretende analizar y explicar cada una de las pautas que componen el WCAG 2.1 Comprensible-Robusto sobre dos webs de ejemplo. Las webs a analizar son las siguientes: 
- [Sinpromi](https://sinpromi.es/)
- [Noticias Sinpromi](https://sinpromi.es/noticias)

***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Sinpromi](https://sinpromi.es/)

Se explicacarán y analizarán todos los criterios y pautas sobre [Sinpromi](https://sinpromi.es/).

### Pauta 3.1: Contenidos de fácil comprensión y lectura

- Criterio 3.1.1 (A): No se encuentra ninguna forma de determinar por software el lenguaje de la web, por tanto este criterio no ha sido cumplido. Lo podemos ver además en la siguiente imagen:

![Sinpromi-lang](../public/media/img/sinpromi-lang.png "Imagen que muestra la parte del codigo que hace referencia al lenguaje")

El lenguaje se puede identificar usando **lang** y se puede apreciar su contenido en la imagen anterior.

- Criterio 3.1.2 (AA): Como ya vimos en el anterior criterio, no se encuentra ninguna forma de determinar por software el lenguaje de la web. Aún así, se usa **lang** en los elementos HTML.

### Pauta 3.2: Manejo de Webs de forma predecible

- Criterio 3.2.1: Al hacer uso de del foco sobre los elementops de la web, no se inicia un cambio en el contexto, podemos navegar con el tabulador por toda la web sin este tipo de problema.
Se puede abrir ventanas y enlaces sólo cuando sea necesario.
Por todos estos motivos, este criterio ha sido cumplido.

- Criterio 3.2.2: Se cumple que el cambio de estado en un componenete no provoca automáticamente el cambio de contexto.

- Criterio 3.2.3: Algunos de los ejemplos que cumple esdte criterio son la de un menú de navegación extendible, incluyendo en el una serie de elementos con enlaces a las principales secciones de un sitio web.


### Pauta 3.3: Evitar y corregir errores

- Criterio 3.3.1: Al introducir nuestras credenciales en la entrada de datos correspondiente, se identifica el elemento erróneo ademas de describir el motivo del error mediante texto. Podemos ver un ejemplo de ello en la siguiente imágen:

![fallo-usuario](../public/media/img/fallo-usuario.png "Se muestra el bloque de texto con el error")

- Criterio 3.3.2: En la cajetilla de entrada de datos se le muestra al usuario un ejemplo o una breve descripción orientativa sobre los datos a introducir en la misma.

Tomamos como ejemplo el formulario de registro, que nos muestra lo siguiente:

![registro-sinpromi](../public/media/img/registro-sinpromi.png "Imagen que ilustra el formulario de registro de la web  Sinpromi")

- Criterio 3.3.3: A la hora de hacer el registro, si se encuentra algún tipo de error, se presta al usuario una breve descripción del problema.


***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Noticias Sinpromi](https://sinpromi.es/noticias)
 
 Se explicacarán y analizarán todos los criterios y pautas sobre [Noticias Sinpromi](https://sinpromi.es/noticias).