window.onload = function () {
  gerarBolas();
};

function gerarBolas() {
  let ballsDiv = document.querySelector(".ballsDiv");

  let escolha = Math.floor(Math.random() * 6);

  for (let i = 0; i < 6; i++) {
    let colorBall = document.createElement("div");
    colorBall.classList.add("ball");
    let corDaVez = gerarCorAleatoria();
    colorBall.style.backgroundColor = corDaVez;
    ballsDiv.appendChild(colorBall);
    if (i === escolha) {
      mudarTexto(corDaVez);
    }
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
