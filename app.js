let intResult = 0;
let operators = ['add', 'subtract', 'multiply', 'divide'];
let intOperater = "";

const displayUpdate = (num) => {
    let display = document.getElementById('display');
    // let displayInt = parseInt(display.innerHTML);
    let secDisplay = document.getElementById('secDisplay');

    //If display is equal to zero AND no operator is selected
    if (display.innerHTML === "0" && operators.indexOf(num) === -1) {
        //If decimal while display = 0 and no operator selected; then set "0.1"
        if (num === "decimal") {
            display.innerHTML = "0.";
            //If num is not an operator, display the number 
        } else {
            display.innerHTML = num;
        }
    }

    //If an operator is selected 
    else if (operators.indexOf(num) >= 0) {
        // console.log("operator selected", intResult, display.innerHTML, intOperater, num)

        //If intOperator is blank, then set to Selected Operator, and set intResults to display, then reset display
        if (intOperater === "") {
            intOperater = num;
            intResult = display.innerHTML;
            secDisplay.innerHTML = display.innerHTML;
            display.innerHTML = 0;
        }
        //If negative is selected, but then overriden by another operator
        else if (display.innerHTML === "-") {
            display.innerHTML = "";
            intOperater = num;
        }

        // If double operator, it selects the last selected operator
        else if (display.innerHTML === "0" || display.innerHTML === "-") {
            console.log(" DOUBLE OPERATOR ACTION IN THE HOUSE ")
            if (num === "subtract") {
                display.innerHTML = "-"
            } else {
                intOperater = num;

            }
        }
        else {

            // console.log(intResult, display.innerHTML, intOperater);
            intResult = calc(intResult, display.innerHTML, intOperater);
            secDisplay.innerHTML = intResult;
            display.innerHTML = 0;
            intOperater = num;
        }



    } else if (num === 'equals') {
        display.innerHTML = calc(intResult, display.innerHTML, intOperater);
        intResult = display.innerHTML;
        secDisplay.innerHTML = display.innerHTML;
        intOperater = "";
        console.log(intOperater)

    } else if (num === 'decimal') {
        console.log('decimal clicked')
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
            console.log("added decimal")
        } console.log('decimal skipped')

    }

    else {
        display.innerHTML += num;
    }
    console.log(intResult, intOperater, display.innerHTML)
}


const clearAll = () => {
    let display = document.getElementById('display');
    let secDisplay = document.getElementById('secDisplay');
    display.innerHTML = 0;
    secDisplay.innerHTML = 0;
}

const calc = (num1, num2, operation) => {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log("CALCULATING BITCH")
    console.log(num1);
    console.log(num2);
    switch (operation) {
        case "add":
            console.log("calc add")
            result = num1 + num2;
            break;
        case "subtract":
            console.log("calc subtract")
            result = num1 - num2;
            break;
        case "multiply":
            console.log("calc multiply")
            result = num1 * num2;
            break;
        case "divide":
            console.log("calc divide")
            result = num1 / num2;
            break;
        default:
            console.log("ERROR")
            break;
    }
    return result.toString();
}

