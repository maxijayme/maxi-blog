# maxi-blog
## Prueba técnica Ensenada

### Desarrollé una SPA que consiste en un blog con un sistema CRUD.

- Configuré un entorno de desarrollo basado en Node.js y utilicé npm como gestor de paquetes.
- Cree el proyecto de React con la herramienta de compilación Vite.
- El framework que utilicé para el estilado es Tailwind, por lo que la app es full responsive. 
- Las interfaz la dividé en componentes reutilizables JSX, agrupados en carpetas principales (components y containers) y separé la lógica (componentes contenedores) de lo visual (componentes presentacionales).
- Para el enrutamiento de la aplicación utilicé react-router-dom.
- Implementé un contexto global con createcontext y el hook useContext para almacenar la ubicación anterior a la actual.
- La mayoría de los componentes tienen estados locales. Algunos utilizados para pasar datos a otros componentes, y otros utilizados como flags para renderizados condicionales.
- Hice uso del localStorage para almacenar los datos del post actual para poder reutilizar el componente de creación de un post para la edición de un post existente, y que al recargar la página se mantuvieran los datos como el id y el resto de propiedades.

- EL formulario de creación de posteos tiene validaciones en todos sus campos. Los mismos son todos obligatorios.
- Las imagenes se cargan desde el disco local del usuario y luego son guardadas en el servidor.

### Las vistas principales son:
- [x] feed, donde se ven todos los posts creados y el botón para crear un nuevo posteo.
- [x] post, donde se ve el posteo completo
- [x] newPost, es el formulario para creación y edición de los posts.
- [x] error, se renderiza cuando la url no coincide con ninguna de las anteriores.

### Implementé una API Restfull para realizar operaciones CRUD.
- Para esta utilicé Express con MySQL 2.
- La base de datos sólo contiene una tabla con 5 columnas (id, title, image, entrye_content y date).
- Para poder almacenar y borrar las imagenes en el servidor utilicé la librería Multer.
### Las rutas de la API son 4:
- [x] getPost para obtener los datos de los post
- [x] editPost para actualizar los datos de algún post en particular
- [x] deletePost para eliminar los datos de la base de datos y el borrado de la imagen
- [x] newPost para agregar un post a la base de datos




