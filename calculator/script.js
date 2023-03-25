let input = document.getElementById('input');

function insertValue(value) {
    input.value += value;
}

function clearDisplay() {
    input.value = '';
}

function deleteChar() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let result = eval(input.value);
    input.value = result;
}


