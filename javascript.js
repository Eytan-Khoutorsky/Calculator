let operator
let number1 = ""
let number2 = ""
    
const inputBox = document.getElementById("userInput");

const buttons = document.querySelectorAll(".btn")
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        displayNum(btn.textContent)
    })

})

function displayNum(input) {
    if (isNaN(input) && input != "=" && input != "clear") {
    if (operator && number1 !== "" && number2 !== "") {
        let result = operate(operator, number1, number2);
        inputBox.value = result;
        number1 = result.toString();
        number2 = "";
    }
    operator = input; 
    return;
}

    if (input == "clear") {
        operator = ""
        number1 = ""
        number2 = ""
        inputBox.value = ""
        return
    }

    if (input == "=") {
    if (operator && number1 !== "" && number2 !== "") {
        let result = operate(operator, number1, number2);
        inputBox.value = result;
        number1 = result.toString(); 
        number2 = "";
        operator = "";
    }
    return;
}


    


    
    if (operator) {
        number2+=input 
        inputBox.value = ""
        inputBox.value += number2
    } else {
        number1+=input
        inputBox.value = ""
        inputBox.value += number1
    }
}






function operate(operator, num1,num2) {
    

}


function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == "+") return num1 + num2;
    if (operator == "-") return num1 - num2;
    if (operator == "×") return num1 * num2;
    if (operator == "÷") {
        if (num2 == 0) {
            return "you sneaky bastard 🙅‍♂️"
        } else {return num1/num2}
    }
}

