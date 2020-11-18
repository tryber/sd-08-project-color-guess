window.onload = startFunctions;

function startFunctions(){
    ballSetup();
    guessColorText();
    restartButtonListener();
    ballsListener();
}

function guessColorText(){
    let rgbText = document.querySelector('#rgb-color');
    let balls = document.querySelectorAll('.ball');
    let randomBall = balls[Math.round(Math.random()*5)];
    rgbText.innerHTML = removeRgbText(randomBall);
}

function ballSetup(){
    let balls = document.querySelectorAll('.ball');    
    for(let index = 0; index < balls.length; index += 1){
        let newRgb = generateRandomRgb();
        balls[index].style.backgroundColor = "rgb" + newRgb;
    }
}

function ballsListener() {
    let balls = document.querySelectorAll('.ball');    
        for(let index = 0; index < balls.length; index += 1){
        balls[index].addEventListener('click', function(event){
            setAnswerText(event.target);
        })
    }
}

function setAnswerText(ballColor){
    let rightColor = document.querySelector('#rgb-color').innerHTML;
    let userAnswer = removeRgbText(ballColor);
    let answerText = document.querySelector('#answer');
    if(rightColor == userAnswer){
        let score = document.querySelector('#score')
        score.innerHTML = parseInt(score.innerHTML) + 3;
        answerText.innerHTML = "Acertou!";
    }else{
        answerText.innerHTML = "Errou! Tente novamente!";
    }
}

function restartButtonListener(){
    let restartButton = document.querySelector('#reset-game');
    restartButton.addEventListener('click', function(){
        let answerText = document.querySelector('#answer');
        answerText.innerHTML = "Escolha uma cor";
        ballSetup();
        guessColorText();
    })
}

function generateRandomRgb() {
    let r, g, b;    
    r = randomNumberForRgb();
    g = randomNumberForRgb();
    b = randomNumberForRgb();
    return `(${r}, ${g}, ${b})`;
}

function randomNumberForRgb() {
    return Math.round(Math.random()*255);
}

function removeRgbText(element){
    return element.style.backgroundColor.replace('rgb','');
}