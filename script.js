window.onload = function() {
    let pergunta = document.getElementById('rgb-color');
    let pontuacao = 0
    
    function gera3Aleatorios255() {
        let saida = '(';
        for (var i = 1; i <= 3; i += 1) {
            let aleatorio = Math.ceil(Math.random() * 255);
            if ( i < 3) {
                saida += aleatorio + ', ' 
            } else {
                saida += aleatorio + ')'
            }
        }
        return saida;
    }
    let corPergunta = gera3Aleatorios255();
    pergunta.innerHTML = corPergunta;

    let listaDeBolas = document.querySelectorAll('.ball');
    function geraBolasColoridas() {
        let escolhida = Math.floor(Math.random() * 6);
        console.log(escolhida);
        for (let i = 0; i < 6; i += 1) {
            if (i == escolhida) {
                listaDeBolas[i].style.backgroundColor = 'rgb' + corPergunta;
                listaDeBolas[i].id = 'resposta'
            } else {
                listaDeBolas[i].style.backgroundColor = 'rgb' + (String(gera3Aleatorios255()));
            }   
        }
    }
    geraBolasColoridas()

    let resp = document.querySelector('#answer')
    let bolaClicada = document.querySelector('#resposta')
    addEventListener('click', function (event) {
        let clicada = event.target;
        if (clicada.id == 'resposta') {
            pontuacao += 1;
            resp.innerHTML = pontuacao;
            alert('Acertou!')
        } else {
            alert('Errou! Tente novamente!')
        }
    })
}

