// 🔐 GUARDIAN
authGuard("admin");

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
