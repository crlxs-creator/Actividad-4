// Proteger página
if (!localStorage.getItem("token")) {
    window.location.href = "login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
});

// Mostrar albums
async function cargarAlbums() {
    try {
        const response = await fetch("/api/albums");
        const data = await response.json();

        const container = document.getElementById("albums");
        container.innerHTML = "";

        data.albums.forEach(album => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h3>${album.tittle}</h3>
                <p>Artista: ${album.artist}</p>
                <p>Genero: ${album.genre}</p>
                <p>Año: ${album.year}</p>
                <p>Precio: $${album.price}</p>
                <hr>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error cargando albums:", error);
    }
}

// Ejecutar al cargar página
cargarAlbums();
