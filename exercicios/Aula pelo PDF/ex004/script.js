function iniciar(){
    let nome = window.prompt(`Qual é seu nome?`)
    let idade = window.prompt(`Quantos anos você tem?`)
    let sexo = window.prompt(`Qual é seu sexo?`)
    let res = window.document.getElementById(`resultado`)
    res.innerHTML = `<p>Seu nome é <strong>${nome}!</strong> Você tem <strong>${idade}</strong> anos! Seu sexo é <strong>${sexo}</strong>!</p>`
}