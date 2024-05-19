let displayEl = document.getElementById('display');
let clearEl = document.getElementById('clear');

function displayEquation(input) {
    if (displayEl.value === 'Error') {
        displayEl.value = "";
    }
    displayEl.value += input;
}

clearEl.addEventListener('click', () => {
    displayEl.value = "";
});


function calculate() {
    try {
        displayEl.value = eval(displayEl.value);
    } catch (e) {
        displayEl.value = 'Error';
    }
}

function del(){
    displayEl.value = displayEl.value.slice(0,displayEl.value.length - 1);
}





