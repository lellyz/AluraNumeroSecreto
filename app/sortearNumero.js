const menorValor = 1;
const maiorValor = 100;
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
const numeroAleatorio = gerarNumeroAleatorio();
let chute = null;

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return(parseInt(Math.random() * maiorValor + 1));    
}

console.log(numeroAleatorio);