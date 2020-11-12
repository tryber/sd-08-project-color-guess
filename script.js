const ballsContainer = document.querySelector('.balls-container');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetGameButton = document.getElementById('reset-game');
const score = document.getElementById('score');
let colorToBeGuessed = null;
let scoreCounter = 0;

function shuffle(arr) {
  const result = arr.slice(0);
  for (let index = 0; index < 100; index += 1) {
    const index = Math.floor(Math.random() * result.length);
    const cur = result.splice(index, 1)[0];
    result.push(cur);
  }
  return result;
}

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

function createBall(color) {
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.backgroundColor = color || getRandomColor();
  ballsContainer.appendChild(ball);
}

function clearBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const ball = balls[index];
    ball.remove();
  }
}

function startGame() {
  colorToBeGuessed = getRandomColor();

  let colors = [colorToBeGuessed];

  for (let index = 0; index < 5; index += 1) {
    colors.push(getRandomColor());
  }

  colors = shuffle(colors);

  clearBalls();

  for (let index = 0; index < colors.length; index += 1) {
    const color = colors[index];
    createBall(color);
  }

  rgbColor.textContent = colorToBeGuessed.replace('rgb', '');

  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    const ball = balls[index];
    ball.addEventListener('click', checkAnswer);
  }
}

function updateScore() {
  score.textContent = `Placar: ${scoreCounter}`;
}

function checkAnswer(event) {
  if (event.target.style.backgroundColor === colorToBeGuessed) {
    answer.textContent = 'Acertou!';
    scoreCounter += 3;
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
  updateScore();
}

startGame();

resetGameButton.addEventListener('click', startGame);