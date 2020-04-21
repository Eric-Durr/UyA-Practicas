
# INFORME Criterios - Técnicas WCAG 2.1 (II) - Principio Comprensible y Robusto

Se pretende analizar y explicar cada una de las pautas que componen el WCAG 2.1 Comprensible-Robusto sobre dos webs de ejemplo. Las webs a analizar son las siguientes: 
- [Sinpromi](https://sinpromi.es/)
- [Noticias Sinpromi](https://sinpromi.es/noticias)

***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Sinpromi](https://sinpromi.es/)

Se explicacarán y analizarán todos los criterios y pautas sobre [Sinpromi](https://sinpromi.es/).

***
## Análisis de los criterios A, AA de los principios Comprensible y Robusto sobre la web [Noticias Sinpromi](https://sinpromi.es/noticias)
 
Se explicacarán y analizarán todos los criterios y pautas sobre [Noticias 
Sinpromi](https://sinpromi.es/noticias).


### Criterios relacionados con las pautas de  Comprensible:

**Pauta 3.1**

    Fácil lectura y comprensión de los contenidos

- Criterio 3.1.1 

    Este criterio se cumple, queda demostrado al revisar el uso de la etiqueta que proporciona información sobre el lenguaje:

    ```html
    <html lang="es">
    
        ···
    
    </html>
    ```

- Criterio 3.1.2 

    Cada uno de los elementos (por ejemplo las noticias) queda marcado en cuanto a lenguasje de la misma manera que el anterior apartado. Por lo que podemos decir que se cumple dicho criterio.

**Pauta 3.2**

    Manejo predecible en el diseño de páginbas web


- Criterio 3.2.1 

    Para realizar un cambio de contexto es necesario *"clickar"* el elemento que lo ofrece (o pulsar *enter*), por ello se puede afirmar que este criterio se cumple.

- Criterio 3.2.2 
    El componente de menú de navegación, por ejemplo, no inicia un cambio de contexto, sino que se  abre en la web dando la oportunidad de revertirlo. Además indica el foco tras su selección. De la misma manera se pueden modificar los estados de los componentes en materia de tamaño y apariencia sin requerir cambiar el contexto.

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/prev-cambio.png" width="50%" style="padding:10px;">
      <img src="../public/media/img/post-cambio.png" width="50%" style="padding:10px;">
    </div>

- Criterio 3.2.3    
    El orden de los menús de navegación permiten acceder a todos los elementos desde cualquier otro punto de la página sin cambiar su orden, por lo que podemos definir este criterio como cumplido.

- Criterio 3.2.4 
    Las noticias se identifican todas bajo la misma estr4uctura, por ello los componentes se identifican de manera consistente
    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/noticias-consistencia.png" width="50%" style="padding:10px">
    </div>


**Pauta 3.3**

    Ayuda a los usuarios a evitar y corregir de errores 

> Para estos criterios nos fijaremos ene el modal de inicio de sesión de la página. Se accede pulsando "*ENTRAR*"

- Criterio 3.3.1    

    Se indican los campos que han dado error en el campo seleccionado y de manera textual. Por ejemplo en el usuario.

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/error-registro.png" width="50%" style="padding:10px">
    </div>


- Criterio 3.3.2    
    En el mismopp elemento mencionado en el anterior punto se aprecia un ejemplo de este caso, a la hora de introducir los datos rerequeridos hay un ejemplo de lo que se debería de introducir o el tipo de formato que admite:

    <div style="display: flex; justify-content: center; align-items: center; ">
      <img src="../public/media/img/ejemplos-inicio.png" width="50%" style="padding:10px">
    </div>

### Criterios relacionados con las pautas de  Robusto:

**Pauta 4.1**
