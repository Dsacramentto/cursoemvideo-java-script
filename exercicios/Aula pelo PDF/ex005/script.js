window.alert("Seja bem-vindo(a) ao meu site!")
function calcular(){
    let n1 = window.prompt(`Digite um número:`)
    let res = window.document.getElementById(`resultado`)
    res.innerHTML = `<p>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</p>`
}