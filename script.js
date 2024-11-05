function redirectToCymath(equation) {
    const url = `https://www.cymath.com/solver/equation/${encodeURIComponent(equation)}`;
    window.open(url, '_blank');
}

function calculateMean() {
    const values = [8, 12, 15, 10, 17];
    const mean = values.reduce((a, b) => a + b) / values.length;
    document.getElementById('meanResult').innerText = `La media es: ${mean.toFixed(2)}`;
}

function calculateMedian() {
    const values = [10, 14, 18, 20, 22, 25, 30];
    values.sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    const median = values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
    document.getElementById('medianResult').innerText = `La mediana es: ${median}`;
}

function calculateMode() {
    const values = [6, 9, 6, 11, 12, 9, 15];
    const frequency = {};
    values.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFrequency);
    document.getElementById('modeResult').innerText = `La moda es: ${modes.join(', ')}`;
}

function calculateRange() {
    const values = [8, 12, 20, 4, 15];
    const range = Math.max(...values) - Math.min(...values);
    document.getElementById('rangeResult').innerText = `El rango es: ${range}`;
}

function calculateMeanDeviation() {
    const values = [4, 8, 12, 16, 20];
    const mean = values.reduce((a, b) => a + b) / values.length;
    const meanDeviation = values.reduce((sum, value) => sum + Math.abs(value - mean), 0) / values.length;
    document.getElementById('meanDeviationResult').innerText = `La desviación media es: ${meanDeviation.toFixed(2)}`;
}

function calculateStandardDeviation() {
    const values = [3, 7, 7, 10, 13, 17];
    const mean = values.reduce((a, b) => a + b) / values.length;
    const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    document.getElementById('stdDevResult').innerText = `La desviación estándar es: ${stdDev.toFixed(2)}`;
}
