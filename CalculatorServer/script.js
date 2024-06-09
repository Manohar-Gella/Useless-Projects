function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

async function calculateResult() {
    let expression = document.getElementById('display').value;
    let result;
    try {
        result = await fetch('http://localhost:4320/');
        
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}
