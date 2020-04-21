
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

**Pauta 3.2**

**Pauta 3.3**

### Criterios relacionados con las pautas de  Robusto:

**Pauta 4.1**

  Compatible: Maximizar la compatibilidad con las aplicaciones de usuario actuales y futuras, incluyendo las ayudas técnicas.

- **Criterio 4.1.1 (Nivel AA):** La web sí cumple este criterio ya que, podemos encontrar que todos los elementos tienen las etiquetas de apertura y cierre completas, están anidados de acuerdo a sus especificaciones, no contienen atributos duplicados y no hemos encontrado ningún ID repetido. Esto se puede comprobar mediante las técnicas de validadores automáticos, además de que se nota que siguen el estándar HTML. A continuación se puede ver una captura del código de la página de [Sinpromi](https://sinpromi.es/) donde se puede observar como se cumple:

![criterio411](../public/media/img/criterio411.png "Imagen que muestra una sección del código de la página de Sinpromi.")

- Criterio 4.1.2 (nivel A): Sí lo cumple ya que, para todos los componentes de la interfaz de usuario el elemento y la función pueden ser determinados por software. Además, el usuario no tiene que aportar nada así que no hay que especificarlo por software ni consultar los cambios. Alguna técnica que se puede emplear para llevar a cabo esto es la ARIA14: Usar aria-label para proporcionar una etiqueta invisible donde no se puede usar una etiqueta visible
- Criterio 4.1.3 (nivel A): Este criterio no puede ser comprobado en esta página ya que no hay ningún temporizador o formulario que requiera de tiempo y te pueda mandar un aviso. Este criterio viene a decir que aunque los mensajes de error y las advertencias pueden ser mensajes de estado, no lo son si cambian el contexto al establecer el foco en el error. Este criterio beneficia a aquellas personas que usan tecnología de asistencia, como lectores de pantalla.