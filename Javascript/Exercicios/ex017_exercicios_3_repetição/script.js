
var btn = document.getElementById("botao")
btn.addEventListener('click',contar)    


function contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    
    var emoji = '&#x1F449'
    
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    resultado.innerHTML = ' ' // faz ele contar de novo sem repetir
    for(let c = i; c <= f; c +=p){
        resultado.innerHTML += ` ${c} ${emoji}`
    }
    emoji = '&#x1F480'
    resultado.innerHTML += emoji
}
