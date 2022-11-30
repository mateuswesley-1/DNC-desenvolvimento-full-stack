const randomNumber = Math.round(Math.random()*10)
let numTentativas = 0

function sortear(){
    const userNumber = document.querySelector('#inum')
    numTentativas +=1

    // adiciona a classe hide a caixa que recebe o número e
    if(userNumber.value == randomNumber){
        document.querySelector('.tela1').classList.add('hide')
        document.querySelector('.tela2').classList.remove('hide')
        document.querySelector('#textoFim').innerText = `Você acertou em ${numTentativas} tentativas`

    }else{
        document.querySelector('p#tentativas').innerHTML = `Tentativas: ${numTentativas}`
    }

}

function jogarNovamente(){

}
