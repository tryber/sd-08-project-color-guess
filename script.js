function generateColorRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red} , ${green} , ${blue})`;
}
function createBallElements(numberOfBalls) {
  const sectionBalls = document.getElementById('color-control');
  for (let indexBall = 1; indexBall <= numberOfBalls; indexBall += 1) {
    const divBall = document.createElement('div');
    divBall.classList.add('ball');
    divBall.style.backgroundColor = generateColorRGB();
    sectionBalls.appendChild(divBall);
  }
}
window.onload = function () {
  createBallElements(6);
};
