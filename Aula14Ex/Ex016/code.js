

function gerar(){
    
    let inf = [window.document.getElementById("n1"), window.document.getElementById("n2"), window.document.getElementById("n3"), window.document.querySelector("div#res")]
    
    
    
    inf[3].innerHTML = ("")//inf[3] representa a div

    if (inf[0].value.length == 0 || inf[1].value.length == 0 || inf[2].value.length == 0){
        //window.alert('[Erro!] Faltam Dados!')
        inf[3].innerHTML = 'Impossível contar!'
    }else{
        var num = [Number(inf[0].value),Number(inf[1].value),Number(inf[2].value)]

        if (num[2] <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            num[2] = 1
        }

        inf[3].innerHTML = "Contando: "
        if (num[0] < num[1]){
            //Contagem crescente
            for (let c = num[0]; c <= num[1]; c += num[2]){
                inf[3].innerHTML += `${c} \u{1F449}`
            }
        }else {
            //Contagem Regressiva
            for (let c = num[0]; c >= num[1]; c -= num[2]){
                inf[3].innerHTML += `${c} \u{1f449}`
            }
        }
        inf[3].innerHTML += `\u{1F3C1}`
        
    }

    
}