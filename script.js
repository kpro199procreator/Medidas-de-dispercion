// Configuración de MathJax
MathJax = {
    loader: {
        load: ['[tex]/amsmath', '[tex]/amsfonts', '[tex]/color'], // Carga de paquetes adicionales
    },
    tex: {
        inlineMath: [['$', '$'], ['\', '\'], ['\\{', '\\}']], // Delimitadores para matemáticas en línea
        displayMath: [['$$', '$$'], ['\', '\'], ['\\{', '\\}']], // Delimitadores para matemáticas de bloque
        packages: {'[+]': ['amsmath', 'amsfonts', 'color']}, // Incluir paquetes de matemáticas
    },
    svg: {
        fontCache: 'global', // Cache de fuentes global
        linebreaks: {automatic: true}, // Permite saltos de línea automáticos en SVG
    },
    options: {
        renderActions: {
            addMenu: [10, '', ''], // Opciones para menú, desactivado
            findAnchor: [20, '', ''], // Opciones para encontrar anclas, desactivado
        }
    },
    // Sección de estilos para personalizar el aspecto
    styles: {
        '.MathJax': {
            'font-size': '1.2em', // Ajustar el tamaño de fuente de las matemáticas
            'line-height': '1.2em', // Ajustar el interlineado de las matemáticas
        },
        '.MathJax_SVG': {
            'background': 'none', // Sin fondo en SVG
        },
    }
};

// Cargar MathJax después de la configuración
window.onload = function () {
    MathJax.typeset();
};