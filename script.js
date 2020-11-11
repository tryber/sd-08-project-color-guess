let r = 0;
let g = 0;
let b = 0;

function numberGenerator () {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
}

numberGenerator()

let rgbTitle = document.getElementById('rgb-color');
rgbTitle.innerHTML = "(" + r + ", " + g + ", " + b + ")";