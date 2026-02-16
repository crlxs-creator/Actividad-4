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
    if (!confirm("¿Seguro que quieres eliminar este album?")) return;

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
            div.className = "album-card";

            div.innerHTML = `
                <h3>${album.title}</h3>
                <p><strong>Artista:</strong> ${album.artist}</p>
                <p><strong>Género:</strong> ${album.genre}</p>
                <p><strong>Año:</strong> ${album.year}</p>
                <p class="price">$${album.price}</p>
                <div class="actions">
                    <button onclick="editarAlbum('${album._id}')">Editar</button>
                    <button onclick="eliminarAlbum('${album._id}')" class="btn-danger">Eliminar</button>
                </div>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error cargando albums:", error);
    }
}

cargarAlbums();
