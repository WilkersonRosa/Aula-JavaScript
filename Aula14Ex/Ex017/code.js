function gerar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tabuada')

    var val = Number(num.value)

    tab.innerHTML = ''
    if (num.value.length == 0){
        window.alert('Coloque algum número para gerar a tabuada!')
    }else{
       for (c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${val} x ${c} = ${val*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        } 
    }
}