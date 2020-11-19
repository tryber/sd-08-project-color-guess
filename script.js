const color = document.getElementById('rgb-color');
const container = document.querySelector('.circles-container');
const circles = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const circlesColors = [];

const generateRandomColor = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

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
  const colorCode = circlesColors[Math.round(Math.random() * circlesColors.length)];
  color.innerText = colorCode.replace('rgb', '');
};

randomRGBCode();

container.addEventListener('click', (event) => {
  console.log(event.target.style.backgroundColor.replace('rgb', ''));
  console.log(color.innerText);
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
