
function carregar() {
    var msg = document.getElementById('msg')//Objeto onde será exibida a mensagem
    var img = document.getElementById('imagem')//Objeto onde será exibida a imagem de acordo com o horário
    var data = new Date()//declarando a data
    var hora = data.getHours()//Extraindo a hora da data
    var min = data.getMinutes()//Extraindo os minutos da data
    var dia = data.getDate()//Extraindo o dia da data
    //Declaração das variáveis para mês, dia da semana e período do dia
    var mes = 'null'
    var diasem = 'null'
    var periododia = 'Null'

    //Este switch converte o mês de número para texto
    switch (data.getMonth()){
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
    }

    //este switch converte o dia da semana de número para texto
    switch(data.getDay()) {
        case 0:
            diasem = 'Domingo'
            break
        case 1:
            diasem = 'Segunda-Feira'
            break
        case 2:
            diasem = 'Terça-Feira'
            break
        case 3:
            diasem = 'Quarta-Feira'
            break
        case 4:
            diasem = 'Quinta-Feira'
            break
        case 5:
            diasem = 'Sexta-Feira'
            break
        case 6:
            diasem = 'Sábado'
            break
        case 7:
            diasem = 'Domingo'
            break
    }

    //Para definir as mudanças de cor de fundo, imagem e período do dia na mensagem
    if (hora >= 0 && hora <12){
        //Dia!
        img.src = 'img/manha.png'
        document.body.style.background = '#5B92E5'
        periododia = 'manhã'
        
    }
    else if (hora >= 12 && hora < 18){
        //Tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#ffa500'
        periododia = 'tarde'
    }
    else{
        //Noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#522e97'
        periododia = 'noite'
    }

    //Exibe a mensagem contendo o dia, mês, dia da semana, hora e período do dia
    msg.innerHTML = `Hoje é ${dia} de ${mes}, ${diasem}, agora são ${hora}h:${min}m, boa ${periododia}!`

}
//Atualiza o código a cada 1 segundo
var intervalid = setInterval(carregar,1*1000);