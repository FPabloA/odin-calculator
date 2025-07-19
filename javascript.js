let firstValue = "";
let currOp = "";
let secondValue = "";

const calcDisplay = document.querySelector('#calc-display');

function updateDisplay () {
    let displayStr = "";
    if (firstValue != ""){
        displayStr = displayStr + firstValue;
    }
    else{
        displayStr = "0";
    }
    if (currOp != ""){
        displayStr = displayStr + " " + currOp;
    }
    if (secondValue != "") {
        displayStr = displayStr + " " + secondValue;
    }
    calcDisplay.innerHTML = displayStr;
}

function numClick (btn) {
    //if op is null, we are still typing the first num
    if (currOp == "") {
        firstValue = firstValue + btn.innerHTML;
    }
    else {
        secondValue = secondValue + btn.innerHTML;
    }
    updateDisplay();
}

function opClick (btn) {
    //if no second value has been entered we are overwriting the previously selected operation
    if (secondValue == ""){
        currOp = btn.innerHTML;
    }
    //if there is a second value evaluate current statement and start a new one with selected op
    else {
        evalCalc()
        currOp = btn.innerHTML;
    }
    updateDisplay();
}

function clearOp () {
    if(confirm("This will clear all values currently held in the calculator. Are you sure you want to continue")) {
        firstValue = "";
        currOp = "";
        secondValue = "";
    }
    updateDisplay();
}

function evalCalc() {
    if (firstValue == "" || currOp == "" || secondValue == "") {
        return;
    }
    let firstNum = parseFloat(firstValue);
    let secondNum = parseFloat(secondValue);

    if (currOp == "/") {
        firstNum = firstNum / secondNum;
    }
    else if(currOp == "X") {
        firstNum = firstNum * secondNum;
    }
    else if(currOp == "-") {
        firstNum = firstNum - secondNum;
    }
    else if(currOp == "+") {
        firstNum = firstNum + secondNum;
    }
    firstValue = firstNum.toString();
    currOp = "";
    secondValue = "";
    updateDisplay();
}

updateDisplay();