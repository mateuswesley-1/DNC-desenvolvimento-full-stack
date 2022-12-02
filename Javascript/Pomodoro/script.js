const data = new Date()
let tempo_inicial = data.getTime();
let arrayBotoes = document.getElementsByClassName('botao')
let texto_tempo = document.querySelector('#segundos')

/* Métodos*/
function toggleBotao(botao1, botao2){
    botao1.classList.toggle('hide')
    botao2.classList.toggle('hide')
}

function playTimer(){
    const data_inicial = new Date()
    let tempo_inicial = data.getTime()/1000

    while (Number(texto_tempo)<60){
        const data_final = new Date()
        let tempo_final = data.getTime()/1000

        if((tempo_final-tempo_inicial)>=1){
           texto_tempo.innerText = texto_tempo.value+1
        }
    }
}

/*Eventos*/
/*[button.botao.play, button.botao.pause.hide, button.botao.stop, button.botao.timer.hide, button.botao.musica-on, button.botao.musica-off]*/

for(let i=0; i<arrayBotoes.length; i+=2){
    arrayBotoes[i].addEventListener('click', function(){
        toggleBotao(arrayBotoes[i], arrayBotoes[i+1])
    })

    arrayBotoes[i+1].addEventListener('click', function(){
        toggleBotao(arrayBotoes[i], arrayBotoes[i+1])
    })
}

arrayBotoes[0].addEventListener('click', playTimer)





