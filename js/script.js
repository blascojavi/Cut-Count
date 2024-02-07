// consultarAPI.js

// contadorCaracteres.js


function contarCaracteres() {
    // Obtener el valor del textbox
    const texto = document.getElementById('texto').value;

    // Contar el número de caracteres
    const numeroDeCaracteres = texto.length;

    // Mostrar el contador en el área correspondiente
    document.getElementById('contadorCaracteres').innerText = 'Número de caracteres: ' + numeroDeCaracteres;
}

// contarMostrarPieces.js

    
// Función principal para contar y mostrar pieces
function contarYMostrarPieces() {
    // Obtener el valor del textbox de los pieces
    const inputText = document.getElementById('inputPieces').value;

    // Obtener el valor del textbox del delimitador
    const delimiter = document.getElementById('delimitador').value || '#'; // Valor predeterminado es '#'
    const prevdelimiter = delimiter
  

    // Calcular el número de pieces
    const numeroDePieces = contarPieces(inputText, delimiter);

    // Mostrar la información de pieces en el frontend
    document.getElementById('infoPieces').innerText = 'Número de Pieces: ' + numeroDePieces;
}

// Función auxiliar para contar pieces
function contarPieces(inputText, delimiter) {
    // Implementa lógica para contar pieces
    // Aquí puedes utilizar el método split para dividir el texto en pieces
    // y luego contar la longitud del array resultante
    const piecesArray = inputText.split(delimiter);
    return piecesArray.length;
}

// Evento para actualizar el conteo de pieces al cambiar el delimitador
document.getElementById('delimitador').addEventListener('input', contarYMostrarPieces);

