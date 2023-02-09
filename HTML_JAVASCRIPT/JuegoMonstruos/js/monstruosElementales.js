let ataqueJugador
let ataqueEnemigo
let resultadoCombate
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReinicio = document.getElementById('reiniciar')
    sectionReinicio.style.display = 'none'

    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    let spanVidaJugador = document.getElementById('vida-jugador')

    spanVidaJugador.innerHTML = vidaJugador
    spanVidaEnemigo.innerHTML = vidaEnemigo
    
    let botonActivaMonstruoJugador = document.getElementById('boton-montruo')
    botonActivaMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)

    let botonDeAtaqueFuego = document.getElementById('boton-ataque-fuego')
    botonDeAtaqueFuego.addEventListener('click', ataqueFuego)
    
    let botonDeAtaqueAgua = document.getElementById('boton-ataque-agua')
    botonDeAtaqueAgua.addEventListener('click', ataqueAgua)

    let botonDeAtaqueTierra = document.getElementById('boton-ataque-tierra')
    botonDeAtaqueTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function seleccionarMonstruoJugador(){

    let sectionSeleccionarMonstruo = document.getElementById('seleccionar-monstruo')
    sectionSeleccionarMonstruo.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHydra = document.getElementById('hydra')
    let inputFireStar = document.getElementById('fireStar')
    let inputRocky = document.getElementById('rocky')
    let spanMonstruoJugador = document.getElementById('monstruo-jugador')

    if(inputHydra.checked){

        spanMonstruoJugador.innerHTML = "Hydra"
        alert('SELECCIONASTE AL MONSTRUO HYDRA')
        
    } else if(inputFireStar.checked) {

        spanMonstruoJugador.innerHTML = "FireStar"
        alert('SELECCIONASTE AL MONSTRUO FIRESTAR')

    } else if(inputRocky.checked) {

        spanMonstruoJugador.innerHTML = "Rocky"
        alert('SELECCIONASTE AL MONSTRUO ROCKY')

    } else {

        alert('Por favor, selecciona al monstruo estratégicamente')
        spanMonstruoJugador.innerHTML = ""
    }

    seleccionarMonstruoEnemigo()

}

function seleccionarMonstruoEnemigo() {
    let monstruoEnemigo = aleatorio(1,3)
    let spanMonstruoEnemigo = document.getElementById('monstruo-enemigo')

    if(monstruoEnemigo == 1){
        spanMonstruoEnemigo.innerHTML = 'Hydra'
    } else if (monstruoEnemigo == 2) {
        spanMonstruoEnemigo.innerHTML = 'FireStar'
    } else {
        spanMonstruoEnemigo.innerHTML = 'Rocky'
    }

}

function ataqueFuego(){
    
    ataqueJugador = 'FUEGO'
    eleccionAtaqueEnemigo()

}

function ataqueAgua(){
    
    ataqueJugador = 'AGUA'
    eleccionAtaqueEnemigo()

}

function ataqueTierra(){
    
    ataqueJugador = 'TIERRA'
    eleccionAtaqueEnemigo()

}

function eleccionAtaqueEnemigo(){

    let tipoAtaque = aleatorio(1,3)

    if(tipoAtaque == 1){
        ataqueEnemigo = 'FUEGO'
        alert("EL ENEMIGO ELIGIÓ FUEGO")
    } else if (tipoAtaque == 2) {
        ataqueEnemigo = 'AGUA'
        alert("EL ENEMIGO ELIGIÓ AGUA")
    } else {
        ataqueEnemigo = 'TIERRA'
        alert("EL ENEMIGO ELIGIÓ TIERRA")
    }

    

    combate()

    

}

function combate(){

    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    let spanVidaJugador = document.getElementById('vida-jugador')

    spanVidaJugador.innerHTML = vidaJugador
    spanVidaEnemigo.innerHTML = vidaEnemigo

    if(ataqueEnemigo == ataqueJugador){
         
        resultadoCombate = "EMPATE"
        alert("empataste gil")

    } else if((ataqueEnemigo == 'FUEGO' && ataqueJugador == 'TIERRA') || (ataqueEnemigo == 'AGUA' && ataqueJugador == 'FUEGO') ) {
       
        vidaJugador -= 1
        spanVidaJugador.innerHTML = vidaJugador
        resultadoCombate = "PERDISTE" 
        

    } else {
         
        vidaEnemigo -= 1
        spanVidaEnemigo.innerHTML = vidaEnemigo
        resultadoCombate = "GANASTE"
    }
        
        crearMensaje()

        revisarVidas()
}
    

function crearMensaje(){

    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-Jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    notificacion.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //let parrafo = document.createElement('p')
    //parrafo.innerHTML = 'Tu monstruo atacó con ' + ataqueJugador + ', y el monstruo del enemigo atacó con ' + ataqueEnemigo + 'El resultado del combate es: + ' + resultadoCombate

    sectionMensajes.appendChild(parrafo)
    ataquesDelJugador.appendChild(parrafo)
    ataquesDelEnemigo.appendChild(parrafo)
}

function revisarVidas(){
    if(vidaEnemigo == 0){
        crearMensajeFinal('FELICITACIONES!, GANASTE LA PARTIDA')
    } else if(vidaJugador == 0){
        crearMensajeFinal('LO SIENTO!, PERDISTE LA PARTIDA')
    }

    let sectionReinicio = document.getElementById('reiniciar')
    sectionReinicio.style.display = 'block'

}

function crearMensajeFinal(mensaje){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = mensaje

    sectionMensajes.appendChild(parrafo)

    let botonDeAtaqueFuego = document.getElementById('boton-ataque-fuego')
    botonDeAtaqueFuego.disabled = true
    
    let botonDeAtaqueAgua = document.getElementById('boton-ataque-agua')
    botonDeAtaqueAgua.disabled = true

    let botonDeAtaqueTierra = document.getElementById('boton-ataque-tierra')
    botonDeAtaqueTierra.disabled = true


}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)