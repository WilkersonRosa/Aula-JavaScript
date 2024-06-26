let nome = ['Patricia','Augusto','Pedrinho']
let idade = [35, 84, 5]
let gen = ['Feminino','Masculino','Masculino']
nome.push('Natália')
idade.push(31)
gen.push('Feminino')

nome.push('Júlia')
idade.push(22)
gen.push('Feminino')

for(let pos = 0; pos < nome.length; pos++) {
    console.log(`${pos}. Nome: ${nome[pos]}, Idade: ${idade[pos]}, Gênero: ${gen[pos]}`)
}

console.log(`----------------------------------------------------------------------`)

let per = nome.indexOf('Pedrinho')
if (per == -1) {
    console.log('O Cliente não foi encontrado!')
}else{
    console.log(`${per}. Nome: ${nome[per]}, Idade: ${idade[per]}, Gênero: ${gen[per]}`)
}

console.log(`----------------------------------------------------------------------`)