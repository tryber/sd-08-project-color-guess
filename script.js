let r = 0;
let g = 0;
let b = 0;

// Gera os números
function numberGenerator () {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
}

numberGenerator()

let rgbColorRight = "rgb(" + r + ", " + g + ", " + b + ")"

// Altera o RGB no titulo
let rgbTitle = document.getElementById('rgb-color');
rgbTitle.innerHTML = "(" + r + ", " + g + ", " + b + ")";

// Colore as 6 bolas
let ball = document.getElementsByClassName('ball')
function color () {
    let rgbColor = "rgb(" + r + ", " + g + ", " + b + ")"
    for (let i = 0; i < ball.length; i += 1) {
        numberGenerator()
        rgbColor = "rgb(" + r + ", " + g + ", " + b + ")"
        ball[i].style.backgroundColor = rgbColor;
    }    
}

color()

// Colore a bola certa
function colorRight () {
    let position = Math.floor(Math.random() * 5);
    ball[position].style.backgroundColor = rgbColorRight;  
}

colorRight()



