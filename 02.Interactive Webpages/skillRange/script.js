

function subMit() {
     let name = document.getElementById("name").value;

     let html = parseInt(document.getElementById("html").value) || 0;
     let css = parseInt(document.getElementById("css").value) || 0;
     let js = parseInt(document.getElementById("js").value) || 0;


     if (!name) {
          alert("please insert your name");
          return;
     }

     if (html < 0 || html > 100 || css < 0 || css > 100 || js < 0 || js > 100) {
          alert("Please enter skill levels between 0 to 100.")
          return;
     }

     /*
     if (html === "" || isNaN(html) || html < 0 || html > 100) {
          alert("please enter a valid HTML skill level between 0 and 100.");
          return;
     }
     if (css === "" || isNaN(css) || css < 0 || css > 100) {
          alert("please enter a valid CSS skill level between 0 and 100.");
          return;
     }
     if (js === "" || isNaN(js) || js < 0 || js > 100) {
          alert("please enter a valid JavaScript skill level between 0 and 100.");
          return;
     }
*/


     let result = `<p>${name} HTML skill level is ${html} out of 100 </p>

     <p>${name} CSS skill level is ${css} out of 100 </p>
     <p>${name} JavaScript skill level is ${js} out of 100 </p>
     
     `;
     let total = html + css + js;

     let htmlPercentage = ((html / total) * 100).toFixed(0);
     let cssPercentage = ((css / total) * 100).toFixed(0);
     let jsPercentage = ((js / total) * 100).toFixed(0);

     let box1 = document.getElementsByClassName("box1")[0];
     box1.innerHTML = result;
     const percenTage = `<p>
HTML: ${htmlPercentage}% </p>
<p>
CSS: ${cssPercentage}%</p>
<p>
JavaScript: ${jsPercentage}% </p>`;

     let box2 = document.getElementsByClassName("box2")[0];
     box2.innerHTML = percenTage;

     // let range = ;

     let box3 = document.getElementsByClassName("box3")[0];

     box3.innerHTML = ` 
     <div class="slide-range">
          <label for="html-range">HTML 
          <input type="range" id="html-range" min="0" max="100" value="${htmlPercentage}" readonly>${htmlPercentage}%</label>
     </div>
      <div class="slide-range">
          <label for="html-range">CSS 
          <input type="range" id="css-range" min="0" max="100" value="${cssPercentage}" readonly>${cssPercentage}%</label>
     </div>
      <div class="slide-range">
          <label for="js-range">JavaScript
          <input type="range" id="html-range" min="0" max="100" value="${jsPercentage}" readonly>${jsPercentage}%</label>
     </div>
     `;


}



