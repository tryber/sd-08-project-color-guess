const rgbList = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 128, 0)', 'rgb(128, 255, 0)', 'rgb(0, 255, 128)', 'rgb(0, 128, 255)', 'rgb(128, 0, 255)', 'rgb(255, 0, 128)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(128, 128, 128)', 'rgb(64, 32, 32)', 'rgb(0, 0, 128)', 'rgb(128, 0, 0)', 'rgb(0, 128, 0)'];

const getIndexColors = (num) => {
  const numList = [];
  while (numList.length < num) {
    const indexColor = Math.ceil((Math.random() * (rgbList.length))) - 1;
    if (!numList.includes(indexColor)) {
      numList.push(indexColor);
    }
  }
  return numList;
};

const getColors = (num) => {
  const indexList = getIndexColors(num);
  const rgbSelectedList = [];
  indexList.forEach((index) => {
    rgbSelectedList.push(rgbList[index]);
  });
  return rgbSelectedList;
};

const compare = (codeRgb) => {
  let totalScore = parseInt(sessionStorage.getItem('score'), 10);
  if (codeRgb === document.getElementById('rgb-color').innerText) {
    document.getElementById('answer').innerText = 'Acertou!';
    totalScore += 3;
    sessionStorage.setItem('score', totalScore);
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
    totalScore -= 1;
    sessionStorage.setItem('score', totalScore);
  }
  document.getElementById('score').innerText = totalScore;
};


const choice = (evt) => compare(evt.target.style.backgroundColor);

const challenge = (num, colorsList) => {
  const indexRgbColor = Math.ceil((Math.random() * (num))) - 1;
  const rgbColor = colorsList[indexRgbColor];
  document.getElementById('rgb-color').innerText = rgbColor;
};

const colorsBtnGeneretor = (num) => {
  const colorsList = getColors(num);
  challenge(num, colorsList);
  for (let index = 0; index < colorsList.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = colorsList[index];
    colorDiv.className = 'ball';
    const colorBtn = colorDiv;
    colorBtn.addEventListener('click', choice);
    document.getElementById('colors-list').appendChild(colorDiv);
  }
};

const newGameBtn = document.getElementById('new-game');
const newColorsBtn = document.getElementById('reset-game');
const easyBtn = document.getElementById('easy');
const normalBtn = document.getElementById('normal');
const hardBtn = document.getElementById('hard');

const numBalls = () => {
  switch (document.querySelector(':checked').value) {
    case 'easy':
      colorsBtnGeneretor(4);
      break;
    case 'normal':
      colorsBtnGeneretor(6);
      break;
    case 'hard':
      colorsBtnGeneretor(8);
      break;
    default:
      alert('Erro grave!');
      break;
  }
};

const refreshColors = () => {
  document.getElementById('answer').innerText = 'Escolha uma cor';
  const ballsList = document.getElementsByClassName('ball');
  for (let index = ballsList.length - 1; index >= 0; index -= 1) {
    ballsList[index].outerHTML = '';
  }
  numBalls();
};

const resetGame = () => {
  sessionStorage.setItem('score', 0);
  document.getElementById('score').innerText = 0;
  refreshColors();
};

newColorsBtn.addEventListener('click', refreshColors);
easyBtn.addEventListener('click', refreshColors);
normalBtn.addEventListener('click', refreshColors);
hardBtn.addEventListener('click', refreshColors);
newGameBtn.addEventListener('click', resetGame);

window.onload = () => {
  numBalls();
  document.getElementById('answer').innerText = 'Escolha uma cor';
  document.querySelector('#score').innerText = 0;
  sessionStorage.setItem('score', 0);
};
