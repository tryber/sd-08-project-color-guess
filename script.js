window.onload = function() {
    let pergunta = document.getElementById('rgb-color');
    
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
    pergunta.innerHTML = gera3Aleatorios255();

    let listaDeBolas = document.querySelectorAll('.ball');
    for (var i = 0; i < 6; i += 1) {
        listaDeBolas[i].style.backgroundColor = 'rgb' + (String(gera3Aleatorios255()));
    }
}

