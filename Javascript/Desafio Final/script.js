const dias = document.querySelector("#dias")
const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const data_lançamento = new Date("20 dec 2022")

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

countDown()
setInterval(countDown, 1000)
