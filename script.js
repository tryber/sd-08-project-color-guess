let corSecreta = document.getElementById("rgb-color");
let coresContainer = document.getElementById("balls-container");
let cores = document.getElementsByClassName("ball");
let resposta = document.getElementById("answer");
let score = document.getElementById("score");
let tentativa = 0;

window.onload = function (){
    sessionStorage.setItem("placar","0");
    score.innerText = sessionStorage.getItem("placar");
    for (let index=0; index<6; index+=1){
        let ball = document.createElement("div");
        ball.className = "ball";
        geraCor(ball);
        coresContainer.appendChild(ball);
    }
    let secret = Math.random() * 6;
    secret = Math.ceil(secret);
    corSecreta.innerText = cores[secret-1].style.backgroundColor;
    corSecreta.innerText = corSecreta.innerText.replace("rgb","");
    resposta.innerText = "Escolha uma cor";
}

function geraCor(element) {
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    element.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function selecionaCor (event) {
    if (tentativa === 0) {
        tentativa = 1;
        if (event.target !== coresContainer) {
            for (index=0; index<cores.length; index+=1){
                cores[index].classList.remove("selected");
            }
            event.target.classList.add ("selected");
        }
    }
}
coresContainer.addEventListener("click",selecionaCor);
function verificaAcerto () {
    let corSelecionada = document.querySelector(".selected");
    if (corSelecionada) {
        if(corSelecionada.style.backgroundColor === "rgb" + corSecreta.innerText){
            resposta.innerText = "Acertou!";
            let placar = sessionStorage.getItem("placar");
            placar = parseInt(placar) + 1;
            sessionStorage.setItem("placar",placar);
            score.innerText = sessionStorage.getItem("placar");
        } else {
            resposta.innerText = "Errou! Tente novamente!";
        }
    }
}
coresContainer.addEventListener("click",verificaAcerto);

function reinicializaJogo () {
    tentativa = 0;
    while (coresContainer.firstChild){
        coresContainer.removeChild(coresContainer.firstChild);
    }
    for (let index=0; index<6; index+=1){
        let ball = document.createElement("div");
        ball.className = "ball";
        geraCor(ball);
        coresContainer.appendChild(ball);
    }
    for (index=0; index<cores.length; index+=1){
        cores[index].classList.remove("selected");
    }
    let secret = Math.random() * 6;
    secret = Math.ceil(secret);
    corSecreta.innerText = cores[secret-1].style.backgroundColor;
    corSecreta.innerText = corSecreta.innerText.replace("rgb","");
    resposta.innerText = "Escolha uma cor";
}
document.getElementById("reset-game").addEventListener("click",reinicializaJogo);