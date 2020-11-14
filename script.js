let corComparar = '';
const corCompararLocal = document.querySelector('#rgb-color');
const placarLocal = document.getElementById('score');

function sorteio() {
  const numCor = Math.round(Math.random() * 256);
  return numCor;
}

function corCompare() {
  corComparar = '(' + sorteio() + ', ' + sorteio() + ', ' + sorteio() + ')';
  corCompararLocal.innerText = corComparar;
  return corComparar;
}

corCompare();

function opcoes() {
  const sorteioBall = Math.round(Math.random() * 6);
  let corBall = '';
  for (let index = 0; index < 6; index += 1) {
    const novaDiv = document.createElement('div');
    const divLocal = document.getElementById('ball-container');
    novaDiv.className = 'ball';
    if (index === sorteioBall) {
      corBall = 'rgb' + corComparar;
    }
    else {
      corBall = 'rgb'+ '(' + sorteio() + ', ' + sorteio() + ', ' + sorteio() + ')';
    }
      novaDiv.style.backgroundColor = corBall;
      divLocal.appendChild(novaDiv);
  }
}
opcoes();

const ballPai = document.querySelector('#ball-container');
let corUsuario = '';

const divText = document.querySelector('#answer');
divText.innerText = 'Escolha uma cor';

let num = 0;
let cont = 'placar: ' + num;
placarLocal.innerHTML = cont;

function textoEPlacar() {
  if (corUsuario === ('rgb'+corComparar)){
    divText.innerText = 'Acertou!';
    num += 3;
  } else {
    divText.innerText = 'Errou! Tente novamente!';
  }
  cont = 'placar: ' + num;
  placarLocal.innerHTML = cont;
}

function corEscolhida() {
    corUsuario = event.target.style.backgroundColor;
    textoEPlacar();
    return corUsuario;
}
ballPai.addEventListener('click', corEscolhida);

function reiniciar() {
  corCompare();
  divText.innerText ='Escolha uma cor';
  for (let index = 0; index < 6; index += 1) {
    const balls = document.querySelector('.ball');
    ballPai.removeChild(balls);
  }
  opcoes();
}
