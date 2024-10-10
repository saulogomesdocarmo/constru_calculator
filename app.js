/**
 * APP - Para poder calcular a quantidade de tijolos baianos necessários para construir, apartir da medida
 * @author Saulo Gomes
 * @version 1.0
 */

// variaveis
let largura, cumprimento, area, tijolo8, tijolo6, tijolo9, tijolomacico

function calcular() {
    // captura de informações
    largura = formHome.numlargura.value
    cumprimento = formHome.numcumprimento.value

    // calculo para descobrir a area do terreno:
    area = cumprimento * largura
    document.getElementById("area").innerHTML = `${area} m²`

    // Calculo tijolos 8 furos
    tijolo8 = area * 28
    document.getElementById("qtd_tijolos8").innerHTML = `${tijolo8.toFixed(2)} tijolos de 8 furos.`

    // Calculo tijolos 6 furos
    tijolo6 = area * 40
    document.getElementById("qtd_tijolos6").innerHTML = `${tijolo6.toFixed(2)} tijolos de 6 furos.`

    // Calculo tijolos 9 furos
    tijolo9 = area * 30
    document.getElementById("qtd_tijolos9").innerHTML = `${tijolo9.toFixed(2)} tijolos de 9 furos.`

    // Calculo dos tijolos maciços
    tijolomacico = area * 80
    document.getElementById("qtd_macico").innerHTML = `${tijolomacico.toFixed(2)} tijolos maciços`
}

function limpar() {
    document.getElementById("area").innerHTML = "Area do terreno"
    document.getElementById("qtd_tijolos8").innerHTML = "Tijolos de 8 furos"
    document.getElementById("qtd_tijolos6").innerHTML = "Tijolos de 6 furos"
    document.getElementById("qtd_tijolos9").innerHTML = "Tijolos de 9 furos"
    document.getElementById("qtd_macico").innerHTML = "Tijolos Maciços"
}