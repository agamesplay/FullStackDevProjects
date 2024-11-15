/*
function lightImg() {
    const textButton = document.getElementById("buttonText");
    const el = document.querySelector("img");
    // el.setAttribute('style', 'visibility:visible; border: 4px solid white;')
    // el.style.visibility = "visible";
    if ( textButton === isbutton === false) {
        textButton.innerText = "true";
    }
}

*/

// 2.o its work properly

/*
let isButtonActive = false;

function lightImg() {
    const textButton = document.getElementById("buttonText");
    const imgElement = document.querySelector(".imgBox img");

    // Toggle visibility and button text
    if (isButtonActive) {
        imgElement.style.visibility = "hidden";
        textButton.innerText = "isbutton === false";
    } else {
        imgElement.style.visibility = "visible";
        textButton.innerText = "isbutton === true";
    }
    
    // Toggle the state
    isButtonActive = !isButtonActive;
}

*/

// 3.o its works properly

function lightImg() {
    const textButton = document.getElementById("buttonText");
    const imgElement = document.querySelector(".imgBox img");

    if (textButton.textContent === "isOn === false") {
        textButton.textContent = "isOn === true";
        imgElement.setAttribute('style', 'visibility:visible;')
    }
    else {
        textButton.textContent = "isOn === false";
        imgElement.setAttribute('style', 'visibility:hidden;')
    }

}