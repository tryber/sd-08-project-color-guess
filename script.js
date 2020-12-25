const selectColors = document.querySelectorAll('.ball');
const rbgColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');

const randomColor = () => {
  const generateColor = Math.floor(Math.random() * 255);
  return generateColor;
};

const getRefColor = () => {
  const getRandomColor = Math.floor(Math.random() * selectColors.length);
  const refColor = selectColors[getRandomColor].style.backgroundColor;
  rbgColor.innerHTML = refColor.slice(3, 18);
};

const checkColor = (element) => {
  console.log(rbgColor.innerHTML);
  if (element.style.backgroundColor === `rgb${rbgColor.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = Number(score.innerHTML) + 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
};

const generateColorAndEvents = () => {
  selectColors.forEach((ball) => {
    const redColor = randomColor();
    const greenColor = randomColor();
    const blueColor = randomColor();
    ball.style.backgroundColor = `rgb( ${redColor}, ${greenColor}, ${blueColor} )`;

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
