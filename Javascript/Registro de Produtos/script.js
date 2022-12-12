// Preencher produto
//   ---> os valores do input deverão ser propriedades do objeto produto
//   ---> Na tabela deverá ser exibida todas as instâncias da classe Produto
//   ---> Os botões deverão pegar os valores do input e criar uma nova instância

//Variaveis
let botaoAdicionar = document.querySelector('button#add')
let botaoCancelar = document.querySelector('button#cancel')
let Tabela = document.querySelector('table>tbody')
// Criando classe

class produto{
    // Método
    constructor(){
        this.id = 1
        this.arrayProdutos = []
    }

    Adicionar(){
        let produto = this.lerDados()
        if(this.Validar(produto)==true){
            this.Salvar(produto)
        }
        this.Listar()
        this.Cancelar()
    }

    lerDados(){
        let nome_produto = document.querySelector('input#iproduto').value
        let valor_produto = document.querySelector('input#ivalor').value
        let produto = {}

        // this.id faz referencia a classe, estamos pegando uma propriedade da classe e atribuindo ao
        // atributo do produto
        produto.id = this.id
        produto.nome = nome_produto
        produto.valor = valor_produto
        return produto
    }

    Validar(produto){
        let msg = ''
        if(produto.nome== ''){
            msg += 'Por favor insira o nome do produto! \n'
        }

        if(produto.valor==''){
            msg += 'Por favor insira o valor do produto! \n'
        }

        if(msg!=''){
            alert(msg)
            return false
        }else{
            return true
        }
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id+=1
    }

    Listar(){
        let tbody = document.querySelector("div.conteudo>table>tbody")
        tbody.innerText = ''

        for(let i = 0; i<this.arrayProdutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_del = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nome
            td_preco.innerText = this.arrayProdutos[i].valor
            td_del.innerHTML = `<button onclick='novo_produto.Remover(${i})'><span class='material-symbols-outlined'>delete</span></button>`

        }
    }

    Cancelar(){
        document.querySelector('input#ivalor').value = ''
        document.querySelector('input#iproduto').value = ''
    }

    Remover(indice){
        this.arrayProdutos.splice(indice)
        this.Listar()
    }
}



// Eventos

let novo_produto = new produto()
// Se eu não usasse o function(){}, o this dentro de Adicionar(), se refereria ao elemento que tamos adicionado o listener
botaoAdicionar.addEventListener('click', function(){
    novo_produto.Adicionar()
   }
)

botaoCancelar.addEventListener('click', function(){
    novo_produto.Cancelar()
    }
)
