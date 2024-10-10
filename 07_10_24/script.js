function appendToDisplay(value) {
    // Declara la función que toma un argumento, en este caso 'value'.
    
    document.getElementById('display').value += value;
    // Accede al elemento con el id 'display' y agrega el 'value' al final del contenido actual del campo.
}

function clearDisplay() {
    // Declara la función clearDisplay, que no recibe argumentos.
    
    document.getElementById('display').value = '';
    // Establece el valor del campo de entrada 'display' como una cadena vacía, limpiando la pantalla.
}

function deleteLast() {
    // Declara la función deleteLast, que no recibe argumentos.
    
    let displayValue = document.getElementById('display').value;
    // Guarda el valor actual del campo 'display' en la variable displayValue.
    
    document.getElementById('display').value = displayValue.slice(0, -1);
    // Actualiza el campo 'display' eliminando el último carácter del valor actual usando slice().
}

function calculateResult() {
    // Declara la función calculateResult, que no recibe argumentos.
    
    try {
        // Inicia un bloque try para manejar posibles errores durante la evaluación.
        
        let result = eval(document.getElementById('display').value);
        // Utiliza eval() para evaluar la expresión matemática en el campo 'display' y guarda el resultado en 'result'.
        
        document.getElementById('display').value = result;
        // Establece el campo 'display' con el resultado de la evaluación.
    } catch (error) {
        // Captura cualquier error que ocurra durante la evaluación de la expresión.
        
        alert('Expresión inválida');
        // Muestra un mensaje de alerta si hay un error, indicando que la expresión es inválida.
    }
}
