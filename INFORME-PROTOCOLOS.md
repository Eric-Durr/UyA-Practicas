# INFORME PRÁCTICA 1 : INTRODUCCIÓN AL PROTOCOLO HTTP
> (introducción breve)

## DESARROLLO DE LAS CUESTIONES A INSPECCIONAR  
> Se expondrá simultaneamente para las dos páginas solicitadas: 
   - http://www.gobiernodecanarias.org/istac/api/
   - http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html

> Se ha de tener en cuenta que se ha empleado el navegador Firefox aunque también se ha probado Chrome. Aún así la única diferencia entre ambos es el user agent

- ¿Qué peticiones desencadena la consulta?

    La consulta que se investiga es una solicitud a la página. De este modo se emplea una serie de peticiones HTTP. Concretamente se emplea HTTP versión 1.1
    Es así para ambas páginas.

- * ¿Qué tipo de petición se realiza? *

    La única petición que se detecta es la de tipo GET, dado que se solicita al servidor un acceso a la página web que se quiere localizar. Sucede de igual maner apara ambas web.

- * ¿Qué código de estatus devuelve? *

    En la primera web  (http://www.gobiernodecanarias.org/istac/api/) devuelve el tipo de estatus 2xx lo cual implica que las consultas han concluido de manera correcta. Por otro lado se localizan también los estatus 302 (encontrado) y 304 (no modificado).

    En la segunda página (http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html) únicamente aparecen los estatus 304 (No modificado) y 404 (no encontrado), sucede de esta manera debido a un cambio en la dirección del servicio.

- ¿Qué DNS tiene el servidor?

    Ambas webs presentan DNS similares, donde su localización es el "gobiernodecanaria.org", sin embargo algunas discrepancias separan sus ámbitos. Tales discrepancias son notables en la ruta final del directiorio donde se localizan  ("/isatc/api" y "/sanidad/scs/gc/18/Cita_Previa/index.html") y en el host 
    o subdominio ("wwww" y "www3").

- ¿Qué IP tiene el servidor?

    IP web 1 -> 93.188.136.129 : 80
    IP web 2 -> 93.188.137.126 : 80

    Como se puede apreciar ambas IP están haciendo escucha en el puerto 80 del servidor en el que se ubica la web. Probablemente la similitud entre ambas
    se deba a que estas dos páginas pertenecen a la misma organización.

- ¿La página tiene alguna cookie? ¿Cuáles?

    Si ambas webs, tienen cookies y presentan la misma
>   cookie: -ga: GA 1.2.1600357602.1570390872

- ¿Qué idioma acepta?

    Ambas páginas aceptan tanto español como inglés estadounidense (es y en-us)

- ¿Alguna línea de código JavaScript?

    En la primera web no se localiza ninguna línea en JS. Por otro lado en la segunda si, todas relativas al código de Bootstrap.

    ``` 
    var Modal = function (element, options) 
    {
        this.options = options
        this.$element = $(element)
          .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
        this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
    }
    ```
- ¿Alguna línea de código CSS que se aplique?

    Para ambas web existen estructuras HTML que requieren de CSS:

    web 1:
    ```
    ```

    web 2:
    ```
    ```