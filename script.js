const balls = document.getElementsByClassName('ball');
const textColor = document.getElementById('rgb-color');
const textAnswer = document.getElementById('answer');
const buttonReset = document.getElementById('reset-game')
const colors = [];

function randomNumber() {
    const number = Math.floor(Math.random() *256);
    return number;
};

function randomColor() {
    const rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return rgb;
}

function clickBall(event) {
    const selectedColor = event.target.style.backgroundColor;
    if (selectedColor == textColor.textContent) {
        textAnswer.textContent = 'Acertou!';
    } else {
        textAnswer.textContent = 'Errou! Tente novamente!';
    }
}

for (let ball = 0; balls.length; ball += 1) {
    const color = randomColor();
    balls[ball].style.backgroundColor = color;
    colors[ball] = color;
    balls[ball].addEventListener('click', clickBall);
};

function namedRandomColor() {
    textColor.textContent = colors[randomColor(6)];
}

namedRandomColor();

function resetGame() {
    window.location.reload();
}

buttonReset.addEventListener('click', resetGame);