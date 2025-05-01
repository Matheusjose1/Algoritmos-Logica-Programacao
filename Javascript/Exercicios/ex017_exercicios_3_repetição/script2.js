var numero = document.getElementById('numero')
var resultado = document.getElementById('resultado')
var botao = document.getElementById('botao')
botao.addEventListener('click', tabuada)
function tabuada(){
    for (i = numero.value; i<=10; i++){
        var r = i * numero.value
        resultado.innerHTML += `${numero.value} x ${i} = ${r}  <br>`
    }
}
botao.addEventListener('click', resetar)

function resetar(){
    botao = window.location.reload()
}