window.onload = function () {
  gerarBolas();
  document.querySelector("#reset-game").addEventListener("click", gerarBolas);
};

function gerarBolas() {
  let ballsDiv = document.querySelector(".ballsDiv");
  let resposta = document.querySelector("#answer");
  resposta.innerHTML = "Escolha uma cor";
  ballsDiv.innerHTML = "";

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
    resposta.innerHTML = "Errou! Tente novamente!";
  }
}

function mudarTexto(stringCor) {
  let textoCor = document.querySelector("#rgb-color");
  textoCor.innerHTML = stringCor.slice(3);
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
  scoreNumber += 3;
  score.innerHTML = scoreNumber;
}
