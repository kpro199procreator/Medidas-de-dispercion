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

const obj = document.getElementById("moving-object");

function moveObject() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    obj.style.transform = `translate(${x}px, ${y}px)`;
}

// Mover el objeto cada 0.5 segundos
setInterval(moveObject, 500);