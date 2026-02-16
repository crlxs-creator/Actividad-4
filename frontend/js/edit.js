const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function cargarAlbum() {
    const response = await fetch(`/api/albums/${id}`, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const album = await response.json();

    document.getElementById("title").value = album.title;
    document.getElementById("artist").value = album.artist;
    document.getElementById("genre").value = album.genre;
    document.getElementById("year").value = album.year;
    document.getElementById("price").value = album.price;
}

document.getElementById("editForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;

    await fetch(`/api/albums/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ title, artist, genre, year, price })
    });

    window.location.href = "index.html";
});

function volver() {
    window.location.href = "index.html";
}

cargarAlbum();
