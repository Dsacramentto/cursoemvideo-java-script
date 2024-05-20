window.alert("Olá mundo!")

window.confirm("Está gostando de JS?")

function clicou(){
    window.alert("Parabéns, você clicou no botão!")
}


function getname(){
    let nome = window.prompt("Qual é seu nome?")
    window.alert(`Olá, ${nome}! É um prazer conhecê-lo!`)
}

/* Variáveis:
- Podem começar com letra, $ ou _
- Não podem começar com números
- É possível usar letras ou númeris
- É possível usar acentos e símbolos
- Não poden conter espaços
- Não podem ser palavras reservadas (window.aler/function etc.)

Dicas para criar variáveis:
- Maiúsculas e minúsculas fazem diferença "a" é diferente de "A"
- Tente escolher nomes coerentes para as variáveis. Se quer definir uma variável de "nome" use "nome". 
- String são conjuntos de caracteres, ex: 28913-330(cep) DanielSacramento(nome)
*/