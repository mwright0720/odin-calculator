function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b == 0) return "Can't divide by zero!";
    return a / b;
}

function operate(a,btnOperator, b)
{
    a = parseInt(a);
    b = parseInt(b);
    if (btnOperator === "+")
    {
        return add(a,b);
    }

    if(btnOperator === "-")
    {
        return subtract(a,b);
    }

    if (btnOperator === "*") {
        return multiply(a,b);
    }

    if (btnOperator === "/") {
        return divide(a,b);
    }
}

function parseInput(value) {
    let finalInput = [];
    let delimiter = "";
    if (value.includes("+"))
    {
        delimiter = "+";
    }

    if (value.includes("-"))
    {
        delimiter = "-";

    }
    if (value.includes("*"))
    {
        delimiter = "*";

    }
    if (value.includes("/"))
    {
        delimiter = "/";

    }
    let splitString = value.split(delimiter);
    finalInput.push(splitString[0]);
    finalInput.push(splitString[1]);
    finalInput.splice(1, 0, delimiter);
    return finalInput;
}
let firstOperand = 0;
let btnOperator = "";
let secondOperand = 0;

let displayValue = "";

const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const display = document.querySelector('.display');
const equalsBtn = document.querySelector('.btn-equals');
const clearBtn = document.querySelector('.btn-clear');



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnValue = button.textContent;
        displayValue += btnValue;
        display.textContent = displayValue;
        
    })
})

equalsBtn.addEventListener('click', () => {
    parsedInput = parseInput(display.textContent);
    result = operate(parsedInput[0], parsedInput[1], parsedInput[2]);
    display.textContent = result;
});

clearBtn.addEventListener('click', () => {
    displayValue = "";
    display.textContent = displayValue;
})

