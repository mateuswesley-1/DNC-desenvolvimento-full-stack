// Variaveis
let lamp = window.document.querySelector('#lampada')
let botao_ligar = document.querySelector('#ligar')
let botao_desligar = document.querySelector('#desligar')

// Metodos
function Ligar(){
    lamp.src = 'imagens/ligada.svg'
}

function Desligar(){
    lamp.src = 'imagens/desligada.svg'
}

function Quebrar(){
    lamp.src = 'imagens/quebrada.svg'
    botao_desligar.classList.add('hide')
    botao_ligar.classList.add('hide')
}

// Eventos
botao_ligar.addEventListener('click', Ligar)
botao_desligar.addEventListener('click', Desligar)
lamp.addEventListener('click', Quebrar)
