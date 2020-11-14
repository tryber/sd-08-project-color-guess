const balls = document.getElementsByClassName('ball');

function randomNumber() {
    const number = Math.floor(Math.random() *256);
    return number;
};

function randomColor() {
    const rgb = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return rgb;
}

for(let ball = 0; balls.length; ball ++) {
    balls[ball].style.backgroundColor = randomColor();
};