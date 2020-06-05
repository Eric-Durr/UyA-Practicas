# Diseño responsive | desarrollo mobile first.

Se va a incluir, en dos pasos, el desarrollo responsive para la página de inicio. En primer lugar un análisis sobre los elementos html, bajo la filosofía mobile first acerca de qué elementos deberían incluirse en esta página. El siguiente paso sería completar este HTML con el CSS necesario para que se cumpla un diseño responsive.

Si desea visualizar esta página podrá hacerlo ejecutando, dentro del repositorio, `npm run view`, lo cual le proporcionará una instancia de parcel bundler

## Página de inicio preparada bajo mobile first.

```html

· · ·

      <div>
        <nav>
          <div>
            <div>
              <a href="index.html" aria-label="Traday">
                TRADAY
              </a>
              <a href="#" data-target="traday-nav"
                          aria-expanded="false"
                          aria-label= "accionar menú lateral  "
                          onclick="changeValues(event)"
                          onkeydown="changeValues(event)">
                <i>menu</i>          
              </a>
            
              <ul role="navigation" aria-label="Barra superior">
                <li><a href="profile.html">Perfil</a></li>
                <li><a href="#">Notificaciones</a></li>
                <li><a href= "contacts-page.html">Mis contactos</a></li>
                <li><a href="#">Tareas</a></li>
                <li><a href="#">Grupos</a></li>
                <li ><a href="waiaria.html">WAI</a></li>
            
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- Menú Lateral --> 
      <ul aria-label="Menú de navegación lateral">
          <li ><a tabindex="-1" href="profile.html" aria-label="ir al perfil">Perfil</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a notificaciones">Notificaciones</a></li>
          <li ><a tabindex="-1" href= "contacts-page.html" aria-label="ir a mis contactos"> Mis contactos</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a mis tareas">Tareas</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a mis grupos">Grupos</a></li>
          <li ><a tabindex="-1" href="waiaria.html" aria-label="ir a wai aria">WAI</a></li>
          <li ><a tabindex="-1" href="#!" aria-label="cerrar menú lateral"
                onclick="nullValues(event)" onkeydown="nullValues(event)">Cerrar</a></li>
        </ul>
    
        <!-- Botones de usuario --> 
        <div>
          <div>
            <button aria-label="registro"
                    role="button" 
                    href="#loginModal">signup
            </button>
          </div>
          <div>
            <button aria-label="inicio de sesión"
                    role="button" 
                    href="#signInModal">signin
            </button>
          </div>
          <div>
            <button aria-label="cierre de sesión"  
                    role="button" 
                    id="logout">salir
            </button>
          </div>
        </div>

        <!-- Tablas de secciones informativas --> 
        <div>
          <div href="#one!">
            <h2>¿Qué es Traday?</h2>
            <p>This is your first panel</p>
          </div>
          <div href="#two!">
            <h2>Valoraciones</h2>
            <p>This is your second panel</p>
          </div>
          <div href="#three!">
            <h2>Nuestro equipo</h2>
            <p>This is your third panel</p>
          </div>
        </div>


        <div class="slider">
            <ul class="slides">
              <li>
                <img src="https://i.picsum.photos/id/2/600/300.jpg?blur=5">
                <div class="caption ">
                  
                  <h3>Nuestro equipo de desarrollo</h3>
                </div>
              </li>
              <li>
                <img src="media/img/equipo1.jfif" >
                <div class="caption ">
                </div>
              </li>
              <li>
                <img class="" src="media/img/equipo3.jpeg">
                <div class="caption ">
                
                </div>
              </li>
              <li>

                <img src="media/img/equipo2.png">
                <div class="caption ">
                </div>
              </li>
            </ul>
          </div>

· · ·


```
Para el diseño de los contenidos, de cara a hacerlo lo más adecuado posible para todos los dispositivos, se ha empleado la metodología ***mobile first***. Con esto pretendemos que el sitio que diseñamos sea lo más usable posible por el dispositivo más limitado.

De cara a reducir los contenidos se ha planteado esta página de inicio como una ***landing page*** las cuales pretenden ser claras y concisas en cuanto a información con la finalidad de captar usuarios y proporcionar una visión global del sitio empleando pocos recursos. 

Tal como se puede ver en el código plasmado arriba la página se divide en tres secciones principales: cabecera de navegación y registro, contenidos informativos y footer.

Para la navegación hemos empleado una alternativa que incluirá una barra de navegación clásica optando a un menú lateral desplegable para pantallas más reducidas como la de los móviles. Es por esto que a parte de la lista de secciones de navegación se incluye otra similar bajo la que envuelve la etiqueta nav.

En cuanto a los contenidos de información se ha optado por ponerlo de la manera más condensada posible, por ello un ***carrousel*** será la herramienta que emplearemos para presentarlo paulatinamente en el mismo sitio. De esta manera no forzamos al usuario a tener que estar desplazando mucho contenido en vertical por si los elementos se tuvieran que adaptar a un dispositivo móvil. Ya que en estos penaliza que el usuario tenga que desplazarse de manera vertical, que el contenido esté accesible horizontalmente y de manera escueta es más positivo para la mayoría de las pantallas.

