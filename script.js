document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    this.innerText = this.innerText === 'Modo Oscuro' ? 'Modo Claro' : 'Modo Oscuro';
});

// Función para calcular la media
function calculateMean() {
    const values = [5, 15, 20, 25, 30]; // Cambia esto por tus datos
    const mean = values.reduce((a, b) => a + b) / values.length;
    document.getElementById('meanResult').innerText = `La media es: ${mean}`;
}

// Función para calcular la mediana
function calculateMedian() {
    const values = [5, 3, 8, 1, 4];
    values.sort((a, b) => a - b);
    const n = values.length;
    const median = n % 2 === 0
        ? (values[n / 2 - 1] + values[n / 2]) / 2
        : values[Math.floor(n / 2)];
    document.getElementById('medianResult').innerText = `La mediana es: ${median}`;
}

// Función para calcular la moda
function calculateMode() {
    const values = [1, 2, 2, 3, 3, 3, 4];
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    values.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
        if (frequency[value] > maxFreq) {
            maxFreq = frequency[value];
        }
    });

    for (const key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(key);
        }
    }

    document.getElementById('modeResult').innerText = `La moda es: ${modes.join(', ')}`;
}

// Función para calcular el rango
function calculateRange() {
    const values = [8, 12, 20, 4, 15];
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min;
    document.getElementById('rangeResult').innerText = `El rango es: ${range}`;
}

// Función para calcular la desviación media
function calculateMeanDeviation() {
    const values = [10, 12, 14, 16];
    const mean = values.reduce((a, b) => a + b) / values.length;
    const meanDeviation = values.reduce((acc, value) => acc + Math.abs(value - mean), 0) / values.length;
    document.getElementById('meanDeviationResult').innerText = `La desviación media es: ${meanDeviation.toFixed(2)}`;
}

// Función para calcular la desviación estándar
function calculateStandardDeviation() {
    const values = [2, 4, 4, 4, 5, 5, 7, 9];
    const mean = values.reduce((a, b) => a + b) / values.length;
    const variance = values.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) / values.length;
    const standardDeviation = Math.sqrt(variance);
    document.getElementById('standardDeviationResult').innerText = `La desviación estándar es: ${standardDeviation.toFixed(2)}`;
}
