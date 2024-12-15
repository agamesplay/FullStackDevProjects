function submitButton() {
    let opOne = document.getElementById("option1").checked ;
    let opTwo = document.getElementById("option2").checked ;
    let result = document.getElementById("result");

    const curtAns = true;

    if ( opOne === curtAns) {
        result.textContent = "Correct!";
        result.style.color = "green";
    }
    else if (opTwo) {
        result.textContent = "Not quite!";
        result.style.color = "red";
    }
    else {
        result.textContent = "Please select the option!";
        result.style.color = "grey"
    }
}