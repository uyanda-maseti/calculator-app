var newLine = true  //Boolean variable. Determines if the next thing the user types should be on a new line
var value1
var currentOperator
// Event handler for when any digit button is pressed 
function digitBtnPressed(button){
    if(newLine){
        document.getElementById('inputBox').value = button
        newLine = false
    }else{
        var currentValue = document.getElementById('inputBox').value
        document.getElementById('inputBox').value = currentValue + button;
    }

}
// Event handler for when the AC button is pressed
function btnACPressed(){
    document.getElementById('inputBox').value = 0
    newLine = true
}
// Event handler for operator buttons
function operatorBtnPressed(operator){
    currentOperator = operator
    value1 = parseInt(document.getElementById('inputBox').value)
    newLine = true
}

// Event handle for equals button
function equalsBtnPressed(){
    var value2 = parseInt(document.getElementById('inputBox').value)
    var finalTotal
    switch(currentOperator){
        case '+':
            finalTotal = value1 + value2
            break
        case '-':
            finalTotal = value1 - value2
            break
        case 'x':
            finalTotal = value1 * value2
            break
        case '/':
            finalTotal = value1 / value2

    }
    document.getElementById('inputBox').value = finalTotal
    
    value1 = 0
    newLine = true
}