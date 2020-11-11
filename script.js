
function ramdomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return ('(' + r + ',' + g + ',' + b + ')');
}

const divContainer = document.getElementById('ball-container');

function createDivs() {
  for (let i = 0; i < 6; i += 1) {
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divBall.style.backgroundColor = 'rgb' + ramdomColor();
    divContainer.appendChild(divBall);
  }
}
createDivs();

let correctColorIndex = 0;

function getCorrectColor() {
  const divColors = document.querySelectorAll('.ball');
  let colorIndex = Math.round(Math.random() * 6);
  if (colorIndex < 0) {
    colorIndex = 0;
  } else if (colorIndex >= 6) {
    colorIndex = 5;
  }
  
  const correctColorName = divColors[colorIndex].style.backgroundColor;
  const spanColor = document.getElementById('rgb-color');
  spanColor.innerHTML = correctColorName.replace('rgb', '');
  correctColorIndex = colorIndex;
}
getCorrectColor();

const spanAnswer = document.getElementById('answer');
const placar = document.getElementById('score');
let count = 0;
placar.innerHTML = 'Placar: ' + count;

divContainer.addEventListener('click', function (event) {
  const divColors = document.querySelectorAll('.ball');
  const eventStyle = event.target.style.backgroundColor;
  const correctRgb = divColors[correctColorIndex].style.backgroundColor;

  if (eventStyle == correctRgb) {
    spanAnswer.innerHTML = 'Acertou!'
    count += 3;
    placar.innerHTML = 'Placar: ' + count;
  } else {
    spanAnswer.innerHTML = "Errou! Tente novamente!"
  }
});

const resetBtn = document.getElementById('reset-game');

resetBtn.addEventListener('click', function () {
  const myNode = document.getElementById('ball-container');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  createDivs();
  getCorrectColor();
});
