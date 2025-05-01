var pais = window.document.querySelector("input#texto")

var resultado = window.document.querySelector("div#resultado")

var botao = document.querySelector('button#botao')
botao.addEventListener('click', verificar)


function verificar(){
    if (pais.value == 'Brasil'){
        resultado.innerHTML += '<p>Você tá fudido</p>'
    } else {
        resultado.innerHTML += 'Estrangeiro'
    }
}