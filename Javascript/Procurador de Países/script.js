// Variáveis
let botaoProcurar = document.querySelector('button#button-addon2')
let capital_element = document.querySelector('p#capital')
let continente_element = document.querySelector('p#continente')
let populacao_element = document.querySelector('p#populacao')
let nome_element = document.querySelector('#nome')
let bandeira_element = document.querySelector('#bandeira')

function Pesquisar(){
    let pais = document.querySelector('input#nome_pais').value
    let link_pais = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    fetch(link_pais)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        capital_element.innerText = data[0].capital
        continente_element.innerText = data[0].continents
        populacao_element.innerText = data[0].population
        nome_element.innerText = data[0].name['official']
        bandeira_element.src = data[0].flags['png']
    }
    )
}
// Events

botaoProcurar.addEventListener('click', Pesquisar)
