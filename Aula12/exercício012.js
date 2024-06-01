var agora = new Date()
var diasem = 0
/*
0-Domingo
1-Segunda
2-Terça
3-Quarta
4-Quinta
5-Sexta
6-Sábado
*/



switch(agora.getDay()) {
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

var hora = agora.getHours()
var min = agora.getMinutes()
var periododia = 'Null'

if (hora <12){
    periododia = 'manhã'
}
else if (hora < 16){
    periododia = 'tarde'
}
else{
    periododia = 'noite'
}
var diames = agora.getDate()

console.log(`Hoje é dia ${diames}, ${diasem}, e agora são ${hora}:${min} da ${periododia}. Obrigado!`)
.