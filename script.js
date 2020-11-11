
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
const divColors = document.querySelectorAll('.ball');

function getCorrectColor() {
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

divContainer.addEventListener('click', function (event) {
  const eventStyle = event.target.style.backgroundColor;
  const correctRgb = divColors[correctColorIndex].style.backgroundColor;

  if (eventStyle == correctRgb) {
    spanAnswer.innerHTML = 'Acertou!'
  } else {
    spanAnswer.innerHTML = "Errou! Tente novamente!"
  }
});

