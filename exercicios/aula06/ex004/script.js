var nome = window.prompt("Qual é seu nome?")
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem <em>${nome.length}</em> letras!<br>`)
document.write(`Seu nome em maiúsculas é: <em>${nome.toUpperCase()}</em> <br>`)
document.write(`Seu nome em minúsculas é: <em>${nome.toLowerCase()}</em>`)