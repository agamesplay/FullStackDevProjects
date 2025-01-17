/*
function convert() {
    const value = document.getElementById("inputValue");
    const inputValue = value.value;
    let selectValue = document.getElementById("mTok").value;
    const ptext = document.getElementById("ptext");
    
    if () {



    };
    else if () {

        
    }
}

*/

function convert() {
    // Get the input value
    const distance = parseFloat(document.getElementById("disValue").value);

    // Get the selected conversion type
    const conversionType = document.getElementById("mTok").value;

    // Result variable
    let result = 0;

    // Check if the input is a valid number
    if (isNaN(distance)) {
        document.getElementById("ptext").innerText = "Please enter a valid number!";
        return;
    }

    // Perform conversion based on the selected option
    switch (conversionType) {
        case "meTokil":
            result = distance / 1000; // Meters to Kilometers
            document.getElementById("ptext").innerText = `${distance} meters is equal to ${result} kilometers.`;
            break;
        case "meTomi":
            result = distance * 0.000621371; // Meters to Miles
            document.getElementById("ptext").innerText = `${distance} meters is equal to ${result} miles.`;
            break;
        case "kTomi":
            result = distance * 0.621371; // Kilometers to Miles
            document.getElementById("ptext").innerText = `${distance} kilometers is equal to ${result} miles.`;
            break;
         case "mTok":
         result = distance * 1.609 ; // miles to kilometers
         document.getElementById("ptext").innerHTML = `${distance} miles is equal to ${result} kilometer.`;
         break;
        default:
            document.getElementById("ptext").innerText = "Invalid conversion type selected.";
            break;
    }
}
