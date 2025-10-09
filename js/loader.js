
// Ocultar loader cuando la página cargue
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 3s ease';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 3000);
    }
});