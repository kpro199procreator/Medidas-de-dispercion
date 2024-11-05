// Configuración de MathJax
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\', '\'], ['\\{', '\\}']], // Delimitadores para inline
        displayMath: [['$$', '$$'], ['\', '\'], ['\\{', '\\}']] // Delimitadores para display
    },
    svg: {
        fontCache: 'global'
    }
};

// Cargar MathJax después de la configuración
window.onload = function () {
    MathJax.typeset();
};