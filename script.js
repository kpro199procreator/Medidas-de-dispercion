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

// Inicializa MathJax al cargar la ventana
window.onload = function () {
    MathJax.typeset();
};

// Selecciona el objeto que se moverá
const obj = document.getElementById("moving-object");

// Función para mover el objeto a una posición aleatoria
function moveObject() {
    const x = Math.random() * (window.innerWidth - 100); // 100 es el ancho del objeto
    const y = Math.random() * (window.innerHeight - 100); // 100 es la altura del objeto
    obj.style.transform = `translate(${x}px, ${y}px)`; // Aplica la transformación
}

// Mueve el objeto cada 0.5 segundos
setInterval(moveObject, 500);