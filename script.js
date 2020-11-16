function generateColor() {
  return `(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
}

function defineColors(colorAmount) {
  const colors = [];
  for (let counter = 0; counter < colorAmount; counter += 1) {
    colors.push(generateColor());
  }

  return colors;
}

function defineCorrect(colorArray) {
  const position = Math.floor(Math.random() * (colorArray.length - 0.001));

  return colorArray[position];
}

function handleScoreBoard(isCorrect) {
  const scoreElement = document.getElementById('score');
  const score = scoreElement.innerText;

  if (isCorrect) {
    scoreElement.innerText = parseInt(score, 10) + 3;
  } else if (score !== 0) {
    scoreElement.innerText = parseInt(score, 10) - 1;
  }
}

function checkCorrectColor(event) {
  const correct = document.getElementById('rgb-color').innerText;
  const answer = document.getElementById('answer');

  if (`rgb${correct}` === event.target.style.backgroundColor) {
    answer.innerText = 'Acertou!';
    handleScoreBoard(true);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    handleScoreBoard(false);
  }
}

function generateGuessRound() {
  const numOfColors = 6;
  const colors = defineColors(numOfColors);
  const correct = defineCorrect(colors);
  const colorsElement = document.getElementById('color-container');
  colorsElement.innerHTML = '';
  const answerText = document.getElementById('answer');
  answerText.innerText = 'Escolha uma cor';
  const toGuess = document.getElementById('rgb-color');
  toGuess.innerText = correct;

  for (let index = 0; index < colors.length; index += 1) {
    const color = document.createElement('div');
    color.classList.add('ball');
    color.style.backgroundColor = `rgb${colors[index]}`;
    color.addEventListener('click', checkCorrectColor);
    colorsElement.appendChild(color);
  }
}

window.onload = () => {
  const resetBtn = document.getElementById('reset-game');
  resetBtn.addEventListener('click', generateGuessRound);
  generateGuessRound();
};
