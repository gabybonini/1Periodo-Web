const contador = function(num){
    let atual = 1
    let timer = setInterval(() => {
        if (atual === num){
            clearInterval(timer)
        }
        console.log(atual++)
    }, 1000)
}
contador(10)
contador(5)