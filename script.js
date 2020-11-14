let corComparar = "";
const corCompararLocal = document.querySelector('#rgb-color');
const placarLocal = document.getElementById('score');

function sorteio() {
    let numCor = Math.round(Math.random()*256);
    return numCor;
}

function corCompare() {
    corComparar = "(" + sorteio()+", " + sorteio() + ", " + sorteio() + ")";
    corCompararLocal.innerText = corComparar;
    return corComparar;
}

corCompare();

function opcoes() {
    let sorteioBall = Math.round(Math.random()*6);
    let corBall = "";
    for (let index = 0; index < 6; index += 1){  
        let novaDiv = document.createElement('div');
        let divLocal = document.getElementById('ball-container');
        novaDiv.className = 'ball';
        if (index == sorteioBall){
            corBall = "rgb"+corComparar;   
        }
        else {
            corBall = "rgb"+ "(" + sorteio()+", " + sorteio() + ", " + sorteio() + ")";   
        }
        novaDiv.style.backgroundColor = corBall;
        divLocal.appendChild(novaDiv);
    }
}
opcoes();

const ballsLocal = document.querySelector('.ball');
let ballPai = document.querySelector('#ball-container');
let corUsuario = "";

function corEscolhida() {
    corUsuario = event.target.style.backgroundColor;
    textoEPlacar()
    return corUsuario;
    
}
ballPai.addEventListener('click', corEscolhida);

const divText = document.querySelector('#answer');
divText.innerText ='Escolha uma cor';

let num = 0;
let cont = "placar: " + num;
placarLocal.innerHTML = cont;

function textoEPlacar(){    
    if (corUsuario == ("rgb"+corComparar)){
        divText.innerText = 'Acertou!';
        num += 3; 
    } else {
        divText.innerText = 'Errou! Tente novamente!';
    }
    cont = "placar: " + num;
    placarLocal.innerHTML = cont;
}

function reiniciar() {
    corCompare();
    divText.innerText ='Escolha uma cor';
    for (let index = 0; index < 6; index += 1) {
        let balls = document.querySelector('.ball');
        ballPai.removeChild(balls);
    }
    opcoes();
}





