function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txano")
    var resultado = document.getElementById("resultado")

    if(fAno.value.length == 0 || fAno.value > ano){
        alert("Erro")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','Imagens/bebe-m.png')
            } else if (idade >21){
                //jovem
                img.setAttribute('src','Imagens/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Imagens/adulto-m.png')
            }
            else {
                //Idoso
                img.setAttribute('src','Imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','Imagens/bebe-f.png')
            } else if (idade >21){
                //jovem
                img.setAttribute('src','Imagens/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Imagens/adulto-f.png')
            }
            else {
                //Idoso
                img.setAttribute('src','Imagens/idoso-f.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `É ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}