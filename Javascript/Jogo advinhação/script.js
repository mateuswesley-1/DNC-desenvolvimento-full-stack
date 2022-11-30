// sortear um valor entre 0 e 9
// verificar se é igual ao valor escolhido
// se for igual, finaliza o jogo
// senão, continua, contando cada erro para exibir no final
var num_random = Math.floor(Math.random()*10)
var num_tentativas = 0

function sortear(){
    var num_user = document.querySelector('input#inum')
    var mensagem = document.querySelector('h2#textoFim')
    var alerta = document.querySelector('p#mensagem')
    num_tentativas += 1
    if(num_user.value > 9 || num_user.value < 0 ){
        alerta.style.color = 'red'
    }else{
        alerta.style.color = 'black'
        if(num_random == num_user.value){
            tela1.style.display = 'none'
            tela2.style.display = 'block'

            mensagem.innerHTML = `Você acertou em ${num_tentativas} tentativas!`
        }else{

            num_user.style.border = '2px solid red'
            document.querySelector('p#tentativas').innerHTML = `Tentativas: ${num_tentativas}`
        }

    }
}

function jogarNovamente(){
    //sorteia um novo número e reseta num de tentativar
    num_random = Math.floor(Math.random()*10)
    num_tentativas = 0

    var num_user = document.querySelector('input#inum')

    num_user.value = ''
    num_user.style.border = ''
    tela1.style.display = 'block'
    tela2.style.display = 'none'
}
