function colors() {
    let select = document.getElementById("colorOption");
    const selectedValue = select.value;
    const ptext = document.getElementById("ptext");

    if (selectedValue === "red") {
        ptext.innerHTML = "Your favorite color is red!"
        ptext.style.color = "red"
        ptext.style.backgroundColor = "black";
        ptext.style.padding = "5px";
    }
    else if (selectedValue === "green") {
        ptext.innerHTML = "Your favorite color is green!";
        ptext.style.color = "green";
        ptext.style.backgroundColor = "black";
        ptext.style.padding = "5px";
    } else if (selectedValue === "blue") {
        ptext.innerHTML = "Your favorite color is blue!";
        ptext.style.color = "blue"; // we can also use css classList toggle 
        ptext.style.backgroundColor = "black";
        ptext.style.padding = "5px";
    }

};

// mordern way to add event with method.

document.getElementById("colorOption").addEventListener("change", colors);