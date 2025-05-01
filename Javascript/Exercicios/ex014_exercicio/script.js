function carregar(){
    var msg = window.document.getElementById("msg")
    var ms2 = window.document.getElementById('msg2')
    var foto = window.document.getElementById("imagem")
    var data = new Date()
    var hora = 22
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        msg2.innerHTML = '<p>Bom dia</p>'
        foto.src = 'Imagens/manha.png'
        document.body.style.background = '#b2c0cd'
    } else if (hora > 12 && hora < 18){
        msg2.innerHTML = '<p>Bom tarde</p>'
        foto.src = "Imagens/tarde.png"
        document.body.style.background = '#a74d00'
    } else {
        msg2.innerHTML = '<p>Bom noite</p>'
        foto.src = "Imagens/noite.png"
        document.body.style.background = '#1c1c20'
    }
}