También se ha añadido un slider con las imágenes de los miembros a fin de mostrarlo de forma pasiva en un formato horizontal. De esta manera concentramos la información bajo un elemento que da más visibilidad a la web.

El fóoter será presentado con todos los enlaces a redes sociales y páginas secundarias además de informaciones relativas al copyright y políticas del sitio, ya que por costumbre el usuario suele ubicar estos contenidos en esa zona. Posicionarlo al final de la página, paradógicamente, lo hace más usable y de acceso más rápido.

## Página de inicio ya estilizada de forma responsive.


```html


    <div class="navbar-fixed hoverable ">
      <nav>
        <div class="nav-wrapper teal lighten-1">
          <div class="container">
            <a href="index.html" class="brand-logo" aria-label="Traday">
              TRADAY
            </a>
            <a href="#" data-target="traday-nav"
                        class="sidenav-trigger"
                        aria-expanded="false"
                        aria-label= "accionar menú lateral  ">
              <i class="material-icons">menu</i>          
            </a>
          
            <ul class="right hide-on-med-and-down"
                role="navigation" aria-label="Barra superior">
              <li><a href="profile.html">Perfil</a></li>
              <li><a href="#">Notificaciones</a></li>
              <li><a href= "contacts-page.html">Mis contactos</a></li>
              <li><a href="#">Tareas</a></li>
              <li><a href="#">Grupos</a></li>
              <li ><a href="waiaria.html">WAI</a></li>
          
            </ul>
          </div>
        </div>
      </nav>
    </div>

      <!-- Menú Lateral --> 
      <ul 
          class="sidenav" id="traday-nav"
          aria-label="Menú de navegación lateral">
          <li ><a tabindex="-1" href="profile.html" aria-label="ir al perfil">Perfil</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a notificaciones">Notificaciones</a></li>
          <li ><a tabindex="-1" href= "contacts-page.html" aria-label="ir a mis contactos"> Mis contactos</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a mis tareas">Tareas</a></li>
          <li ><a tabindex="-1" href="#" aria-label="ir a mis grupos">Grupos</a></li>
          <li ><a tabindex="-1" href="waiaria.html" aria-label="ir a wai aria">WAI</a></li>
          <li ><a tabindex="-1" href="#!" class="sidenav-close btn" aria-label="cerrar menú lateral"
               >Cerrar</a></li>
        </ul>
    
      <br>
        <!-- Botones de usuario --> 
        

        <!-- Tablas de secciones informativas --> 
        <div class="container">

          <div class="row valign-wrapper">
            <div class="col s4 m2 l1  offset-m6 offset-l9 center-align" >
              <button aria-label="registro"
                      role="button"
                      class="waves-effect blue-grey lighten-1 btn modal-trigger" 
                      href="#loginModal">signup
              </button>
            </div>
            <div class="col s4 m2 l1  center-align">
              <button aria-label="inicio de sesión"
                      role="button"
                      class="waves-effect waves-light green accent-2 btn modal-trigger" 
                      href="#signInModal">signin
              </button>
            </div>
            <div class="col s4 m2 l1  center-align">
              <button aria-label="cierre de sesión"  
                      role="button"
                      class="waves-effect waves-light red accent-2 btn modal-trigger" 
                      id="logout">salir
              </button>
            </div>
          </div>

          <div class="carousel carousel-slider center ">
            <div class="carousel-item teal lighten-1 white-text" href="#one!">
              <h2>¿Qué es Traday?</h2>

              <div class="row valign-wrapper">
                <div class="col s6 m3">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sapiente tenetur nesciunt alias officia numquam voluptates saepe porro, minus obcaecati voluptate asperiores facere libero consectetur rem quasi enim, quis quos!</p>
                </div>

                <div class="col s6 ">
                  <i class="medium material-icons ">hourglass_empty</i>
                </div>
              </div>
            </div>
            
            <div class="carousel-item teal lighten-1 white-text " href="#two!">
              <h2>Cómo empezar:</h2>
              <div class="row ">
                <div class="col s4 ">
                  <i class="medium material-icons">looks_one</i>
                </div>
                <div class="col s4 ">
                  <i class="medium material-icons">looks_two</i>
                </div>
                <div class="col s4 ">
                  <i class="medium material-icons">looks_3</i>
                </div>

                <div class="col s4 ">
                  <p>Crea un grupo con el que organizar tu tiempo</p>
                </div>
                <div class="col s4 ">
                  <p>regístrate en unos cuantos pasos</p>
                </div>
                <div class="col s4 ">
                  <p>Mantén la comunicación y mide el tiempo que puedes compartir</p>
                </div>
              </div>
            </div>
            
            <div class="carousel-item teal lighten-1 white-text center" href="#three!">
              <h2>Contacto</h2>
              <p class="white-text ">Podrá encontrarnos en:</p>
              <p class="white-text ">Camino San Francisco de Paula, s/n, 38271 San Cristóbal de La Laguna, Santa Cruz de Tenerife</p>
              <p class="white-text ">Llame al: </p>
              <p class="white-text ">+34 623 455 212</p>
              <p class="white-text ">O dejenos un mensaje en el siguiente formulario:</p>
              <br>
              <button aria-label="inicio de sesión"
                    role="button"
                    class="waves-effect waves-light green accent-2 btn modal-trigger" 
                    href="#signInModal">Dejar mensaje
              </button>
            </div>
          </div>

      <br>
      <br>
        <div class="slider">
            <ul class="slides">
              <li>
                <img class="blur" src="https://i.picsum.photos/id/2/600/300.jpg?blur=5">
                <div class="caption center-align">
                  <br>
                  <br>
                  <br>
                  
                  <h3>Nuestro equipo de desarrollo</h3>
                </div>
              </li>
              <li>
                <img class="blur" src="media/img/equipo1.jfif" >
                <div class="caption center-align">
                  <h4>Eric Dürr Sierra</h4>
                  <br>
                  <br>
                  <br>
                  <br>
                  <h5 class="light grey-text text-lighten-3">Nuestro product manager y apasionado por la UX</h5>
                </div>
              </li>
              <li>
                <img class="blur" src="media/img/equipo3.jpeg">
                <div class="caption center-align">
                  <h4>Alejandro Martín de León</h4>
                  <br>
                  <br>
                  <br>
                  <br>
                  <h5 class="light grey-text text-lighten-3">Backend Developer, encargado de las interacciones con las bases de datos.</h5>

                </div>
              </li>
              <li>

                <img class="blur" src="media/img/equipo2.png">
                <div class="caption center-align">
                  <h4>Oscar Cigala Álvarez</h4>
                  <br>
                  <br>
                  <br>
                  <br>
                  <h5 class="light grey-text text-lighten-3">Frontend Developer, encargado de programar el del diseño y estilo visual del navegador de la web</h5>
                </div>
              </li>
            </ul>
          </div>

        </div>


```
En esta sección se pretende analizar la página de inicio de nuestra web con diseño responsive ya implementado mediante los estilos CSS proporcionados por Materialize, haciendo especial incapié en adaptar la vista de la página a todas las pantallas

