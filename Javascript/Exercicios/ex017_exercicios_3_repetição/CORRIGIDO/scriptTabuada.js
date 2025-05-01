function tabuada(){
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('selectTabuada')

    if(numero.value.length == 0){
        window.alert('Digite um numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ' '
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            item.value(`tab${c}`)
            c++
        }
    }
}

