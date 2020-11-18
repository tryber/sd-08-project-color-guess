let r = 0;
let g = 0;
let b = 0;

// Gera os números
function numberGenerator() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}
numberGenerator();
let rgbColorRight = 'rgb(' + r + ', ' + g + ', ' + b + ')';

// Altera o RGB no titulo
let rgbTitle = document.getElementById('rgb-color');
rgbTitle.innerHTML = '(' + r + ', ' + g + ', ' + b + ')';

// Cria as 6 bolas
const ballsCase = document.getElementById('ballsCase');
function createBalls() {
  for (let i = 0; i < 6; i += 1) {
      let ball = document.createElement('div');
      ball.className = "ball";
      ball.addEventListener('click', check)
      ballsCase.appendChild(ball);
    }
}
createBalls();

// Colore as 6 bolas
let ball = document.getElementsByClassName('ball')
function color() {
    let rgbColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    for (let i = 0; i < ball.length; i += 1) {
        numberGenerator();
        rgbColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        ball[i].style.backgroundColor = rgbColor;
    }    
}
color();

// Colore a bola certa
function colorRight() {
    let position = Math.floor(Math.random() * 5);
    ball[position].style.backgroundColor = rgbColorRight;  
}
colorRight();

// Acertou ou errou a cor
let answer = document.getElementById("answer");
function check (event) {
    if (event.target.style.backgroundColor === rgbColorRight) {
        answer.innerHTML = "Acertou!";
        scoreCalculator()
    } else {
        answer.innerHTML = "Errou! Tente novamente!";
        scoreCalculator()
    }
}

// Botão de resetar
let resetButton = document.getElementById("reset-game");
resetButton.addEventListener("click", function () {
    numberGenerator();
    rgbColorRight = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    rgbTitle.innerHTML = '(' + r + ', ' + g + ', ' + b + ')';
    color()
    colorRight()
    answer.innerHTML = 'Escolha uma cor'
});

// Criar placar
let scoreText = document.getElementById("scoreValue");
let score = document.getElementById("score");
let points = 0;
function scoreCalculator () {
    if (answer.innerHTML == "Acertou!") {
        points += 3;
        score.innerText = points;
    } else {
        points -= 1;
        score.innerText = points;
    }
    localStorage.setItem("score", score.innerText)
}