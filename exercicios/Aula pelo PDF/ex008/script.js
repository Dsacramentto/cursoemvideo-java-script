function iniciar(){
    let n1 = Number(window.prompt(`Digite um número:`))
    var absoluto = Math.abs(n1) //Valor absoluto
    var parteInteira = Math.trunc(n1) //Parte inteira
    var vimp = Math.round(n1)  //Valor inteiro mais próximo
    var raizQuad = Math.sqrt(n1) //Raiz quadrada
    var raizCub = Math.cbrt(n1) //Raiz cúbica
    var oQuad = n1**2 //Número ao quadrado
    var oCub = n1**3 //Valor ao cubo
    let res = window.document.getElementById(`resultado`)
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${n1}</strong></p><hr><p>O seu valor absoluto é ${absoluto}</p><p>A sua parte inteira é ${parteInteira}</p> <p>O valor inteiro mais príxmo é ${vimp}</p> <p>A sua raiz quadrada é ${raizQuad}</p> <p>A sua raiz cúbica é ${raizCub}</p> <p>O valor de ${n1}² é ${oQuad}</p> <p>O valor de ${n1}³ é ${oCub}</p>`
}