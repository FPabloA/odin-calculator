let firstValue = null;
let currOp = null;
let secondValue = null;

const calcDisplay = document.querySelector('#calc-display');

function updateDisplay () {
    let displayStr = "";
    if (firstValue != null){
        displayStr = displayStr + firstValue;
    }
    else{
        displayStr = "0";
    }
    if (currOp != null){
        displayStr = displayStr + " " + currOp;
    }
    if (secondValue != null) {
        displayStr = displayStr + " " + secondValue;
    }
    calcDisplay.innerHTML = displayStr;
}

function clearOp () {
    console.log("is this in here");
    if(confirm("This will clear all values currently held in the calculator. Are you sure you want to continue")) {
        firstValue = null;
        currOp = null;
    }
}

updateDisplay();