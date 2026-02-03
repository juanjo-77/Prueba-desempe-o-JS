fetch('users.json')
    .then(res => res.json())
    .then(users => {
        document.getElementById("btnSign").onclick = (e) => {
            e.preventDefault();
            
            const email = document.getElementById("email").value.trim();
            const pass = document.getElementById("password").value.trim();

            const user = users.find(u => u.email === email && u.password === pass);

            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = user.role + ".html"; // Redirige a admin.html o user.html
            } else {
                alert("Datos incorrectos");
            }
        };
    });
