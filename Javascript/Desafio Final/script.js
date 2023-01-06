// Variaveis
const dias = document.querySelector("#dias")
const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const data_lançamento = new Date("20 dec 2023")

// Funcoes
function countDown(){
    const hoje = new Date()

    const intervalo_segundos = (data_lançamento - hoje)/1000

    const num_dias = Math.floor(intervalo_segundos/60/60/24)

    const num_horas = Math.floor(intervalo_segundos/60/60)%24

    const num_minutos = Math.floor(intervalo_segundos/60)%60

    const num_segundos = Math.floor(intervalo_segundos)%60

    dias.innerHTML = formatarTempo(num_dias)
    horas.innerHTML = formatarTempo(num_horas)
    minutos.innerHTML = formatarTempo(num_minutos)
    segundos.innerHTML = formatarTempo(num_segundos)
}

function formatarTempo(tempo){
    return tempo<10? `0${tempo}`: tempo
}

// Funcao que toggle uma classe especifica a algum elemento
function classToggle(element, elementClass){
    element.classList.toggle(elementClass)
}

// Executa a funcao uma vez a cada segundo, para atualizar o
// contador.

// entao a cada segundo, calcula novamente quanto tempo falta para a data especificada
// no caso, 30 dez 2023
countDown()
setInterval(countDown, 1000)


// Eventos

// Pegando os elementos de interesse, e os armazenando em uma array
const cards_array = Array.from(document.querySelectorAll(".card"));
const button_assista = document.querySelector('button')


// card events

// adicionando o evento para cada membro da array, que corresponde
// aos elementos html das imagens
cards_array.forEach((item) => item.addEventListener('mouseover', event => {
    classToggle(event.target, 'highlight')
    event.target.style.cursor = 'pointer'
}))

cards_array.forEach((item) => item.addEventListener('mouseout', event => {
    classToggle(event.target, 'highlight')
}))

// button events
button_assista.addEventListener('mouseover', event => {
    classToggle(event.target, 'hover')
    classToggle(event.target, 'normal' )
})

button_assista.addEventListener('mouseout', event => {
    classToggle(event.target, 'hover')
    classToggle(event.target, 'normal' )
})


