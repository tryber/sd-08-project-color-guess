function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

function randomColor() {
  return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

let ballsContainer = document.getElementById("balls-container");
function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    let newBall = document.createElement("div");
    newBall.className = "ball";
    ballsContainer.appendChild(newBall);
  }
}
createBalls();

let balls = document.querySelectorAll(".ball");
function colorBalls() {
  for (let arrayPosition = 0; arrayPosition < balls.length; arrayPosition += 1) {
    balls[arrayPosition].style.backgroundColor = randomColor();
  }
}
colorBalls();

let rgbNumber = document.getElementById("rgb-color");
function rgbNumberName() {
  rgbNumber.innerText = balls[randomNumber(6)].style.backgroundColor;
}
rgbNumberName();

let answerMessage = document.getElementById("answer");
function checkBallrgbNumber() {
  let scoreMessage = document.getElementById("score");
  let score = 0;
  ballsContainer.addEventListener("click", function(event){
    if (event.target.style.backgroundColor == rgbNumber.innerText) {
      answerMessage.innerText = "Acertou!";
      score += 3;
      scoreMessage.innerText = score;
      colorBalls();
      rgbNumberName();
    } else {
      answerMessage.innerText = "Errou! Tente novamente!";
    }
  })
}
checkBallrgbNumber();

function resetGame() {
  let resetButton = document.getElementById("reset-game");
  resetButton.addEventListener("click", function(){
    colorBalls();
    rgbNumberName();
    answerMessage.innerText = "Escolha uma cor";
  })
}
resetGame();