function VolverAlHome() {
    window.location.href = 'index.html';
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe

    let nombre = document.getElementById('nombre').value;
    let reviewTexto = document.getElementById('reviewTexto').value;
    let rating = document.getElementById('rating').value;

    // Crear un nuevo elemento para la reseña
    let reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review');

    let nombreElement = document.createElement('p');
    nombreElement.classList.add('nombre');
    nombreElement.textContent = `Nombre: ${nombre}`;

    let reviewElement = document.createElement('p');
    reviewElement.textContent = `Reseña: ${reviewTexto}`;

    let ratingElement = document.createElement('p');
    ratingElement.classList.add('rating');
    ratingElement.textContent = `Calificación: ${'★'.repeat(rating)}`;

    reviewContainer.appendChild(nombreElement);
    reviewContainer.appendChild(reviewElement);
    reviewContainer.appendChild(ratingElement);

    // Añadir la reseña al contenedor de reseñas
    document.getElementById('reviewsContainer').appendChild(reviewContainer);

    // Limpiar el formulario
    document.getElementById('reviewForm').reset();
});
