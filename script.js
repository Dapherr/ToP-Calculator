const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const displayOutput = document.querySelector('#display');
const equalsButton = document.querySelector('.equals');

let num1 = 0;
let num2 = 0;
let operator = '';
let isWaitingForNum2 = false;

function operate(operator, num1, num2) {
    let result = 0;
    
    if(operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '×') {
        result = multiply(num1, num2);
    } else if (operator === '÷') {
        if (num2 === 0) {
            return 'Error: Division by zero';
        }
        result = divide(num1, num2);
    } else {
        result = 'Invalid operator';
    }
    return result;
}

function isError(result) {
    return typeof result === 'string' && (result.startsWith('Error') || result.startsWith('Invalid'));
}

function updateDisplay(value) {
    displayOutput.textContent = value;
    if(isError(value)) {
        displayOutput.style.fontSize = '1.5rem';
    } else {
        displayOutput.style.fontSize = '4rem';
    }
}

digitButtons.forEach(digitButton => {
    digitButton.addEventListener("click", () => {
        if(isWaitingForNum2) {
            displayOutput.textContent = digitButton.textContent;
            displayOutput.style.fontSize = '4rem';
            isWaitingForNum2 = false;
        } else {
            if(displayOutput.textContent === '0') {
                displayOutput.textContent = digitButton.textContent;
            } else {
                displayOutput.textContent += digitButton.textContent;
            }
        }
    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        if(operator && !isWaitingForNum2) {
            num2 = parseFloat(displayOutput.textContent);
            const result = operate(operator, num1, num2);
            updateDisplay(result);
            if(!isError(result)) {
                num1 = result;
            }
        } else {
            num1 = parseFloat(displayOutput.textContent);
        }

    operator = operatorButton.textContent;
    isWaitingForNum2 = true;
    })
})

equalsButton.addEventListener('click', () => {
    if(operator && !isWaitingForNum2) {
        num2 = parseFloat(displayOutput.textContent);
        const result = operate(operator, num1, num2);
        updateDisplay(result);

        if(!isError(result)) {
            num1 = result;
            num2 = 0;
            operator = '';
            isWaitingForNum2 = false;
        }
    }
});

clearButton.addEventListener('click', () => {
    displayOutput.textContent = 0;
    displayOutput.style.fontSize = '4rem';
    num1 = 0;
    num2 = 0;
    operator = '';
    isWaitingForNum2 = false;
})