var agora = new Date
var hora = agora.getHours()
var nome = 'Gostosão'
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia! ${nome}.`)
}
else if(hora <= 17){
    console.log(`Boa tarde! ${nome}.`)
    }
else {
    console.log(`Boa noite! ${nome}.`)
}