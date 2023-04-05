/*
    Calculator Screen
*/
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

/*
    Numbers Button
*/
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

let prevNumber = '';

let currentNumber = '0';

let calculationOperator = '';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

/*
    Operators Button
*/
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    };
    calculationOperator = operator;
    currentNumber = '0';
};
    
/*
    Equals Button
*/
const equalSign = document.querySelector(".equals-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break; 
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    };
    currentNumber = result;
    calculationOperator = '';
};

/*
    AC Button
*/
const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    currentNumber = '0';
    calculationOperator = '';
};

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

/*
    Decimal Button
*/
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return;
    };
    currentNumber += dot;
};

/*
    Percentage Button
*/
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
    countPercentage(event.target.value);
    updateScreen(currentNumber);
});

countPercentage = (_onePerHundred) => {
    if(currentNumber.includes("%")) {
        return;
    };
    currentNumber /= 100;
};
