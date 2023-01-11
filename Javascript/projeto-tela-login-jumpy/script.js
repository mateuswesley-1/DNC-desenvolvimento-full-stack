// variaveis
let send_button = document.querySelector('.submit-button')

// divs com msgs de erro
let name_error = document.querySelector('.name.error')
let tel_error = document.querySelector('.tel.error')
let cpf_error = document.querySelector('.cpf.error')
let send_error = document.querySelector('.send.error')
let form_validado = false

// metodos
formate_cpf = function(cpf_number){
    cpf_number = String(cpf_number).replace(/[^0-9]/g,'')
    if(cpf_number.length == 11){
        new_cpf = `${cpf_number.slice(0,3)}.${cpf_number.slice(3,6)}.${cpf_number.slice(6,9)}-${cpf_number.slice(9)}`
        return new_cpf
    }else{
        return cpf_number
    }

}

formate_telefone = function(tel_number){
    tel_number = String(tel_number).replace(/[^0-9]/g, '')
    if(tel_number.length == 11){
        new_tel = `(${tel_number.slice(0,2)}) ${tel_number.slice(2,7)}-${tel_number.slice(7)}`
        return new_tel
    }else{
        return tel_number
    }
}

formate_name = function(user_name){
    return user_name.replace(/[^a-zA-Z ]/g, '')
}

validate_name = function(name){
    if((name.trim().split(' ').length == 1) && name.trim() != ''){
        name_error.innerHTML = `Insira um nome COMPLETO valido`
    }else{
        name_error.innerHTML=''
    }
}

validate_cpf = function(cpf){
    if(cpf.length != 14 && cpf != ''){
        cpf_error.innerHTML = `Insira um cpf de 11 digitos validos`
    }else{
        cpf_error.innerHTML = ''
    }
}

validate_tel = function(tel){
    if(tel.length != 15 && tel != ''){
        tel_error.innerHTML = `Insira um numero celular valido.`
    }else{
        tel_error.innerHTML = ''
    }
}

validate_form = function(){
    const form = document.querySelector('form.regis')
    Array.from(form.elements).forEach(input=>{
        if(input.value == ''){
            send_error.style = 'color: e33d3df2'
            send_error.innerHTML = 'Ainda existe campos vazios'
            form_validado = false
        }
    })

    if(send_error.innerHTML == ''){
        send_error.style = 'color: #15e05c'
        send_error.innerHTML = 'Cadastro realizado com sucesso!'
    }

}

// Eventos

cpf.addEventListener('input', event=>{
    event.target.value = formate_cpf(event.target.value)
    validate_cpf(event.target.value)
})



telefone.addEventListener('input', event=>{
    event.target.value = formate_telefone(event.target.value)
    validate_tel(event.target.value)
})


nome_completo.addEventListener('input', event=>{
    event.target.value = formate_name(event.target.value)
    validate_name(event.target.value)
})

send_button.addEventListener('click', event=>{
    validate_form()
})


const form = document.querySelector('form.regis')
Array.from(form.elements).forEach(input=>{
    input.addEventListener('focus', event=>{
    send_error.innerHTML = ''

    })
})


