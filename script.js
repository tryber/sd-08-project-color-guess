const color = document.getElementById('rgb-color');
const container = document.querySelector('.circles-container');
const circles = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const circlesColors = [];
let colorCode;

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `(${red}, ${green}, ${blue})`;
};

const generateCircles = () => {
  for (let i = 0; i < 6; i += 1) {
    const circles = document.createElement('div');
    circles.className = 'ball';

    container.appendChild(circles);
  }
};

generateCircles();

const randomCircleColor = () => {
  const circle = document.querySelectorAll('.ball');

  for (let i = 0; i < circle.length; i += 1) {
    const color = (circle[i].style.backgroundColor = `rgb${generateRandomColor()}`);
    circlesColors.push(color);
  }

  return color;
};

randomCircleColor();

const randomRGBCode = () => {
  colorCode = circlesColors[Math.floor(Math.random() * circlesColors.length)];
  color.innerText = colorCode.replace('rgb', '');
};

randomRGBCode();

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    if (
      event.target.style.backgroundColor.replace('rgb', '') !== color.innerText
    ) {
      answer.innerHTML = 'Errou! Tente novamente!';
    } else {
      answer.innerHTML = 'Acertou!';
    }
  }
});

resetButton.addEventListener('click', () => {
  location.reload();
});
