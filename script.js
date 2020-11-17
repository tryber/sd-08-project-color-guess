const getColorSelected = document.getElementById('rgb-color');
const getOptionColor = document.getElementById('option-color');
const getResetGame = document.getElementById('reset-game');
const setMessageGame = document.getElementById('answer');
const setScoreGame = document.getElementById('score');
let score = 0;
let arrColor = [];
let colorSelected = '';

const createColorRandom = () => {
  for (let index = 0; index < 6; index += 1) {
    const getColorRandom1 = Math.ceil(Math.random() * 255);
    const getColorRandom2 = Math.ceil(Math.random() * 255);
    const getColorRandom3 = Math.ceil(Math.random() * 255);
    arrColor.push(
      `(${getColorRandom1}, ${getColorRandom2}, ${getColorRandom3})`
    );
  }
  colorSelected = arrColor[Math.ceil(Math.random() * arrColor.length) - 1];
};
const createElementHTML = () => {
  for (let index = 0; index < 6; index += 1) {
    getOptionColor.innerHTML += `<div class="ball" style="background-color: rgb${arrColor[index]}"></div>`;
  }
};
const removeElementHTMLAll = () => {
  document.querySelectorAll('.ball').forEach((element) => element.remove());
  arrColor = [];
  colorSelected = '';
  setMessageGame.innerText = '"Escolha uma cor';
};
const setSelected = () => {
  getColorSelected.innerText = `${colorSelected}`;
};
const checked = (colorClick, colorSelected) => {
  const colorCurrent = colorClick.replace('rgb', '');
  console.log(colorSelected);
  if (colorCurrent === colorSelected) {
    score += 3;
    setScoreGame.innerText = score;
    return (setMessageGame.innerText = 'Acertou!');
  }
  // score -= 1;
  setMessageGame.innerText = 'Errou! Tente novamente!';
};
const eventClickCircle = () => {
  document.querySelectorAll('.ball').forEach((element) => {
    element.addEventListener('click', (event) => {
      let colorClick = event.target.style.backgroundColor;
      checked(colorClick, colorSelected);
    });
  });
};

getResetGame.addEventListener('click', () => {
  removeElementHTMLAll();
  createColorRandom();
  createElementHTML();
  setSelected();
  eventClickCircle();
});
