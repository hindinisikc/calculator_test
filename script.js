let display = document.getElementById("display");


function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value= eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


// this is a test for git commit in visual studio