function validarMensaje() {
    var mensajeInput = document.getElementById("mensaje").value;
    var mensajeError = document.getElementById("mensajeError");
    var caracteresPermitidos = /^[a-z\s]+$/;
        if (!caracteresPermitidos.test(mensajeInput)) {
        mensajeError.innerText = "¡¡¡¡ERROR!!!! Solo se permiten letras minúsculas y espacios en el mensaje.";
        } else {
            mensajeError.innerText = "";
    }
}

function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var resultado = '';
       for (var i = 0; i < mensaje.length; i++) {       
            var caracter = mensaje[i];       
                switch (caracter) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;            
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += caracter; 
        }
    }    
    document.getElementById("resultado").value = resultado;
}
function desencriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var resultado = '';   
    for (var i = 0; i < mensaje.length; i++) {  
        var caracter = mensaje[i];       
            switch (caracter) {
                case 'a':
                    if (mensaje[i + 1] === 'i') {
                    resultado += 'a'; 
                    i += 1; 
                    } else {
                    resultado += caracter; 
                    }
                break;
                case 'e':
                    if (mensaje[i + 1] === 'n' && mensaje[i + 2] === 't' && mensaje[i + 3] === 'e' && mensaje[i + 4] === 'r') {
                    resultado += 'e'; 
                    i += 4; 
                    } else {
                        resultado += caracter; 
                }
                break;
                case 'i':
                    if (mensaje[i + 1] === 'm' && mensaje[i + 2] === 'e' && mensaje[i + 3] === 's') {
                    resultado += 'i'; 
                    i += 3; 
                    } else {
                    resultado += caracter; 
                }
                break;            
                case 'o':
                    if (mensaje[i + 1] === 'b' && mensaje[i + 2] === 'e' && mensaje[i + 3] === 'r') {
                    resultado += 'o'; 
                    i += 3; 
                } else {
                    resultado += caracter; 
                }
                break;
                case 'u':
                    if (mensaje[i + 1] === 'f' && mensaje[i + 2] === 'a' && mensaje[i + 3] === 't') {
                    resultado += 'u'; 
                    i += 3; 
                } else {
                    resultado += caracter; 
                }
                break;
            default:
                resultado += caracter; 
        }
    }

    
    document.getElementById("resultado").value = resultado;
}

function copyMsg() {
    
    var resultadoTextarea = document.getElementById('resultado');
    resultadoTextarea.select();
    
    
    document.execCommand('copy');

    
    window.getSelection().removeAllRanges();

   
}
function limpiar() {
    // Borrar contenido de los textarea
    document.getElementById('mensaje').value = '';
    document.getElementById('resultado').value = '';

    // Borrar mensaje de error
    document.getElementById('mensajeError').innerText = '';
}


