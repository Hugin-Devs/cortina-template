// ==========================================================
// CORTINA DE BIENVENIDA — script.js
// ==========================================================
// Oculta la pantalla de carga al terminar de cargar la página,
// y expone la función para abrir las cortinas.
// ==========================================================

window.addEventListener('load', function () {
    const loadOverlay = document.getElementById('load-overlay');
    if (loadOverlay) {
        loadOverlay.classList.add('hide');
    }
});

function openStartOverlay() {
    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.classList.add('open');
    }
}
