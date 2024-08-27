

// Change Button Color on Click
document.getElementById('colorButton').onclick = function() {
    const button = document.getElementById('colorButton');
    
    // Toggle between two colors
    if (button.style.backgroundColor === 'rgb(231, 76, 60)') {
        button.style.backgroundColor = '#27ae60';  // Green
    } else {
        button.style.backgroundColor = '#e74c3c';  // Red
    }
}

// Simple AI-Powered Calculator
document.getElementById('calculateButton').onclick = function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;

    document.getElementById('result').textContent = `The sum is: ${sum}`;
}
