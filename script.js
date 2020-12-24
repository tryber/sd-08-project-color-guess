const selectColors = document.querySelectorAll('.ball');
const rbgColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');

const randomColor = () => {
  const generateColor = Math.floor(Math.random() * 255);
  return generateColor;
};

selectColors.forEach((ball) => {
  const redColor = randomColor();
  const greenColor = randomColor();
  const blueColor = randomColor();
  ball.style.backgroundColor = `rgb( ${redColor}, ${greenColor}, ${blueColor} )`;

  ball.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === refColor) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
});

const getRandomColor = Math.floor(Math.random() * selectColors.length);
const refColor = selectColors[getRandomColor].style.backgroundColor;
rbgColor.innerHTML = refColor.slice(3, 18);
