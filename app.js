/**
 * APP - Para poder calcular a quantidade de tijolos baianos necessários para construir, apartir da medida
 * @author Saulo Gomes
 * @version 1.0
 */

// variaveis
let largura, cumprimento, tamanho, tijolo8, tijolo6, tijolo9, tijolinho

function calcular() {
    // captura de informações
    largura = formHome.numlargura.value
    cumprimento = formHome.numcumprimento.value

    // calculo para descobrir a area do terreno:
    tamanho = cumprimento * largura
    document.getElementById("area-parede").innerHTML = `${tamanho} m²`

    // Lógica para calcular a quantidade de tijolos, apartir da escolha da quantidade de furos no bloco
    if (document.getElementById('6furos').checked === true) {
        tijolo6 = tamanho * 40
        document.getElementById('total').innerHTML = `${tijolo6} tijlos de 6 furos`

    } else if (document.getElementById('8furos').checked === true) {
        tijolo8 = tamanho * 28
        document.getElementById('total').innerHTML = `${tijolo8} tijolos de 8 furos`

    } else if (document.getElementById('9furos').checked === true) {
        tijolo9 = tamanho * 30
        document.getElementById('total').innerHTML = `${tijolo9} tijolos de 9 furos`

    } else if (document.getElementById('tijolinhos').checked === true) {
        tijolinho = tamanho * 80
        document.getElementById('total').innerHTML = `${tijolinho} tijolinhos`
    } else {
        // Lógica para obrigatoriedade do preenchimento
        if (document.getElementById('6furos').checked === false || document.getElementById('8furos').checked === false) {
            document.getElementById('area-parede').innerHTML = `É necessário um tipo de tijolo`
            document.getElementById('total').innerHTML = `Escolha um tipo de tijolo`

        } else if (document.getElementById('9furos').checked === false || document.getElementById('tijolinhos').checked === false) {
            document.getElementById('area-parede').innerHTML = `É necessário um tipo de tijolo`
            document.getElementById('total').innerHTML = `Escolha um tipo de tijolo`
        } else {

        }
    }

}

function limpar() {
    document.getElementById("area-parede").innerHTML = "Resultado"
    document.getElementById("total").innerHTML = "Resultado"

}