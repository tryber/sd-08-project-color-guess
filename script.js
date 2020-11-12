let rgb;
const gessColor = document.getElementById('rgb-color');
function createRGBColor(numberOfColors) {
  const colors = [];
  for (let color = 0; color < numberOfColors; color += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    rgb = `rgb(${r}, ${g}, ${b})`;
    colors.push(rgb);
  }
  return colors;
}
function generateNewChallenge() {
  createRGBColor(1);
  gessColor.innerHTML = rgb;
}
generateNewChallenge();

const colorContainer = document.getElementById('color-container');
function createEmptyBall(numberOfBalls) {
  for (let ball = 0; ball < numberOfBalls; ball += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    colorContainer.appendChild(color);
  }
}
createEmptyBall(6);

function insertColors() {
  const ballColors = createRGBColor(6);
  const rightColor = Math.floor(Math.random() * 6);
  ballColors[rightColor] = gessColor.innerHTML;
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < ballColors.length; index += 1) {
    balls[index].style.backgroundColor = ballColors[index];
  }
}
insertColors();

const answer = document.getElementById('answer');
colorContainer.addEventListener('click', (event) => {
  if (event.target.style.backgroundColor === gessColor.innerHTML) {
    answer.innerHTML = 'Acertou!';
    const score = document.getElementById('score');
    const points = parseInt(score.innerHTML, 10) + 3;
    score.innerHTML = points;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
});

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', () => {
  generateNewChallenge();
  insertColors();
  answer.innerHTML = 'Escolha uma cor';
});
