// Preencher produto
//   ---> os valores do input deverão ser propriedades do objeto produto
//   ---> Na tabela deverá ser exibida todas as instâncias da classe Produto
//   ---> Os botões deverão pegar os valores do input e criar uma nova instância

//Variaveis
let botaoAdicionar = document.querySelector('button#add')
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
        this.Listar(produto)
    }

    lerDados(){
        let nome_produto = document.querySelector('input#iproduto').value
        let valor_produto = document.querySelector('input#ivalor').value
        let produto = {}
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

    Listar(produto){
        Tabela.innerHTML += `<tr id=${produto.id}>
                                <td>${produto.id}</td>
                                <td>${produto.nome}</td>
                                <td>${produto.valor}</td>
                                <td><button onclick='Remover(${produto})'>Remover</button></td>
                            </tr>
                            `
    }

    Remover(produto){
        Tabela.innerHTML.replace(`<tr id=${produto.id}>
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.valor}</td>
        <td><button onclick='Remover(${produto})'>Remover</button></td>
    </tr>
    `,'')
}
    }



// Eventos

let novo_produto = new produto()
// Se eu não usasse o function(){}, o this dentro de Adicionar(), se refereria ao elemento que tamos adicionado o listener
botaoAdicionar.addEventListener('click', function(){
    novo_produto.Adicionar()
   }
)
