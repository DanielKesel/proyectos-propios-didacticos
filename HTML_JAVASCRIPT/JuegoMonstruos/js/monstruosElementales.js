function iniciarJuego(){

    let botonActivaMonstruoJugador = document.getElementById('boton-montruo')
    botonActivaMonstruoJugador.addEventListener('click', seleccionarMonstruoJugador)

}

function seleccionarMonstruoJugador(){

    let inputHydra = document.getElementById('hydra')
    let inputFireStar = document.getElementById('fireStar')
    let inputRocky = document.getElementById('rocky')

    if(inputHydra.checked){
        alert('SELECCIONASTE AL MONSTRUO HYDRA')
    } else if(inputFireStar.checked) {
        alert('SELECCIONASTE AL MONSTRUO FIRESTAR')
    } else if(inputRocky.checked) {
        alert('SELECCIONASTE AL MONSTRUO ROCKY')
    } else {
        alert('Por favor, selecciona al monstruo estratégicamente')
    }
}



window.addEventListener('load', iniciarJuego)