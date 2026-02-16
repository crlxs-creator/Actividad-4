const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("mensaje").innerText = "Usuario creado correctamente";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);

        } else {
            document.getElementById("mensaje").innerText = data.mensaje;
        }

    } catch (error) {
        document.getElementById("mensaje").innerText = "Error al conectar con el servidor";
    }
});
