let textoEntrada = "";
let textoSaida = "";
let botaoCopiar = "";
const regex = /^[a-z ]+$/;

document.getElementById('copiar__texto').style.display = 'none';

function criptografar() {
    const resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value.toLowerCase();

    textoSaida = textoEntrada.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    botaoCopiar = textoSaida;           
    resultado.innerHTML = textoSaida;

    document.getElementById('mobile_info').style.display = 'none';
    document.getElementById('copiar__texto').style.display = 'block';
}

function descriptografar() {
    const resultado = document.getElementById('resultado');
    textoEntrada = document.querySelector('textarea').value.toLowerCase();

    textoSaida = textoEntrada.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");

    botaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;

    document.getElementById('mobile_info').style.display = 'none';
    document.getElementById('copiar__texto').style.display = 'block';
}

function copiarCriptografia() {
    navigator.clipboard.writeText(botaoCopiar)
        .then(() => {
            alert('Texto copiado com sucesso!');
            limparTela(); 
        })
        .catch(err => {
            console.error('Erro ao copiar o texto:', err);
        });
}

function limparTela() {
    document.querySelector('textarea').value = "";
    document.getElementById('resultado').innerHTML = ""; 
    document.getElementById('mobile_info').style.display = 'block'; 
    document.getElementById('copiar__texto').style.display = 'none'; 
    document.getElementById('exclamation').style.color = '#495057'; 
}

function validacaoCriptografia(){
    textoEntrada = document.querySelector('textarea').value.toLowerCase();

    if (regex.test(textoEntrada)) {
        document.getElementById('exclamation').style.color = '#495057'; 
        criptografar();   
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('mobile_info').style.display = 'block';
        document.getElementById('copiar__texto').style.display = 'none';
        document.getElementById('exclamation').style.color = '#e63636'; 
    }
}

function validacaoDescriptografia() {
    textoEntrada = document.querySelector('textarea').value.toLowerCase();

    if (regex.test(textoEntrada)) {
        document.getElementById('exclamation').style.color = '#495057'; 
        descriptografar();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('mobile_info').style.display = 'block';
        document.getElementById('copiar__texto').style.display = 'none';
        document.getElementById('exclamation').style.color = '#e63636'; 
    }
}