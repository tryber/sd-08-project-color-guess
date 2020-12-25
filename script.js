const selectColors = document.querySelectorAll('.ball');
const rbgColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');

const randomColor = () => {
  const generateColor = Math.floor(Math.random() * 255);
  return generateColor;
};

const getRefColor = () => {
  const getRandomColor = Math.floor(Math.random() * selectColors.length);
  const refColor = selectColors[getRandomColor].style.backgroundColor;
  rbgColor.innerHTML = refColor.slice(3, 18);
};

selectColors.forEach((ball) => {
  ball.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    if (!selectedColor) {
      event.target.classList.add('selected');
    } else {
      selectedColor.classList.remove('selected');
      event.target.classList.add('selected');
    }
    checkColor(event.target);
  });
});

const checkColor = (element) => {
  if (element.style.backgroundColor === `rgb${rbgColor.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
    const score = document.getElementById('score');
    const points = parseInt(score.innerHTML, 10) + 3;
    score.innerHTML = points;
  }
};

const generateColorAndEvents = () => {
  selectColors.forEach((ball) => {
    const redColor = randomColor();
    const greenColor = randomColor();
    const blueColor = randomColor();
    ball.style.backgroundColor = `rgb( ${redColor}, ${greenColor}, ${blueColor} )`;
  });
  getRefColor();
};

const startGame = () => {
  answer.innerHTML = 'Escolha uma cor';
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  generateColorAndEvents();
};

resetBtn.addEventListener('click', startGame);

window.onload = startGame();
