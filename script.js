// This function clear all the values
function clearScreen() {
    let clear = document.getElementById("clear")
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }

    // This function evaluates the expression and returns result
    function calculate() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
    }
    //This function check if press only number otherwise show alert box
    window.addEventListener('keypress',(event)=>{
        operator = ['-','+','*','/']
        key = event.key
        press = event.press
        if (press.includes('Digit') || operator.includes(key) ){
            parent = document.getElementById("result")
            parent.innerText = parent.innerText + key
            console.log(event)
    
        }
        else{
           
            alert("Only numbers are allowed")
        }
        
    })
  