let res = window.document.getElementById(`resultado`)

function converter(){
    let v1 = Number(window.prompt(`Digite uma distância em metro (m):`))

    let km = Number(v1/1000)
    let cm = Number(v1*100)
    let mm = Number(v1*1000)

    res.innerHTML = `<h1>A distância de ${Number(v1).toString().replace(".", ",")} metros, corresponde a...</h1> <p>${Number(km).toString().replace(".", ",")} quilômetros (Km)</p> <p>${Number(cm.toString().replace(".", ","))} centímeros (cm)</p> <p>${Number(mm.toString().replace(".", ","))} milímetros (mm)</p>`
}