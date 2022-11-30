// Variáveis
let num_random = Math.floor(Math.random()*10)
let num_tentativas = 0

const btn2 = document.querySelector('button#btnJogar')
const btn1 = document.querySelector('button#btnSorteio')
const num_user = document.querySelector('input#inum')
const mensagem = document.querySelector('div.textoFim')
const alerta = document.querySelector('p#mensagem')
const tela1 = document.querySelector('.tela1')
const tela2 = document.querySelector('.tela2')
const feedback = document.querySelector('p#tentativas')

// Métodos
function toggleTela(){
    tela1.classList.toggle('hide')
    tela2.classList.toggle('hide')
}
function sortear(event){
    // nao enviar formulario quando apertamos enter
    event.preventDefault()
    num_tentativas += 1
    if(num_user.value > 9 || num_user.value < 0 ){

        alerta.style.color = 'red'

    }else{

        alerta.style.color = 'black'

        if(num_random == num_user.value){
            toggleTela()
            mensagem.innerHTML = `<p>Você acertou em ${num_tentativas} tentativas!</p>
            <p>Número Sorteado: ${num_user.value}</p>`

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
    toggleTela()
}
function substituirImput(){
    num_user.value = num_user.value.replace(/[^0-9]/g,'')
}

//Eventos
btn1.addEventListener('click', sortear)
btn2.addEventListener('click', jogarNovamente)
num_user.addEventListener('input', substituirImput)

document.addEventListener('keydown', function(e){
    if (e.key == 'Enter' && tela1.classList.contains('hide')){
        jogarNovamente()
    }
})

