// Referencias a los elementos
const btnSign = document.getElementById("btnSign");
const btnGoLogin = document.getElementById("sign_in");

// Función para guardar el registro
btnSign.addEventListener("click", () => {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    const confirmPass = document.getElementById("regConfirmPass").value;

    // Validación 
    if (!name || !email || !pass) {
        alert("Por favor, rellena todos los campos");
        return;
    }

    if (pass !== confirmPass) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // 2. Crear el objeto de usuario
    const newUser = {
        fullName: name,
        email: email,
        password: pass 
    };

    // guardar en LocalStorage convirtiendo a JSON

    localStorage.setItem("userData", JSON.stringify(newUser));

    alert("Cuenta creada con exito Ahora puedes iniciar sesion.");
    window.location.href = "login.html";
});

// Botón para ir al login
btnGoLogin.addEventListener("click", () => {
    window.location.href = "login.html";
});
