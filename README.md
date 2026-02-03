Crudzaso 

Bienvenido a Crudzaso Una plataforma diseñada para el seguimiento  académico. Este proyecto permite a los estudiantes gestionar sus tareas , con persistencia de datos.

Características :

Autenticación: Tiene un login que dependiendo si eres usuario o admin te lleva a distintas partes y tiene donde hacer un registro de usuario

Gestión de Tareas (CRUD): Creación, visualización, cambio de estado y eliminación de tareas.

Persistencia de Datos: Uso de Web Storage API (LocalStorage) para mantener la información tras recargar la página.

Dashboard: Visualización de estadísticas en tiempo real (Total, Completadas, Pendientes).

Diseño Responsive: Adaptable a dispositivos móviles y escritorio.



 Funcionamiento:

1. Autenticación con JSON
El sistema captura los datos que contiene el archivo json y dependiendo de ellos te lleva a los diferentes apartados


2. Gestión de Tareas
Las tareas se manejan mediante un array de objetos.

.find(): Para localizar una tarea específica y alternar su estado entre Pendiente y Completada.
.filter(): Para eliminar tareas del sistema o filtrar la vista actual.
.map(): Para gestionar los ids únicos de forma dinámica.

4. Estadísticas
5. 
El Dashboard calcula automáticamente el progreso académico filtrando el array de tareas global y actualizando el DOM en tiempo real.

 Autor
Juan Jose Peña Muñoz - Desarrollador de software 
