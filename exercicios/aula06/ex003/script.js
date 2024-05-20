var n1 = Number(window.prompt('Digite um número:'))
var n2 = Number(window.prompt('Digite outro número:'))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual ${s}!`)
// + pra adição e concatenação: como específicar?
// (number + numeber) para adição
// (string + string) concatenação

/* Para converter a string para:
Um número inteiro: "Number.parseInt(n)"
Um número real(com vírgula): "Number.parseFloat(n)"
*/

//Usar Number(n) automatiza o processo entre decidir se é inteiro ou real.

//Como converter "número" para "string"
/* Para converter o número para:
Uma String: String(n)
-> n.toString(): Dessa forma o valor vem primeiro e o ".toString()" o converte para string.
*/

//Template de String: ${s}, o placeholder é sempre utilizado entre crases!
/*Formatando Strings
var s = 'JavaScript'
'Eu estou aprendendo s' || Não faz intepolação (${s})
'Eu estou aprendendo' + s || Usa concatenação
`Eu estou aprendendo ${s}` || Usa template string
----
s.length || quantos caracteres a string tem
s.UpperCase() || todas as letras 'maiúsculas'
s.LowerCase() || todas as letras 'minúsculas'
*/

/* Formatando Números
n.toFixed() || é um método embutido da linguagem de programação JavaScript que permite formatar um número com uma quantidade específica de casas decimais.

n.toFixed().replace('.', ',')

n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  || Comando que dá o resultado de um número em REAL BRASILEIRO. Basicamente ele pega a variável(n1) joga pra uma localização específica(específicada pelo pt-BR e estilazado pelo currency, no qual tem valor currency: 'BRL')
*/