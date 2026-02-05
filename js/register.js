document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los botones y elementos del formulario
    const btnSign = document.getElementById("btnSign");
    const btnGoLogin = document.getElementById("sign_in");

    // Función para guardar el registro
    btnSign.addEventListener("click", () => {
        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const pass = document.getElementById("regPass").value;
        const confirmPass = document.getElementById("regConfirmPass").value;

        // Validación
        if (!name || !email || !pass || !confirmPass) {
            alert("Please fill in all fields.");
            return;
        }

        if (pass !== confirmPass) {
            alert("Passwords do not match.");
            return;
        }

        // Crear el objeto de usuario
        const newUser = {
            fullName: name,
            email: email,
            password: pass
        };

        // Obtener usuarios existentes (si hay)
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Agregar el nuevo usuario al array
        existingUsers.push(newUser);

        // Guardar el array de usuarios en localStorage
        localStorage.setItem("users", JSON.stringify(existingUsers));

        alert("Account created successfully. You can now log in.");

        // Redirigir al login
        window.location.href = "login.html";
    });

    // Botón para ir al login
    btnGoLogin.addEventListener("click", () => {
        window.location.href = "login.html";
    });
});
