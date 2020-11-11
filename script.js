let rgb_color_p = document.querySelector('#rgb-color');
let randomPos;
let reset_game_btn = document.querySelector('#reset-game');
let score_spn = document.querySelector('#score');
resetGame();

reset_game_btn.addEventListener('click', resetGame);

function randomColor() { // Gera uma cor aleatória
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `(${r}, ${g}, ${b})`;
}

function randomPallete() { // Gera uma paleta randomica de cores
    let balls = document.querySelectorAll('.ball');
    for (index of balls) {
        index.style.backgroundColor = `rgb${randomColor()}`;
        index.addEventListener('click', selectBall);
        index.style.border = '1px solid #000';
    }

    balls[randomPos].style.backgroundColor = `rgb${rgb_color_p.innerText}`;
}

function selectBall(event) { // Quando clicado em uma opção de cor
    let balls = document.querySelectorAll('.ball');
    for (index of balls) {
        index.removeEventListener('click', selectBall);
    }

    let answer = document.querySelector('#answer');
    if (event.target.style.backgroundColor == `rgb${rgb_color_p.innerText}`) {
        answer.innerText = "Acertou!";
        score_spn.innerText = parseInt(score_spn.innerText) + 3;
    }
    else { answer.innerText = "Errou! Tente novamente!"; }

    event.target.style.border = '2px solid red';
}

function resetGame() { // Reseta o jogo
    rgb_color_p.innerText = randomColor();
    randomPos = parseInt(Math.random() * 6);
    let answer = document.querySelector('#answer');
    answer.innerText = 'Escolha uma cor';
    randomPallete();
}