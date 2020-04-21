
# INFORME Criterios - Técnicas WCAG 2.1 (II) - Principio Comprensible y Robusto

Se pretende analizar y explicar cada una de las pautas que componen el WCAG 2.1 Comprensible-Robusto sobre dos webs de ejemplo. Las webs a analizar son las siguientes: 
- [Sinpromi](https://sinpromi.es/)
- [Noticias Sinpromi](https://sinpromi.es/noticias)

***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Sinpromi](https://sinpromi.es/)
***

Se explicacarán y analizarán todos los criterios y pautas sobre [Sinpromi](https://sinpromi.es/).

### Pauta 3.1: Contenidos de fácil comprensión y lectura

- **Criterio 3.1.1 (A):** No se encuentra ninguna forma de determinar por software el lenguaje de la web, por tanto este criterio no ha sido cumplido. Lo podemos ver además en la siguiente imagen:

![Sinpromi-lang](../public/media/img/sinpromi-lang.png "Imagen que muestra la parte del codigo que hace referencia al lenguaje")

El lenguaje se puede identificar usando **lang** y se puede apreciar su contenido en la imagen anterior.

- **Criterio 3.1.2 (AA):** Como ya vimos en el anterior criterio, no se encuentra ninguna forma de determinar por software el lenguaje de la web. Aún así, se usa **lang** en los elementos HTML.

### Pauta 3.2: Manejo de Webs de forma predecible

- **Criterio 3.2.1:** Al hacer uso de del foco sobre los elementops de la web, no se inicia un cambio en el contexto, podemos navegar con el tabulador por toda la web sin este tipo de problema.
Se puede abrir ventanas y enlaces sólo cuando sea necesario.
Por todos estos motivos, este criterio ha sido cumplido.

- **Criterio 3.2.2:** Se cumple que el cambio de estado en un componenete no provoca automáticamente el cambio de contexto.

- **Criterio 3.2.3:** Algunos de los ejemplos que cumple esdte criterio son la de un menú de navegación extendible, incluyendo en el una serie de elementos con enlaces a las principales secciones de un sitio web.


### Pauta 3.3: Evitar y corregir errores

- **Criterio 3.3.1:** Al introducir nuestras credenciales en la entrada de datos correspondiente, se identifica el elemento erróneo ademas de describir el motivo del error mediante texto. Podemos ver un ejemplo de ello en la siguiente imágen:

![fallo-usuario](../public/media/img/fallo-usuario.png "Se muestra el bloque de texto con el error")

- **Criterio 3.3.2:** En la cajetilla de entrada de datos se le muestra al usuario un ejemplo o una breve descripción orientativa sobre los datos a introducir en la misma.

Tomamos como ejemplo el formulario de registro, que nos muestra lo siguiente:

![registro-sinpromi](../public/media/img/registro-sinpromi.png "Imagen que ilustra el formulario de registro de la web  Sinpromi")

- **Criterio 3.3.3:** A la hora de hacer el registro, si se encuentra algún tipo de error, se presta al usuario una breve descripción del problema.
    Fácil lectura y comprensión de los contenidos



### Criterios relacionados con las pautas de  Robusto:

### Pauta 4.1: Compatibilidad

  Compatible: Maximizar la compatibilidad con las aplicaciones de usuario actuales y futuras, incluyendo las ayudas técnicas.

- **Criterio 4.1.1 (Nivel AA):** La web sí cumple este criterio ya que, podemos encontrar que todos los elementos tienen las etiquetas de apertura y cierre completas, están anidados de acuerdo a sus especificaciones, no contienen atributos duplicados y no hemos encontrado ningún ID repetido. Esto se puede comprobar mediante las técnicas de validadores automáticos, además de que se nota que siguen el estándar HTML. A continuación se puede ver una captura del código de la página de [Sinpromi](https://sinpromi.es/) donde se puede observar como se cumple:

![criterio411](../public/media/img/criterio411.PNG "Imagen que muestra una sección del código de la página de Sinpromi.")

- **Criterio 4.1.2 (nivel A):** Sí lo cumple ya que, para todos los componentes de la interfaz de usuario el elemento y la función pueden ser determinados por software. Además, el usuario no tiene que aportar nada así que no hay que especificarlo por software ni consultar los cambios. Alguna técnica que se puede emplear para llevar a cabo esto es la ARIA14: Usar aria-label para proporcionar una etiqueta invisible donde no se puede usar una etiqueta visible

- **Criterio 4.1.3 (nivel A):** Este criterio no puede ser comprobado en esta página ya que no hay ningún temporizador o formulario que requiera de tiempo y te pueda mandar un aviso. Este criterio viene a decir que aunque los mensajes de error y las advertencias pueden ser mensajes de estado, no lo son si cambian el contexto al establecer el foco en el error. Este criterio beneficia a aquellas personas que usan tecnología de asistencia, como lectores de pantalla.


***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Noticias Sinpromi](https://sinpromi.es/noticias)
***

Se explicacarán y analizarán todos los criterios y pautas sobre [Noticias Sinpromi](https://sinpromi.es/noticias).
 
### Pauta 3.1: Contenidos de fácil comprensión y lectura

- **Criterio 3.1.1:** 

    Este criterio se cumple, queda demostrado al revisar el uso de la etiqueta que proporciona información sobre el lenguaje:

    ```html
    <html lang="es">
    
        ···
    
    </html>
    ```

- **Criterio 3.1.2:** 

    Cada uno de los elementos (por ejemplo las noticias) queda marcado en cuanto a lenguasje de la misma manera que el anterior apartado. Por lo que podemos decir que se cumple dicho criterio.

### Pauta 3.2: Manejo de Webs de forma predecible**

    Manejo predecible en el diseño de páginbas web


- **Criterio 3.2.1:** 

    Para realizar un cambio de contexto es necesario *"clickar"* el elemento que lo ofrece (o pulsar *enter*), por ello se puede afirmar que este criterio se cumple.

- **Criterio 3.2.2:** 
    El componente de menú de navegación, por ejemplo, no inicia un cambio de contexto, sino que se  abre en la web dando la oportunidad de revertirlo. Además indica el foco tras su selección. De la misma manera se pueden modificar los estados de los componentes en materia de tamaño y apariencia sin requerir cambiar el contexto.

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/prev-cambio.png" width="50%" style="padding:10px;">
      <img src="../public/media/img/post-cambio.png" width="50%" style="padding:10px;">
    </div>

- **Criterio 3.2.3:**    
    El orden de los menús de navegación permiten acceder a todos los elementos desde cualquier otro punto de la página sin cambiar su orden, por lo que podemos definir este criterio como cumplido.

- **Criterio 3.2.4**
    Las noticias se identifican todas bajo la misma estr4uctura, por ello los componentes se identifican de manera consistente
    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/noticias-consistencia.png" width="50%" style="padding:10px">
    </div>


### Pauta 3.3: Evitar y corregir errores

    Ayuda a los usuarios a evitar y corregir de errores 

> Para estos criterios nos fijaremos ene el modal de inicio de sesión de la página. Se accede pulsando "*ENTRAR*"

- **Criterio 3.3.1**    

    Se indican los campos que han dado error en el campo seleccionado y de manera textual. Por ejemplo en el usuario.

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/error-registro.png" width="50%" style="padding:10px">
    </div>


- **Criterio 3.3.2:**    
    En el mismopp elemento mencionado en el anterior punto se aprecia un ejemplo de este caso, a la hora de introducir los datos rerequeridos hay un ejemplo de lo que se debería de introducir o el tipo de formato que admite:

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/ejemplos-inicio.png" width="50%" style="padding:10px">
    </div>



### Criterios relacionados con las pautas de  Robusto:

### Pauta 4.1: Compatibilidad**

- **Criterio 4.1.1 (Nivel AA):** La web sí cumple este criterio ya que, podemos encontrar que todos los elementos tienen las etiquetas de apertura y cierre completas, están anidados de acuerdo a sus especificaciones, no contienen atributos duplicados y no hemos encontrado ningún ID repetido. Esto se puede comprobar mediante las técnicas de validadores automáticos, además de que se nota que sigue el estándar HTML. A continuación, se puede ver una captura del código de sección de [noticias](https://sinpromi.es/noticias/) de la página de [Sinpromi](https://sinpromi.es/) donde se puede observar como se cumple:

![criterio411noticias](../public/media/img/criterio411noticias.PNG "Imagen que muestra una sección del código de la zona de noticias de la página de Sinpromi.")

- **Criterio 4.1.2 (nivel A):** Sí lo cumple ya que, para todos los componentes de la interfaz de usuario el elemento y la función pueden ser determinados por software. Además, el usuario no tiene que aportar nada así que no hay que especificarlo por software ni consultar los cambios. Alguna técnica que se puede emplear para llevar a cabo esto es la ARIA14: Usar aria-label para proporcionar una etiqueta invisible donde no se puede usar una etiqueta visible

- **Criterio 4.1.3 (nivel A):** Este criterio no puede ser comprobado en esta página ya que no hay ningún temporizador o formulario que requiera de tiempo y te pueda mandar un aviso. Este criterio viene a decir que aunque los mensajes de error y las advertencias pueden ser mensajes de estado, no lo son si cambian el contexto al establecer el foco en el error. Este criterio beneficia a aquellas personas que usan tecnología de asistencia, como lectores de pantalla.
