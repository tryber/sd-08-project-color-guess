const options = document.getElementById('options');
const numberOpts = 6;

for (let index = 0; index < numberOpts; index += 1) {
  const circ = document.createElement('div');
  circ.className = 'ball';
  options.appendChild(circ);
}

const circles = document.getElementsByClassName('ball');

function colorCircles() {
  for (let index = 0; index < circles.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    circles[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
colorCircles();

const quest = document.getElementById('rgb-color');
let rightColor = Math.floor(Math.random() * circles.length);
quest.innerText = circles[rightColor].style.backgroundColor.slice(3);

const answer = document.getElementById('answer');
answer.innerText = 'Escolha uma cor';
function tryColor() {
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].addEventListener('click', function () {
      if (index == rightColor) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
tryColor();

const resetBtn = document.getElementById('reset-game');
function reset() {
  colorCircles();
  rightColor = Math.floor(Math.random() * circles.length);
  quest.innerText = circles[rightColor].style.backgroundColor.slice(3);
  tryColor();
  answer.innerText = 'Escolha uma cor';
}
resetBtn.addEventListener('click', reset);
