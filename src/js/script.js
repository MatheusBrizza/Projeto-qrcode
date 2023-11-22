const elemento = document.getElementById("qr-imagem");
let texto = document.getElementById("input-texto");
let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
let urlCompleta = url.concat(texto)

