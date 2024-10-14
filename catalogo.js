function VolverAlHome() {
    window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById('productos-mas-comprados-titulo');
    
    // Obtener el contenido de texto del título
    const texto = titulo.textContent;

    // Limpiar el contenido y envolver cada letra en un <span>
    titulo.innerHTML = texto.split('').map((letra) => {
        return `<span>${letra}</span>`;
    }).join('');
});
