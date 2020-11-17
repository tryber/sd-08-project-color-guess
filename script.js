const getColorSelected = document.getElementById('rgb-color');
const getResetGame = document.getElementById('reset-game');
const setMessageGame = document.getElementById('answer');
const setScoreGame = document.getElementById('score');
let score = 0;
let arrColor = [];
let colorSelected = '';

const checked = (colorClick, colorSelect) => {
  const colorCurrent = colorClick.replace('rgb', '');
  if (colorCurrent === colorSelect) {
    score += 3;
    setScoreGame.innerText = score;
    return (setMessageGame.innerText = 'Acertou!');
  }
  return (setMessageGame.innerText = 'Errou! Tente novamente!');
};
const eventClickCircle = () => {
  document.querySelectorAll('.ball').forEach((element) => {
    element.addEventListener('click', (event) => {
      const colorClick = event.target.style.backgroundColor;
      checked(colorClick, colorSelected);
    });
  });
};

const createColorRandom = () => {
  for (let index = 0; index < 6; index += 1) {
    const getColorRandom1 = Math.ceil(Math.random() * 255);
    const getColorRandom2 = Math.ceil(Math.random() * 255);
    const getColorRandom3 = Math.ceil(Math.random() * 255);
    arrColor.push(`(${getColorRandom1}, ${getColorRandom2}, ${getColorRandom3})`);
  }
  colorSelected = arrColor[Math.ceil(Math.random() * arrColor.length) - 1];
};
const paintElementCicleColor = () => {
  document.querySelectorAll('.ball').forEach((element, index) => {
    element.style.backgroundColor = `rgb${arrColor[index]}`;
  });
  eventClickCircle();
};
const setSelected = () => {
  getColorSelected.innerText = `${colorSelected}`;
};

const resetGame = () => {
  arrColor = [];
  colorSelected = '';
  setMessageGame.innerText = '"Escolha uma cor';
  createColorRandom();
  paintElementCicleColor();
  setSelected();
};

window.onload = function () {
  createColorRandom();
  paintElementCicleColor();
  setSelected();
  getResetGame.addEventListener('click', resetGame);
};
