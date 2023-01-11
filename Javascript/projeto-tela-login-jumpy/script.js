// variaveis
let send_button = document.querySelector('.submit-button')
let name_error = document.querySelector('.name.error')
let tel_error = document.querySelector('.tel.error')
let cpf_error = document.querySelector('.cpf.error')

// metodos
formate_cpf = function(cpf_number){
    cpf_number = String(cpf_number).replace(/[^0-9]/,'')
    if(cpf_number.length == 11){
        new_cpf = `${cpf_number.slice(0,3)}.${cpf_number.slice(3,6)}.${cpf_number.slice(6,9)}-${cpf_number.slice(9)}`
        return new_cpf
    }else{
        return cpf_number
    }

}

formate_telefone = function(tel_number){
    tel_number = String(tel_number  ).replace(/[^0-9]/,'')
    if(tel_number.length == 11){
        new_tel = `(${tel_number.slice(0,2)}) ${tel_number.slice(2,7)}-${tel_number.slice(7)}`
        return new_tel
    }else{
        return tel_number
    }
}

validate_name = function(name){
    if(name.trim().split(' ').length == 1){
        name_error.innerHTML = `Insira um nome COMPLETO valido`
    }else{
        name_error.innerHTML=''
    }
}

validate_cpf = function(cpf){
    if(cpf.length != 14){
        cpf_error.innerHTML = `Insira um cpf de 11 digitos validos`
    }else{
        cpf_error.innerHTML = ''
    }
}

validate_tel = function(tel){
    if(tel.length != 15){
        tel_error.innerHTML = `Insira um numero celular valido.`
    }else{
        tel_error.innerHTML = ''
    }
}
//eventos

cpf.addEventListener('input', event=>{
    event.target.value = formate_cpf(event.target.value)
    validate_cpf(event.target.value)
})

telefone.addEventListener('input', event=>{event.target.value = formate_telefone(event.target.value)
validate_tel(event.target.value)
})

nome_completo.addEventListener('input', event=>{
    validate_name(event.target.value)
})

send_button.addEventListener('click', event=>{
    validate_name(nome_completo.value)
    validate_tel(tel)
    validate_cpf(cpf)
})


