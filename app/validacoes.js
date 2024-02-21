function verificaValorValido(chute) {
    const numero = +chute;
    
    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2>GAME OVER</h2>
                <h3>Obrigada por jogar!</h3>
                <buttom id="jogar-novamente" class="btn-jogar">Jogar novamente</buttom>
            `;        
        } else {
            elementoChute.innerHTML += `<div>Valor inválido</div>`;
        }
        return;
    }

    if (numeroForaDoIntervalo(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!!</h2>
            <h3> O número secreto era ${numeroAleatorio}</h3>
            <buttom id="jogar-novamente" class="btn-jogar">Jogar novamente</buttom>
        `;
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoIntervalo(numero){
    return (numero > maiorValor) || (numero < menorValor);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
