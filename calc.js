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

function operate(a,btn-operator, b)
{
    if (btn-operator === "+")
    {
        return add(a,b);
    }

    if(btn-operator === "-")
    {
        return subtract(a,b);
    }

    if (btn-operator === "*") {
        return multiply(a,b);
    }

    if (btn-operator === "/") {
        return divide(a,b);
    }
}
let a = 0;
let btn-operator = "";
let b = 0;