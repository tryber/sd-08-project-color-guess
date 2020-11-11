window.onload = function () {
  gerarBolas();
  var podeMarcar = true;
  document.querySelector("#reset-game").addEventListener("click", gerarBolas);
};

function gerarBolas() {
  let ballsDiv = document.querySelector(".ballsDiv");
  let resposta = document.querySelector("#answer");
  let textoCor = document.querySelector("#rgb-color");
  textoCor.innerHTML = "Que cor eh essa?";
  resposta.innerHTML = "Escolha uma cor";
  ballsDiv.innerHTML = "";
  podeMarcar = true;

  let escolha = Math.floor(Math.random() * 6);

  for (let i = 0; i < 6; i++) {
    let colorBall = document.createElement("div");
    colorBall.classList.add("ball");
    let corDaVez = gerarCorAleatoria();

    if (i === escolha) {
      var corCerta = corDaVez;
      mudarTexto(corDaVez);
    }

    colorBall.addEventListener("click", (evt) => {
      checaSeAcertou(evt.target.style.backgroundColor, corCerta);
    });

    colorBall.style.backgroundColor = corDaVez;
    ballsDiv.appendChild(colorBall);
  }
}

function checaSeAcertou(corClicada, corCerta) {
  let resposta = document.querySelector("#answer");
  if (corClicada == corCerta) {
    resposta.innerHTML = "Acertou!";
    incScore();
  } else {
    decScore();
    resposta.innerHTML = "Errou! Tente novamente!";
  }
}

function mudarTexto(stringCor) {
  let textoCor = document.querySelector("#rgb-color");
  textoCor.innerHTML += stringCor.slice(3);
}

function gerarCorAleatoria() {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  return "rgb(" + c1 + ", " + c2 + ", " + c3 + ")";
}

function incScore() {
  let score = document.querySelector("#score");
  let scoreNumber = parseInt(score.innerHTML);
  if (podeMarcar) {
    scoreNumber += 3;
  }
  podeMarcar = false;
  score.innerHTML = scoreNumber;
}

function decScore() {
  let score = document.querySelector("#score");
  let scoreNumber = parseInt(score.innerHTML);
  scoreNumber -= 1;
  score.innerHTML = scoreNumber;
}
