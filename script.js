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

 function toggleDarkMode() {
            document.body.classList.toggle('dark');
        }

        function validateLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Verificar las credenciales (puedes personalizar esto)
            if (username === 'valdo' && password === 'vv') {
                // Mostrar las secciones y ocultar el formulario
                document.getElementById('loginSection').style.display = 'none';
                document.getElementById('dataSection').style.display = 'block';
                document.getElementById('analysisSection').style.display = 'block';
            } else {
                alert('Credenciales incorrectas. Intenta de nuevo.');
            }
        }
