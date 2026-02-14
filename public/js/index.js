const token = localStorage.getItem("token");

// Proteger página
if (!token) {
    window.location.href = "login.html";
}

// Logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
});

// Ir a crear
function irACrear() {
    window.location.href = "create.html";
}

// Ir a editar
function editarAlbum(id) {
    window.location.href = `edit.html?id=${id}`;
}

// Eliminar
async function eliminarAlbum(id) {
    if (!confirm("¿Seguro que quieres eliminar este álbum?")) return;

    try {
        const response = await fetch(`/api/albums/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (response.ok) {
            cargarAlbums();
        } else {
            alert("Error al eliminar");
        }

    } catch (error) {
        console.error(error);
    }
}

// Mostrar albums
async function cargarAlbums() {
    try {
        const response = await fetch("/api/albums", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const data = await response.json();

        const container = document.getElementById("albums");
        container.innerHTML = "";

        data.albums.forEach(album => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h3>${album.title}</h3>
                <p>Artista: ${album.artist}</p>
                <p>Genero: ${album.genre}</p>
                <p>Año: ${album.year}</p>
                <p>Precio: $${album.price}</p>

                <button onclick="editarAlbum('${album._id}')">Editar</button>
                <button onclick="eliminarAlbum('${album._id}')">Eliminar</button>

                <hr>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error cargando albums:", error);
    }
}

cargarAlbums();
