// Configuración de MathJax
MathJax = {
    loader: {
        load: ['[tex]/amsmath', '[tex]/amsfonts', '[tex]/color'],
    },
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        packages: {'[+]': ['amsmath', 'amsfonts', 'color']},
    },
    svg: {
        fontCache: 'global',
        linebreaks: {automatic: true},
    },
    options: {
        renderActions: {
            addMenu: [10, '', ''],
            findAnchor: [20, '', ''],
        }
    },
    styles: {
        '.MathJax': {
            'font-size': '1.2em',
            'line-height': '1.2em',
        },
        '.MathJax_SVG': {
            'background': 'none',
        },
    }
};

window.onload = function () {
    MathJax.typeset();
};
function redirect() {
            // Cambia la URL a la que deseas redirigir
            window.location.href = "fecuencias.html"; // Reemplaza con tu URL
        }
