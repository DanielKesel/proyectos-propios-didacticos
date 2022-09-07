// 1 es piedra, 2 es papel, 3 es tijera
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 💎"
    } else if(jugada == 2) {
        resultado = "Papel🎫"
    } else if(jugada == 3) {
        resultado = "Tijera ⚔"
    } else {
        resultado = "INVALIDO"
    }
    return resultado
}

function combate(jugador, pc){
    let resultadoCombate = ""
    if(pc == jugador){
        resultadoCombate = "EMPATE" 
    } else if((pc == 1 && jugador == 3) || (pc == 2 && jugador == 1) ) {
        resultadoCombate = "PERDISTE" 
    } else {
        resultadoCombate = "GANASTE" 
    }
    return resultadoCombate
}

let jugador = 0
let pc = 0
let ganada = 0
let perdida = 0

while(ganada < 3 && perdida < 3){
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 - Piedra, 2 - Papel, 3 - tijera")
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
    
    alert(combate(jugador, pc))

    if(combate(jugador,pc) == "GANASTE"){
        ganada += 1
    } else if(combate(jugador, pc) == "PERDISTE") {
        perdida += 1
    }
    
    // COMBATE
}

alert("ganaste: " + ganada + " y perdiste: " + perdida)
