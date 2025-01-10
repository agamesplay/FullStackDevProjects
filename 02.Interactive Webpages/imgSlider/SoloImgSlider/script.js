
// window.onload = 
var images = [
    'https://cdn.leonardo.ai/users/5d95b788-4212-4a81-8cee-ec5b1f71a843/generations/ac00fe09-1fde-441a-aa54-2117587d7fbb/Leonardo_Anime_XL_Viral_anime_seascape_wallpaper_in_4K_quality_2.jpg?w=512',
    'https://cdn.leonardo.ai/users/a3592872-c994-4275-99b5-0574cf280898/generations/9cb8e5eb-d316-4726-9261-cd0ce9beebc0/Leonardo_Phoenix_10_A_peacockdragon_hybrid_with_a_long_sinuous_1.jpg',
    'https://cdn.leonardo.ai/users/39b45a37-377b-4f65-98d0-df942fc108f0/generations/34e73820-4238-40e7-afe1-030e51e1bb19/Leonardo_Phoenix_10_Create_a_serene_landscape_featuring_tall_p_2.jpg?w=512'

];


let num = 0;

function next() {
    let imgSlide = document.getElementById("simg");
    num++;

    if (num >= images.length) {
        num = 0;
    }
        imgSlide.src = images[num];
}
 
function prev() {
    let imgSlide = document.getElementById("simg");
    num--;
    
    if (num < 0 ) {
        num = images.length-1;
    }
    imgSlide.src = images[num];

}


// 