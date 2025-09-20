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
        operator = input
        inputBox.value = operator
        return
    }
    if (input == "clear") {
        operator = ""
        number1 = ""
        number2 = ""
        inputBox.value = ""
        return
    }

    if (input == "=") {


        if (operator == "+") {
            inputBox.value = addNums(number1,number2)
            number1 = ""
            number2 = ""
            operator = ""
            return

        } else if (operator == "-") {
            inputBox.value = substractNums(number1,number2)
            number1 = ""
            number2 = ""
            operator = ""
            return 
        } else if (operator == "×") {
            inputBox.value = multipliyNums(number1,number2)
            number1 = ""
            number2 = ""
            operator = ""
            return
        } else if (operator == "÷") {
            inputBox.value = divideNums(number1, number2)
            number1 = ""
            number2 = ""
            operator = ""
            return
        }
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




function  addNums(num1, num2) {
    return Number(num1) + Number(num2)
}
function substractNums(num1,num2) {
    return Number(num1)-Number(num2)
}
function multipliyNums(num1,num2) {
    return Number(num1)*Number(num2)
}
function divideNums(num1,num2) {
    return Number(num1)/Number(num2)
}
