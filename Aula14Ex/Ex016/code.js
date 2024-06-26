

function gerar(){
    
    let inic = window.document.getElementById("n1")
    let fim = window.document.getElementById("n2")
    let pass = window.document.getElementById("n3")

    
    
    let result = window.document.querySelector("div#res")
    result.innerHTML = ("")
    if (inic.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        //window.alert('[Erro!] Faltam Dados!')
        result.innerHTML = 'Impossível contar!'
    }else{
        var n1 = Number(inic.value)
        var n2 = Number(fim.value)
        var n3 = Number(pass.value)
        if (n3 <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            n3 = 1
        }

        result.innerHTML = "Contando: "
        if (n1 < n2){
            //Contagem crescente
            for (let c = n1; c <= n2; c += n3){
                result.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //Contagem Regressiva
            for (let c = n1; c >= n2; c -= n3){
                result.innerHTML += `${c} \u{1f449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
        
    }

    
}