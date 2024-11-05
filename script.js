// Configuración de MathJax
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\', '\']],
        displayMath: [['$$', '$$'], ['\', '\']]
    },
    svg: {
        fontCache: 'global'
    }
};

// Cargar MathJax después de la configuración
window.onload = function () {
    MathJax.typeset();
};