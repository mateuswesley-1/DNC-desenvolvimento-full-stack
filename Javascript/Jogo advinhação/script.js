// sortear um valor entre 0 e 9
// verificar se é igual ao valor escolhido
// se for igual, finaliza o jogo
// senão, continua, contando cada erro para exibir no final
let num_random = Math.floor(Math.random()*10)
let num_tentativas = 0

const num_user = document.querySelector('input#inum')
const mensagem = document.querySelector('h2#textoFim')
const alerta = document.querySelector('p#mensagem')
const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')
const feedback = document.querySelector('p#tentativas')

function sortear(event){
    // nao enviar formulario quando apertamos enter
    event.preventDefault()
    num_tentativas += 1
    if(num_user.value > 9 || num_user.value < 0 ){

        alerta.style.color = 'red'

    }else{

        alerta.style.color = 'black'

        if(num_random == num_user.value){
            tela1.classList.add('hide')
            tela2.classList.remove('hide')

            mensagem.innerText = `Você acertou em ${num_tentativas} tentativas!`

        }else{

            num_user.style.border = '2px solid red'
            feedback.innerText = `Tentativas: ${num_tentativas}`
        }

    }
}

function jogarNovamente(){
    //sorteia um novo número e reseta num de tentativar
    num_random = Math.floor(Math.random()*10)
    num_tentativas = 0

    num_user.value = ''
    num_user.style.border = ''
    tela1.classList.remove('hide')
    tela2.classList.add('hide')
}

/* Event Listeners*/

/* Sorteio*/
const btn1 = document.querySelector('button#btnSorteio')

btn1.addEventListener('click', sortear)

/* Jogar novament*/
const btn2 = document.querySelector('button#btnJogar')

btn2.addEventListener('click', jogarNovamente)

/* Só permitir input numericos */
num_user.addEventListener('input', function(){
    num_user.value = num_user.value.replace(/[^0-9]/g,'')
})
