let entrada = document.getElementById('entrada')
let botao = document.getElementById('botao')
let select = document.getElementById('select')
let valores = document.getElementById('valores')
let resultado = document.getElementById('resultado')

let array = []


function verificar(){
    if (entrada.value.length == 0){
        window.alert('Digite um numero')
    } else {
        let numero = document.createElement('option')
        numero.setAttribute('id','opcoes')
        numero.text = `Valor ${entrada.value} foi adicionado`
        array.push(entrada.value) 
        valores.appendChild(numero)
        resultado.innerHTML = ' '
    }
    
}




function finalizar(){

    resultado.innerHTML += `<p> Ao todo, temos ${valores.length} números cadastrados</p>`
    
    resultado.innerHTML += `<p> O maior numero cadastrado foi ${Math.max.apply(Math, array)}</p>`
    
    resultado.innerHTML += `<p> O menor numero cadastrado foi ${Math.min.apply(Math, array)}</p>`

    let soma = 0
    for(let i = 0; i<= valores.length - 1; i++){
        soma += Number(array[i])
    }

    resultado.innerHTML += `<p> Somando todos os valores ${soma}</p>`

    let media = soma/array.length 
    resultado.innerHTML += `<p> A media dos valores é ${media}</p>`

}