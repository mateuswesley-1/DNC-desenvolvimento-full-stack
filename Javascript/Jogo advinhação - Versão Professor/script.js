const randomNumber = Math.round(Math.random()*10)
const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')
const feedback = document.querySelector('p#tentativas')
let numTentativas = 0

function sortear(){
    const userNumber = document.querySelector('#inum')
    numTentativas +=1

    // adiciona a classe hide a caixa que recebe o número e
    if(userNumber.value == randomNumber){
        tela1.classList.add('hide')
        tela2.classList.remove('hide')
        document.querySelector('#textoFim').innerText = `Você acertou em ${numTentativas} tentativas`

    }else{
        feedback.innerText = `Tentativas: ${numTentativas}`
    }

}

/* Events */

btn1 = document.querySelector('input#btnTry')

btn1.addEventListener('click', sortear)


btn2 = document.querySelector('input#btnAgain')

btn2.addEventListener('click', function(){
    numTentativas = 0
    tela1.classList.remove('hide')
    tela2.classList.add('hide')
    feedback.innerText = `Tentativas: ${numTentativas}`
})
