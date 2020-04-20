# Informe sobre la práctica primera de Firebase 
    Se pretende explicar el proceso realizado para implementar los servicios de 
    bases de datos de Firebase en el proyecto

## Instalación y configuración de Firebase en el proyecto
    Se explicarán los pasos seguidos y los requisitos implicados en el proceso
    de inicializar Firebase en el repositorio.

### Antes de comenzar
- Tenemos que instalar nuestro editor o IDE preferido (Visual Studio Code, Atom...).
- Abrimos nuestro proyecto de JavaScript (web o Node.js).
- Accedemos a [Firebase](https://console.firebase.google.com/u/0/?hl=es-419) con nuestra cuenta.

### Paso 1: Crea un proyecto de Firebase.

Antes de que podamos agregar Firebase a nuestra app de JavaScript, debemos crear un proyecto de Firebase y conectarlo a la app.

### Paso 2: Registra tu app.

Cuando tengamos un proyecto de Firebase, podremos agregarle nuestra aplicación web.

1. En la página de descripción general del proyecto en Firebase console, hacemos clic en el ícono de **Web (<>)** para iniciar el flujo de trabajo de configuración.

2. Ingresamos el nombre de nuestra app.

3. Configuramos Firebase Hosting para nuestra aplicación web.

    - Seleccionamos un sitio de la lista desplegable para vincularlo a nuestra aplicación web de Firebase. Esta lista muestra el sitio de Hosting predeterminado de nuestro proyecto y cualquier otro sitio que hayamos configurado en él.

### Paso 3: Agrega los SDK de Firebase y, luego, inicializa Firebase

Podemos agregar cualquiera de los [productos que tiene Firebase](https://firebase.google.com/docs/libraries?hl=es) en nuestra app.

Como usamos Firebase Hosting, podemos configurar nuestra app para cargar las bibliotecas del SDK de Firebase JavaScript de manera dinámica desde las URL reservadas. Esta opción de configuración también funciona para probar nuestra aplicación web localmente.

### Paso 4: Instalamos CLI e implementamos el Hosting.

1. Para implementar Firebase, debemos usar [Firebase CLI](https://firebase.google.com/docs/cli?hl=es-419). Esto es una herramienta de línea de comandos. Deberemos ejecutar el siguiente comando npm en la terminal.

        npm install -g firebase-tools

2. Conectamos nuestra máquina local a Firebase y le otorgamos acceso a nuestros proyectos de Firebase:

        firebase login

3. Inicializamos el proyecto de firebase. Consulta más información en este [enlace](https://firebase.google.com/docs/hosting/quickstart?hl=es-419#initialize).

        firebase init

4. Implementamos la configuración de hosting y el contenido en Firebase Hosting.

    - Realizamos la implementación con el comando:

            firebase deploy




## Registro de usuarios para añadir entradas a la base de datos
    Se explicará los cambios en la web y las configuraciones realizadas para
    implementar esta parte de la base de datos. (Login y sign up)

## Registro de entradas en la base de datos del servidor Firebase
    Se procede a indicar los pasos seguidos en la implementación de la base de datos
    así como el registro de entradas desde la aplicación web.