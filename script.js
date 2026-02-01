const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const displayOutput = document.querySelector('#display');

let num1 = 0;
let num2 = 0;
let operator = '';

function operate(operator, num1, num2) {
    let result = 0;
    
    if(operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    } else {
        result = 'Please enter a valid operator';
    }
    return result;
};

digitButtons.forEach(digitButton => {
    digitButton.addEventListener("click", () => {
        // return digitButton.textContent;
        console.log(digitButton.textContent);
    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        // return operatorButton.textContent;
        console.log(operatorButton.textContent);
    })
})