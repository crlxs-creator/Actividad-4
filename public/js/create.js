const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const form = document.getElementById("createForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;

    try {
        const response = await fetch("/api/albums", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({ title, artist, genre, year, price })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            window.location.href = "index.html";
        } else {
            document.getElementById("mensaje").innerText = data.mensaje || "Error al crear álbum";
        }

    } catch (error) {
        console.error(error);
    }
});

function volver() {
    window.location.href = "index.html";
}
