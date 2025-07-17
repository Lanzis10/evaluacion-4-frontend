# Aplicación de Tareas Diarias con Frases Motivacionales

## Descripción de la Problemática

En la rutina diaria, la **gestión de tareas pendientes** y la **mantención de la motivación personal** son desafíos comunes. Muchas veces, las tareas se olvidan y la falta de estímulos puede llevar a la desmotivación. Surge la necesidad de una herramienta simple que no solo organice el trabajo diario, sino que también ofrezca un impulso positivo constante.

## Solución Propuesta

Esta aplicación web es una **Single Page Application (SPA)** desarrollada con un **framework moderno (ej. Vue o React)**. Su objetivo es simplificar la organización de tareas y fomentar la motivación a través de las siguientes funcionalidades:

* **Gestión de Tareas (CRUD):** Permite **crear, leer, actualizar (marcar como completada) y eliminar** tareas de forma intuitiva.
* **Persistencia de Datos:** Todas las tareas se guardan automáticamente utilizando **`localStorage`**, asegurando que la información no se pierda al recargar la página o cerrar el navegador.
* **Frases Motivacionales:** Al recargar la aplicación, se carga una **nueva frase motivacional** obtenida de una **API pública**. Estas frases se muestran en una sección dedicada para inspirar al usuario.
* **Componentes Reutilizables:** La interfaz está construida usando **componentes personalizados** que estructuran la aplicación de manera eficiente (ej. un componente para la lista de tareas, otro para la entrada de texto y el botón, y otro para la visualización de la frase).

La interfaz es clara: un título, un campo para ingresar texto y un botón "Agregar". Las tareas se listan abajo, cada una con un botón "Eliminar". Al final de la pantalla, un cuadro muestra la frase motivacional.

## Instrucciones de Uso

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

### Requisitos Previos

* Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

### Instalación

1.  **Clona este repositorio:**
    ```bash
    git clone [https://github.com/Lanzis10/evaluacion-4-frontend.git](https://github.com/Lanzis10/evaluacion-4-frontend.git)
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd evaluacion-4-frontend
    ```
3.  **Instala las dependencias necesarias:**
    ```bash
    npm install
    # Si usas Yarn en lugar de npm, usa: yarn install
    ```

### Ejecución

1.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm run dev
    # Si usas Yarn, usa: yarn dev
    # (El comando exacto puede variar, verifica el archivo package.json si 'npm run dev' no funciona).
    ```
2.  La aplicación se abrirá en tu navegador web. Si no lo hace automáticamente, accede manualmente a la dirección que aparecerá en tu terminal (generalmente `http://localhost:5173` o `http://localhost:3000`).

### Funcionalidades

* **Agregar una Tarea:** Ingresa el texto de tu tarea en el campo de entrada y haz clic en el botón "Agregar".
* **Marcar/Desmarcar Tarea:** (Si aplica, puedes indicar aquí si las tareas se pueden marcar como completadas haciendo clic en ellas, por ejemplo).
* **Eliminar Tarea:** Haz clic en el botón "Eliminar" junto a la tarea que deseas remover de la lista.
* **Frase Motivacional:** Cada vez que recargues la página, la frase motivacional en la parte inferior cambiará, ofreciéndote una nueva inspiración.
