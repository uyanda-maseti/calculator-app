var newLine = true

function digitBtnPressed(button){
    if(newLine){
        document.getElementById('inputBox').value = button
        newLine = false
    }else{
        var currentValue = document.getElementById('inputBox').value
        document.getElementById('inputBox').value = currentValue + button;
    }

}