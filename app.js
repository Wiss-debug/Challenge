function encriptar() {
    var input = document.getElementById('inputText').value;
    var output = document.getElementById('outputText');
    var encryptedText = input.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
    output.value = encryptedText;
    if(document.getElementById('divCopiar').style.display="none" && document.getElementById('inputText').value !== ''){
        document.getElementById('divImg').style.display="none"
        document.getElementById('divCopiar').style.display="block"
    }


    document.getElementById('inputText').value = '';

 
    toggleDesencriptarButton(false);
}

function desencriptar() {
    var input = document.getElementById('inputText').value;
    var output = document.getElementById('outputText');
    var decryptedText = input.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    output.value = decryptedText;
    document.getElementById('inputText').value = '';

    
    toggleDesencriptarButton(false);
}



function copiar() {
    var output = document.getElementById('outputText');
    output.select();
    output.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    output.value = ''; // Reiniciar el campo de salida
}

function checkInput() {
    var input = document.getElementById('inputText').value;
    if (input.trim() !== '') {
        toggleDesencriptarButton(true);
    } else {
        toggleDesencriptarButton(false);
    }
}

function handlePaste() {
    setTimeout(checkInput, 100); // Esperar un poco para permitir que el texto se pegue
}

function toggleDesencriptarButton(enable) {
    var desencriptarButton = document.getElementById('desencriptarButton');
    desencriptarButton.disabled = !enable;
    if (enable) {
        desencriptarButton.classList.add('active');
    } else {
        desencriptarButton.classList.remove('active');
    }
}