function iniciar(){
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    let res = window.document.getElementById(`resultado`)
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p> <p>As notas obtidas foram ${n1} e ${n2}.</p> <p>A média final será <mark>${(n1+n2)/2}</mark></p>`
}

/*Nesse caso usar uma "var media" ajudaria na organização do código, já que a média é a soma dos valores sobre a quantidade de elementos

Algo assim:
var media = Number((n1+n2)/2)

.*/