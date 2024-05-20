function soma(){
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt(`Digite outro número`))
    /*let s = Number(n1)+Number(n2) || Forma diferente de fazer dar o mesmo resultado. Só que eu torno as variáves n1 e n2 "number" nessa linha, e não antes. Se na linha 1 e 2 não tivesses o comando Number(); n1 e n2 seriam string.*/ 
    let res = window.document.getElementById(`resultado`)
    res.innerHTML = `<p>A some entre <mark>${n1}</mark>e<mark>${n2}</mark> é igual a <strong>${n1+n2}!</strong></p>`
}