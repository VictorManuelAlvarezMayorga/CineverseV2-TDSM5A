// Crear elementos del DOM
const body = document.body;

// Crear el header
const header = document.createElement("header");
const img = document.createElement("img");
img.src = "abismo-secreto.jpg";
img.alt = "El Abismo Secreto";
header.appendChild(img);

// Crear la sección de información
const infoSection = document.createElement("section");
infoSection.classList.add("info");

const title = document.createElement("h1");
title.textContent = "El abismo secreto";

const releaseDate = document.createElement("p");
releaseDate.innerHTML = "<strong>Fecha de estreno:</strong> 14 de febrero de 2025";

const description = document.createElement("p");
description.textContent = "Mandan a dos operativos de élite (Anya Taylor-Joy y Miles Teller) a vigilar lados opuestos de un misterioso abismo y allí intiman desde la distancia, pero deberán aunar fuerzas para sobrevivir al mal que esconde el abismo.";

infoSection.appendChild(title);
infoSection.appendChild(releaseDate);
infoSection.appendChild(description);

// Crear la sección de acciones (botones)
const actionsSection = document.createElement("section");
actionsSection.classList.add("acciones");

const trailerButton = document.createElement("button");
trailerButton.textContent = "Ver Tráiler";
trailerButton.addEventListener("click", verTrailer);

const reviewButton = document.createElement("button");
reviewButton.textContent = "Agregar Reseña";
reviewButton.addEventListener("click", mostrarFormulario);

actionsSection.appendChild(trailerButton);
actionsSection.appendChild(reviewButton);

// Crear el modal de reseña
const modal = document.createElement("div");
modal.id = "formularioResena";
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-contenido");

const closeButton = document.createElement("span");
closeButton.classList.add("cerrar");
closeButton.innerHTML = "&times;";
closeButton.addEventListener("click", cerrarFormulario);

const modalTitle = document.createElement("h3");
modalTitle.textContent = "Escribe tu reseña";

const textarea = document.createElement("textarea");
textarea.id = "resenaTexto";
textarea.placeholder = "Escribe aquí tu reseña...";

const saveButton = document.createElement("button");
saveButton.textContent = "Guardar";
saveButton.addEventListener("click", guardarResena);

modalContent.appendChild(closeButton);
modalContent.appendChild(modalTitle);
modalContent.appendChild(textarea);
modalContent.appendChild(saveButton);
modal.appendChild(modalContent);

// Agregar todo al body
body.appendChild(header);
body.appendChild(infoSection);
body.appendChild(actionsSection);
body.appendChild(modal);

// Funciones de los botones
function verTrailer() {
    window.open("https://youtu.be/3QbfHIKyd4I?si=wojcTiOiziNSsiq3", "_blank");
}

function mostrarFormulario() {
    document.getElementById("formularioResena").style.display = "block";
}

function cerrarFormulario() {
    document.getElementById("formularioResena").style.display = "none";
}

function guardarResena() {
    let resena = document.getElementById("resenaTexto").value;

    if (resena.trim() !== "") {
        alert("Reseña guardada: " + resena);
        document.getElementById("resenaTexto").value = ""; // Limpiar el campo de texto
        cerrarFormulario(); // Cerrar el formulario después de guardar
    } else {
        alert("Escribe una reseña antes de guardar.");
    }
}