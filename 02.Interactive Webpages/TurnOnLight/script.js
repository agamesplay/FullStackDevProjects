
/*

// test 0.1 strongly i failed to making logics at 1st time .

function switchFun() {
    let switchButton = document.getElementById("switch-button"); // toggle button
    let switchIcon = document.getElementById("switch-icon"); // icon
    let switchText = document.getElementById("switch-text"); // paragraph text
    switchButton.textContent = switchButton.textContent === "OFF" ? "ON" : "OFF";
    switchText.textContent = "Switch ON";
    switchIcon.style.color = "green";
}
    */

// test 0.2 

// in test of 0.2 i mistake to making logic 1 time then some syntext error. 

function switchFun() {
    let switchButton = document.getElementById("switch-button"); // toggle button
    let switchIcon = document.getElementById("switch-icon"); // icon
    let switchText = document.getElementById("switch-text"); // paragraph text

    if (switchButton.textContent === "ON") {
        switchButton.textContent = "OFF";
        switchText.textContent = "Switch ON";
        switchIcon.style.color = "green";
        switchIcon.className = "fa-solid fa-toggle-on"; // Toggle on

    }

    else {
        switchButton.textContent = "ON";
        switchText.textContent = "Switch OFF";
        switchIcon.style.color = "";
        switchIcon.className = "fa-solid fa-toggle-off"; // Toggle of
    }

    bulbOn();
}


function batteryFun() {
    let batButton = document.getElementById("battery-button");
    let batIcon = document.getElementById("batIcon");
    let battext = document.getElementById("battery-text");

    if (batButton.textContent === "Connect") {
        batButton.textContent = "Disonnect";
        battext.innerHTML = "Is Battery connected? Yes";
        batIcon.style.color = "Green";
        batIcon.className = "fa-solid fa-battery-full";
    }

    else {
        batButton.textContent = "Connect";
        battext.innerHTML = "Is Battery connected? No";
        batIcon.style.color = "";
        batIcon.className = "fa-solid fa-battery-half";
    }
    
    bulbOn();
}

function bulbOn() {
    let light = document.getElementById("light");
    const lightText = document.getElementById("light-text");
    let switchButton = document.getElementById("switch-button");
    let batButton = document.getElementById("battery-button");
    const boxShadow = document.getElementById("oneForAll");


    if (switchButton.textContent === "OFF" && batButton.textContent === "Disonnect") {
        light.style.color = "yellow";
        lightText.innerHTML = "Bulb Is On";
        boxShadow.classList.add("fineForAll");
    }
    
    else {
        light.style.color = "";
        lightText.innerHTML = "Bulb Is Off"
        boxShadow.classList.remove("fineForAll");
    }

}


// lite ( clean code, easier, advance ) version also available of this code.