const divBall = document.getElementsByClassName('ball');
const textColor = document.getElementById('rgb-color');
const colors = [];

function randomNumber() {
  const numberRandom = Math.floor(Math.random() * 256);
  return numberRandom;
}

function randomColor() {
  const rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  return rgb;
}

for (let ball = 0; ball < divBall.length; ball += 1) {
	const color = randomColor()
	divBall[ball].style.backgroundColor = color;
	colors[ball] = color;
}

function addRandomColor() {
	
}
