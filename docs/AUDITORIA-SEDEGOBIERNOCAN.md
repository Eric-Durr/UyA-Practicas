# Informe en profundidad de accesibilidad - Sede Electrónica Gobierno de Canarias
    El presente documento pretende hacer un análisis detallado sobre los factores
    que afectan a la accesibilidad de la sede electrónica del gobierno de canarias.
    Además de un resumen de sus apartados, algunos ejemplos de aquellos errores más 
    frecuentes y las consecuentes sugerencias de mejora para la accesibilidad.


<br>

Esta adutoría de accesibilidad se ha realizado para la [**sede electrónica del Gobierno de 
Canarias**](https://sede.gobcan.es/sede/). 

Se ha usado para su análisis la herramienta 
AuditTool - WCAG 2.1 de Olga Carreras Montoto.

Además se emplean herramientas de evaluación automática como:
- [WAVES](link al waves)
- [OTRO](link al waves)
    ···

Los autores del informe son:
- [Alejandro Martín de León](alu0101015941@ull.edu.es)
- [Eric Dürr Sierra](alu0101027005@ull.edu.es)
- [Oscar Cigala Álvarez](alu010101038230@ull.edu.es)




Estos autores pertenecen al prupo 02 de la asignatura de Usabilidad y Accesibilidad  en el curso 2019-2020


<br>
<br>
<br>

> **A continuación se dividirán por apartados las distintas fases del estudio de accesibilidad de la web y los aspectos relativos a su auditoría.**
***

## Éxitos y errores en el cumplimiento de las WCAG 2.1

***

    Se pretende exponer de forma resumida los éxitos y errores obtenidos tras la Evaluación de WCAG 2.1 en las diferentes webs analizadas.

### Éxitos en el cumplimiento

Por lo general, en la gran mayoría de las webs que han sido analizadas a partir de la [Sede Electrónica del Gobierno de Canarias](https://sede.gobcan.es/sede/) los criterios se cumplen en un 45%-50% de los casos, teniendo en cuenta el **resultado AA real** (A+AA). Los éxitos a destacar sobre la web son relativos al manejo del foco, el tamaño de los diferentes elementos de la web e incluso el uso de los diferentes links. 


### Errores en el cumplimiento

En el caso del error de cumplimiento, es bastante menor a los éxitos. En concreto, los criterios que no se cumplen son en torno a un 12%-18%. Estos errores en su mayoría se achacan sobretodo al apartado de código. Los errores más comunes que se han dado son: 

- **Ayuda 1.4.1:** No use el color como el único método para transmitir elementos visuales. (A)
- **Ayuda 1.4.10:** La página es Responsive. (AA) 

*** 

## Cumplimiento de los criterios de conformidad en la página

***
    En este apartado se procede a la evaluación y exposición del cumplimiento  de los criterios de conformidad para las 
    páginas de la muestra escogida que representa a la sede del gobierno de canarias. En nuestro caso, comprobamos hasta
    el nivel AA, que asume los 25 criterios A junto a los 13 AA.

Bajo un vistazo general, si atendemos al sitio (que auna todas las páginas) se puede observar que menos del 50% de los criterios
en este análisis han sido cumplidos tal como muestra el gráfico para el nivel AA:

![imagen de gráfico AA](../public/media/img/estadistica-a.png)

Sin embargo la balanza se torna más positiva respecto a los criterios de conformidad de nivel A:

![imagen de gráfico A](../public/media/img/estadistica-aa.png)
Se puede denotar que se alcanza entorno al 60% de criterios cumplidos.

Si atanedemos a las páginas, en un análisis más centrado en un nivel individual se puede observar que aquellas que suponen servicios más cruciales para los usuarios y que están estrechamente vinculados a algún tipo de procedimiento suelen tener mejor puntuación de criterios como es el caso de :
- buzón de consulta.
- sistema de identificación y firmas.

O aquellas páginas que tienen un uso muy recurrido y que aportan información altamente vinuclada a otros anexos del sitio:
- Calendario Oficial.

Sin embargo, si atendemos a la evaluación conjunta de los dos niveles de criterios (que es el caso real), podremos observar como las páginas con mejor puntiación son una mezcla de los dos casos antes presentados: calendario oficial y buzón de consulta.

![estadísticas por página](../public/media/img/estadistica-porPag.png)

Haciendo un análisis en cuanto  a los resultados que nos brindan los principios por separado, el porcentaje de aplicación de los criterios de conformidad  no son inferiores al 65% entre las páginas por separado, lo cual indica que si ampliamos el punto de vista la situación no parece ser desastrosa teniendo un promedio del 75% de cumplimiento. Claramente el éxito de los criterios AA al ser más exigente es más bajo y como se anulan aquellos que no se aplican, poniendo una situación más justa donde se aplican los requisitos a los medios aplicados.

La mayoría de éxitos que se cumplen en todas las páginas son aspectos cruciales para la accesibilidad y que son menos flexibles:
- Atajos de teclado  
- orientación de la pantalla
- Contraste


## Errores encontrados por criterio de conformidad analizado
> Resumen de los errores por temas

***

## Ejemplos de impacto de los problemas encontrados en los usuarios

***

    En base a los problemas mencionados anteriormente se ejemplificará como podría 
    afectar a los usuarios de la web.

Para un usuario con una visión reducida o nula que el orden del foco no siga un orden correcto podría hacer que este se perdiera por completo y errar en su navegación. confundiría el uso de la web para este usuario, por ello se le haría tedioso y lento el acceso y uso de la plataforma.

Otro problema que reside en la accesibilidad del sitio, que podría afectar gravemente a los usuarios que accedan desde un dispositivo móvil, es  que esta no es responsive e impide el acceso a elementos desde ciertos dispositivos, perdiendo un sector de usuarios muy crucial, ya que hoy en día es impensable no acceder a una página desde un dispositivo móvil o similar.

Dado que es una página que tiene que cubrir un nicho muy amplio al estar dedicado en la ciudadanía debería renovarse en estos aspectos para cumplir el valor cívico que implica este tipo de servicios. La amplitud de medios de acceso es crucial (sobre todo en casos de urgencia) a la hora de acceder a los servicios gubernamentales.

***

## Sugerencias para la mejora de la accesibilidad

***

Como se ha visto en los puntos anteriores, y apoyándonos en AudiTool WCAG 2.1, herramienta con la que hemos realizado el estudio, se encuentra un bajo porcentaje de errores de accesibilidad. La gran mayoria de dichos errores son relativos a las dimensiones de la pantalla, no se considera una web responsiva. Para poder solucionar esto, se podría realizar varias técnicas, como puede ser **Mobile-first**. Ésta consiste en pensar y diseñar la web en primer lugar para el dispositivo más limitado y, a partir de ahí, crear los diseños para una mayor dimensión, priorizando contenidos y funcionalidades.
Como posible sugerencia, sería además, en la medidada de lo posible liberar de carga de links y elementos la página principal de la web. Sintetizar elementos e ideas podría ayudar a que el usuario no perdiera demasiado tiempo en acceder a los elementos que le interesa.
