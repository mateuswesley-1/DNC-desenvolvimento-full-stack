
// Criar variáveis pras imagens das lâmpadas
// e botoes
let lampaga_ligada = document.querySelector(".ligada")
let lampada_desligada = document.querySelector('.desligada')
let lampada_quebrada = document.querySelector('.quebrada')
let interruptor = document.querySelector("input[value='interruptor']")


// Métodos
function ligar_desligar(){
    lampaga_ligada.classList.toggle('hide')
    lampada_desligada.classList.toggle('hide')
}


function quebrar(){
    lampaga_ligada.classList.add('hide')
    lampada_desligada.classList.add('hide')
    lampada_quebrada.classList.remove('hide')
    interruptor.classList.add('hide')
}


// criar eventos para o clique nos botoes que adicionam e tiram a classe hide das imagens
interruptor.addEventListener('click', ligar_desligar)

lampaga_ligada.addEventListener('click', quebrar)
lampada_desligada.addEventListener('click', quebrar)
