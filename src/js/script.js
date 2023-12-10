const formulario = document.getElementById("form-qr-code");
const elemento = document.getElementById("qr-imagem");
const texto = document.getElementById("input-texto");
let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="

formulario.addEventListener("submit", function(event) {
    event.preventDefault()
    elemento.src = url + texto.value;
})