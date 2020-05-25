# Diseño responsive | desarrollo mobile first.

Se va a incluir, en dos pasos, el desarrollo responsive para la página de inicio. En primer lugar un análisis sobre los elementos html, bajo la filosofía mobile first acerca de qué elementos deberían incluirse en esta página. El siguiente paso sería completar este HTML con el CSS necesario para que se cumpla un diseño responsive.

## Página de inicio preparada bajo mobile first.

```html


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>traday - home</title>
</head>
<body class="">
     
  <!-- inicio de sesión + registro  -->    
  
    <!-- Navegación en la web -->    

      <!-- --- -->    

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


    <!-- footer --> 
    <footer class="">
    </footer>
  
</body>
</html>

```

Explicación

## Página de inicio ya estilizada de forma responsive.


```html
```