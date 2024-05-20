function iniciar(){
    let n1 = window.prompt('Digite um número qualquer!')
    n2 = Number(n1) - 1
    n3 = Number(n1) + 1
    window.alert(`Antes de ${n1}, temos o número ${n2}.
Depois de ${n1}, temos ${n3}.`)
}