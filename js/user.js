// 🔐 GUARDIAN
authGuard("user");

function authGuard(rolePermitido) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (user.role !== rolePermitido) {
        alert("No tienes permiso para entrar aquí");
        window.location.href = "login.html";
    }
}




// lee las tareas de LocalStorage, si no hay nada, array vacío []
let tareas = JSON.parse(localStorage.getItem("misTareas")) || [];

// Si hay tareas, busca el ID más alto y suma 1; si no, empieza en 1 (ID único)
let idCounter = tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1;



// guarda los cambios en el navegador y actualiza lo que el usuario ve
function guardarYRenderizar() {
    localStorage.setItem("misTareas", JSON.stringify(tareas)); // Convierte array a texto JSON
    renderizar();      // pone las tareas en el HTML
    actualizarStats(); // Actualiza los contadores 
}

// Crea el objeto tarea y lo mete al array principal
function crearTarea(titulo, categoria, descripcion) {
    tareas.push({ 
        id: idCounter++, 
        titulo: titulo, 
        categoria: categoria, 
        descripcion: descripcion,
        estado: 'pendiente' 
    });
    guardarYRenderizar(); // Refresca todo
}

// Filtra el array para quitar la tarea que coincida con el ID recibido
function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarYRenderizar();
}

// Busca la tarea y cambia su estado entre 'pendiente' y 'completada' (conmutador)
function cambiarEstado(id) {
    const tarea = tareas.find(t => t.id === id);
    tarea.estado = (tarea.estado === "pendiente") ? "completada" : "pendiente";  //esta en pendiente? si si cambialo completada sino dejalo en pendiente
    guardarYRenderizar(); //crea otro array con esos cambios
}

function renderizar() {
    const container = document.getElementById("tasksContainer"); // Donde se meten las tarjetas
    container.innerHTML = ''; // Limpia el contenedor para no repetir tareas

    // Si no hay tareas muestra un mensaje 
    if (tareas.length === 0) {
        container.innerHTML = '<p>No hay tareas </p>';
    }

    // Recorre cada tarea y crea su HTML 
    tareas.forEach(t => {
        const div = document.createElement('div');
        div.className = `task-card ${t.estado}`; // Le da clase pendiente o completada
        div.innerHTML = `
            <div class="tag">${t.categoria}</div>
            <h3 ${t.estado === 'completada'}>${t.titulo}</h3>
            <p> ${t.descripcion}</p>
            <div class="acciones">
                <button onclick="cambiarEstado(${t.id})">${t.estado === 'pendiente' ? '✅' : '↩️'}</button>
                <button onclick="eliminarTarea(${t.id})" title="Delete">🗑️</button>
                <button onclick="editarTarea(${t.id})" title="Edit">✏️</button> <!-- Aquí está el botón de edición -->
                </div>

        `;
        container.appendChild(div); // Agrega la tarjeta al contenedor del dashboard
    });
}

// Actualiza los cuadros de estadísticas superiores
function actualizarStats() {
    const completas = tareas.filter(t => t.estado === "completada").length;
    
    // pone los numero en los cuadros de total y eso
    document.getElementById("total").innerHTML = `<p>Total</p>${tareas.length}`;
    document.getElementById("completas").innerHTML = `<p>Completed</p>${completas}`;
    document.getElementById("pendientes").innerHTML = `<p>Pending</p>${tareas.length - completas}`;
}

function editarTarea(id) {
    // Encuentra la tarea que se va a editar
    const tarea = tareas.find(t => t.id === id);
    
    // Rellena el formulario con los valores actuales de la tarea
    document.getElementById("taskTitle").value = tarea.titulo;
    document.getElementById("taskDescripcion").value = tarea.descripcion;

    // Guardamos el ID de la tarea que estamos editando, para luego referenciarla
    document.getElementById('taskForm').onsubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Solo actualizamos los campos que el usuario editó
        tarea.titulo = document.getElementById("taskTitle").value;
        tarea.descripcion = document.getElementById("taskDescripcion").value;

        // Guardar y renderizar
        guardarYRenderizar(); 

        // Cerrar el modal
        document.getElementById("modalTarea").style.display = 'none'; 
    };

    // Mostrar el modal para editar
    document.getElementById('modalTarea').style.display = 'flex';
}



// Captura el envío del formulario del modal
document.getElementById('taskForm').onsubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const titulo = document.getElementById("taskTitle").value;
    const cat = document.getElementById("taskCategory").value;
    const descripcion = document.getElementById("taskDescripcion").value;

    
    crearTarea(titulo, cat, descripcion); // Lógica de creación
    document.getElementById("modalTarea").style.display = 'none'; // Cierra el modal

};

// coge al modal y hasta que no le den click aparece invisible
document.querySelector(".btnNew").onclick = () => document.getElementById('modalTarea').style.display = 'flex';
document.getElementById("btnCancel").onclick = () => document.getElementById('modalTarea').style.display = 'none';


// Carga inicial al abrir el archivo
renderizar();
actualizarStats();

