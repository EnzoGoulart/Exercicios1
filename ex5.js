function retornaInvertida(){
    let string = document.getElementById('inputInvertida').value
    let resInv = document.getElementById('resInv') 
    let stringArr = string.split('')
    let stringInv = [];

    stringArr.forEach(element => {
        stringInv.unshift(element)
    });
 
    resInv.innerHTML = stringInv.join('')
}