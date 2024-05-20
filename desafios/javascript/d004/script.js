function iniciar(){
    let produto = window.prompt(`Que produto você está comprando?`)
    
    let v1 = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
   
    let v2 = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))

    let troco = Number(v2-v1)

    window.alert(`Você comprou ${produto} que custou ${v1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.
    Deu ${v2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.
    Volte sempre!`)
}