function inicio() {
    console.log("Funcion inicio");
    avilitarImagen();
    limpiarCaja();
}

//Permite que se vea el muñeco y no el texto donde se transformara el texto
function avilitarImagen(){
    console.log("Funcion avilitarImagen");
    document.getElementById("textoGenerado").style.display = "none";
    document.getElementById("copiar").style.display = "none";
}

//Permite que se vea el texto y se oculte el cuadro donde esta el muñeco
function avilitarTexto(){
    console.log("Funcion avilitarTexto");
    document.getElementById("personaje").style.display = "none";
    document.getElementById("textoEsperaUno").style.display = "none";
    document.getElementById("textoEsperaDos").style.display = "none";
    document.getElementById("textoGenerado").style.display = "block";
    document.getElementById("copiar").style.display = "block";
}

//Prepara la pantalla para que se pueda mostrar los resultados
function mostrarResultado(resultado) {
    console.log("Funcion mostrarResultado");
    avilitarTexto();
    escribirResultado('#textoGenerado', resultado);
    console.log(resultado);
}

//Muestra en el cuadro de tracuccion el texto encriptado o desencriptado
function escribirResultado(elemento, texto) {
    console.log("Funcion escribirResultado");
    let textoAsignado = document.querySelector(elemento);
    textoAsignado.textContent = texto;
    console.log(texto);
}

//Limpia la caja de texto donde se ingresa el texto que se debe encriptar o desencriptar
function limpiarCaja() {
    console.log("Funcion limpiarCaja");
    document.querySelector(`#textoOrigen`).value = ``;
}

//Encripta el texto que se ingresa
function encriptarTexto() {
    console.log("Funcion encriptarTexto");
    let textoOrigen = (document.querySelector('#textoOrigen').value.toLowerCase());
    let textoModificado = [];
    let tamañoTO = 0;
    let detector = [];
        while (textoOrigen[tamañoTO] != null) {
        detector = textoOrigen[tamañoTO];
        switch (detector) {
            case 'a':
                textoModificado = textoModificado + "ai";
                break;
            case 'e':
                textoModificado = textoModificado + "enter";
                break;
            case 'i':
                textoModificado = textoModificado + "imes";
                break;
            case 'o':
                textoModificado = textoModificado + "ober";
                break;
            case 'u':
                textoModificado = textoModificado + "ufat";
                break;
            default:
                textoModificado = textoModificado + textoOrigen[tamañoTO];
        }
        tamañoTO++;
    }
    console.log("debe salir encriptado");
    console.log(textoModificado);
    mostrarResultado(textoModificado);
    limpiarCaja();
}

//Desencripta el texto que se ingresa
function desencriptarTexto() {
    console.log("Funcion desencriptarTexto");
    let textoOrigen = (document.querySelector('#textoOrigen').value.toLowerCase());
    let tamañoTO = 0;
    let textoModificado = [];
    let detector = [];
    while (textoOrigen[tamañoTO] != null) {
        detector = textoOrigen[tamañoTO];
        switch (detector) {
            case 'a':
                textoModificado = textoModificado + "a";
                tamañoTO = tamañoTO + 1;
                break;
            case 'e':
                textoModificado = textoModificado + "e";
                tamañoTO = tamañoTO + 4;
                break;
            case 'i':
                textoModificado = textoModificado + "i";
                tamañoTO = tamañoTO + 3;
                break;
            case 'o':
                textoModificado = textoModificado + "o";
                tamañoTO = tamañoTO + 3;
                break;
            case 'u':
                textoModificado = textoModificado + "u";
                tamañoTO = tamañoTO + 3;
                break;
            default:
                textoModificado = textoModificado + textoOrigen[tamañoTO];
        }
        tamañoTO++;
    }
    console.log(textoModificado);
    mostrarResultado(textoModificado);
    limpiarCaja();
}

//Funcion de copiar el texto encriptado o desencriptado
function copiarTexto(){
    console.log("Funcion copiarTexto");
    const textoCopiado = document.querySelector('#textoGenerado');
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
}

inicio();