const ballsContainer = document.querySelector('.balls-container');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetGameButton = document.getElementById('reset-game');
const score = document.getElementById('score');
let scoreCounter = 0;

function getRandomNumber(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

function getRandomColor() {
  const rgb = [];
  for (let index = 0; index < 3; index += 1) {
    rgb.push(getRandomNumber(255));
  }
  return `rgb(${rgb.join(', ')})`;
}

function updateScore() {
  score.textContent = `Placar: ${scoreCounter}`;
}

function checkAnswer(event) {
  const elemColor = event.target.style.backgroundColor;
  const colorToBeGuessed = `rgb${rgbColor.textContent}`;
  if (elemColor === colorToBeGuessed) {
    answer.textContent = 'Acertou!';
    scoreCounter += 3;
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
  updateScore();
}

function createBall(color) {
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.backgroundColor = color || getRandomColor();
  ball.addEventListener('click', checkAnswer);
  ballsContainer.appendChild(ball);
}

function eraseAllBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const ball = balls[index];
    ball.remove();
  }
}

function startGame() {
  answer.textContent = 'Escolha uma cor';

  eraseAllBalls();

  const choosedColorIndex = getRandomNumber(5);
  for (let index = 0; index < 6; index += 1) {
    const color = getRandomColor();
    if (index === choosedColorIndex) rgbColor.textContent = color.slice(3);
    createBall(color);
  }
}

startGame();

resetGameButton.addEventListener('click', startGame);
