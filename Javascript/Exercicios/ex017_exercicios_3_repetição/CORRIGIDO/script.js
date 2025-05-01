function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML('Impossivel contar')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido, passo 1')
            p=1
        }
        if(i < f) {
            //contagem crescente
        for(let c = i; c <= f; c+=p){
            resultado.innerHTML +=` ${c} \u{1f449}` // formatação pro js de emoji
        }
    } else {
        //contagem decrescente
        for(let c = i; c >= f; c-=p){
            resultado.innerHTML += ` ${c} \u{1f449}` 
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`
    }
}