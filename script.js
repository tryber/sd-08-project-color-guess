const divBall = document.getElementsByClassName('ball');

function randomNumber() {
	const numberRandom = Math.floor(Math.random() * 256);
	return numberRandom;
}

function randomColor() {
	const rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
	return rgb;
}

for (let ball = 0; ball < divBall.length; ball += 1) {
	divBall[ball].style.backgroundColor = randomColor();
}
