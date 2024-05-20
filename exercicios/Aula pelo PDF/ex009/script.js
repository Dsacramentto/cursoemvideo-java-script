let contador = Number(0)
let res = window.document.getElementById(`resultado`)

function cliques(){
  let contando =  contador++
 res.innerHTML = `<p>O contador está com <mark>${contando}</mark> cliques.`
}

function zerar(){
    contador = 0
    res.innerHTML = null
}