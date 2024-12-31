
window.onload = function () {
    timeSlider();
}

function timeSlider() {
    let getImg = document.getElementById("greetingImg");
    let getMsg = document.getElementById("greetingMsg");

    let sliderRange = document.getElementById("sliderRange").value;
    let sliderTime = sliderRange.toString().padStart(2, '0');
    document.getElementById("greetingTime")
        // Update the time display
        .textContent = `Time: ${sliderTime}:00`;


    if (sliderRange < 7) {
        getMsg.textContent = "Time to shine";
        getImg.src = "https://cdn.leonardo.ai/users/5d95b788-4212-4a81-8cee-ec5b1f71a843/generations/ac00fe09-1fde-441a-aa54-2117587d7fbb/Leonardo_Anime_XL_Viral_anime_seascape_wallpaper_in_4K_quality_2.jpg?w=512";
    }
    else if (sliderRange < 12) {
        getMsg.textContent = "Good Morning"
        getImg.src = "https://cdn.leonardo.ai/users/e8734e75-2a2d-4b46-b558-d51ed3fcf9c1/generations/1aeffdfe-df79-41b5-b433-6b4b0ea9f190/variations/Default_An_animestyle_ancient_temple_perched_on_a_high_cliff_o_1_1aeffdfe-df79-41b5-b433-6b4b0ea9f190_0.jpg?w=512";
    }
    else if (sliderRange < 17) {
        getMsg.textContent = "Good Afternoon"
        getImg.src = "https://cdn.leonardo.ai/users/904de874-ec08-4900-8f16-a5d800b9f44c/generations/c0c5600f-dada-48f5-ac84-ff7a072abbe6/Leonardo_Anime_XL_8k_UHD_3D_Emotional_animestyle_image_colorfu_3.jpg?w=512";
    }
    else if (sliderRange < 21) {
        getMsg.textContent = "Good Evening"
        getImg.src = "https://cdn.leonardo.ai/users/dc0a35cd-6f60-40c6-b2c9-f6d45d43dfba/generations/2ece5baa-e718-4524-b22d-e31415af35a9/Leonardo_Anime_XL_Animestyle_illustration_in_4k_of_Santorini_G_1.jpg?w=512";
    }
    else {
        getMsg.textContent = "Good Night";
        getImg.src = "https://cdn.leonardo.ai/users/8d776b61-227f-4849-b60c-f8861256a949/generations/b702acf8-a857-4528-8a50-6a92a05b7e5b/Leonardo_Anime_XL_Viral_4k_anime_nature_wallpaper_in_3D_style_3.jpg?w=512";
    }
}

// not enough.....

function changeIcon() {
    const body = document.body;
    const heOne = document.getElementById("headingOne");
    const cIcon = document.getElementById("icon");
    const footer = document.querySelector("footer");
    // const fp = document.getElementById("fp");


    // Toggle dark mode class on the body
    body.classList.toggle("dark-mode");

    // Update styles dynamically
    if (body.classList.contains("dark-mode")) {
        heOne.style.color = "white";
        cIcon.className = "fa-solid fa-moon"; // Switch to moon icon
        cIcon.style.color = "white";
        // footer.style.color = "white";
        fp.style.color = "white";

    } else {
        heOne.style.color = "black";
        cIcon.className = "fa-solid fa-sun"; // Switch back to sun icon
        cIcon.style.color = "black";
    }
}
