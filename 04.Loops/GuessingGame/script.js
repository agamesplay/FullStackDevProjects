
let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

let inputNumber = document.getElementById("inputNumber");
let text = document.getElementById("text");

let attempts = 10; // Define attempts outside the event listener

document.querySelector("button").addEventListener("click", function () {

    let userNum = inputNumber.value.trim();

    if (!userNum) {
        text.textContent = "Please enter a number before submitting!";
        return; // Stop further execution
    }

    userNum = parseInt(inputNumber.value); // Get and convert user input each time

    if (attempts > 0) {
        attempts--; // Decrement attempts

        if (userNum === randomNumber) {
            text.textContent = "Congratulations, you made it!";
            setTimeout(() => location.reload(), 3000); // Refresh after 2 seconds
        } else if (userNum > randomNumber) {
            text.textContent = `Too high! Try Again. ${attempts} attempts remaining.`;
        } else if (userNum < randomNumber) {
            text.textContent = `Too low! Try again. ${attempts} attempts remaining.`;
        }
    } else {
        text.textContent = `Sorry, you're out of attempts! The correct number was ${randomNumber}`;
        setTimeout(() => location.reload(), 3000); // Refresh after 2 seconds
    }

    inputNumber.value = "";
});
