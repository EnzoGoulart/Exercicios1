function retornaFibonacci(){
    let valor = parseInt(document.getElementById('inputFibonacci').value);
    let arrFibonacci = [0, 1]; 
    if(isNaN(valor) || valor < 0){
        trocaTexto('Valor invalido.')
    } 

    for(let i = 2; i <= valor + 1; i++) {
        arrFibonacci[i] = arrFibonacci[i - 1] + arrFibonacci[i - 2];

        //otimização para evitar excesso de loops
        if(arrFibonacci[i] >= valor) {
            break
        }
    }

    if(arrFibonacci.includes(valor)){
        trocaTexto('Está na sequencia.')
    } else {
        trocaTexto('Não está na sequencia.')
    }
    console.log(arrFibonacci)
}

function trocaTexto(texto){ 
    document.getElementById('resFib').innerHTML = texto
}