### Sección del navbar

Esta es una de las partes más críticas a la hora de hacer una página responsive, ya que si no se hace de forma correcta, cuando se cambie del formato de escritorio al móvil o al de tablet podrían dejar de ser usables  los enlaces de la cabecera de la página. Para arreglar esto se aplican dos alternativas:

- Una barra de navegación superior que muestra los enlaces disponibles en el caso de los formatos de pantalla que sean más anchos
- Un menú lateral desplegable (menú hambuerguesa) que permanece oculto hasta que se accede a un formato de pantalla más delgado (como el de los móviles)


De esta forma, cuando una pantalla sea mayor de unos píxeles determinados cambiará la morfología de navegación para adaptarse lo mejor posible a la resolución de pantalla del dispositivo.



### Sección del carrusel

Esta sección de nuestra página también es importante aplicar un diseño responsive de forma correcta, ya que este tipo de formato para enseñar la información, es bastante delicado a cambios de pantalla. Al pasar de una pantalla a otra podrían no presentarse todos los elementos que el usuario pudiera necesitar. Para ello se aplican las mismas divisiones de columnas y filas del grid de materialize en todos los dispositivos para que se adapte a la pantalla de forma similar. Especialmente cuando se incluyen dos elementos. Para mayor limpieza y mejora del acceso a los recursos en dispositivos más limitados (pensando en el mobile first) se ha optado por suprimir imágenes dentro del carrusel y emplear iconos. 

Las columnas, en cuanto a disponer la información, nos permiten adaptar la posición de los elementos según el dispositivo y controlar que no se pierda nada de información.

El carrusel permite, al deslizar fácilmente hacia los laterales la información, una usabilidad muy amplia de la información

### Sección del slider

Para completar un poco la página de inicio y presentar más contexto sobre la aplicación se disponen también los miembros del equipo de desarrollo. Este componente permite escalar imágenes y contenido por igual, condensando la información y adaptándola a la pantalla a la que se dirige. Este, al no tener información crucial para el uso de la página, se presenta de forma automática, forzando al usuario a visualizarlo de manera pasiva. Esto es positivo de cara a proporcionar información que el usuario no desea pero que si puede ser interesante. Igualmente se puede seleccionar la diapositiva del slider usando un selector inferior.

Para distinguir entre las imágenes y el texto se ha aplicado un filtro de CSS que desenfoca las imágenes que incluyan la clase "blur", de modo que se pueda disponer texto sobre ellas sin perjudicar su lectura.

Como último añadido, los elementos centrales que disponen la información han sido envueltos en un contenedor para evitar que estén en contacto con los bordes de la caja en la que están. De esta manera podemos prevenir que en algún dispositivo no se pueda acceder a lementos de manejo o visualizar información. También potencia la usabilidad distinguiendo fácilmente entre el contenido, la cabecera y el pié de la página web.

