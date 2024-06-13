function verifage(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro], digite o ano novamente!')
    }
    else{
        var gen = document.getElementsByName('gen')
        var idade = ano - Number(fano.value)
        var genero = 'null'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (gen[0].checked){
            genero = 'um homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','img/menino-bebe.png')
            }else if (idade >= 10 && idade < 23)
            {
                //jovem
                img.setAttribute('src','img/homem-jovem.png')
            }
            else if (idade >= 23 && idade < 60){
                //Adulto
                img.setAttribute('src','img/homem-adulto.png')
            }
            else {
                //Idoso
                img.setAttribute('src','img/idoso.png')
            }
        }else if (gen[1].checked){
            genero = 'uma mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','img/menina-bebe.png')
            }else if (idade >= 10 && idade < 23)
            {
                //jovem
                img.setAttribute('src','img/mulher-jovem.png')
            }
            else if (idade >= 23 && idade < 60){
                //Adulto
                img.setAttribute('src','img/mulher-adulta.png')
            }
            else {
                //Idoso
                img.setAttribute('src','img/idosa.png')
            }
        }
        res.style.color = 'red'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}