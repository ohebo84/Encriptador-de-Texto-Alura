//Declaración de variables

let ingresoTexto = document.getElementById("ingresoTexto");
let botonEncriptar = document.getElementById("botonEncriptar");
let botonDesencriptar = document.getElementById("botonDesencriptar")
let mensajeFinal = document.getElementById("mensajeFinal");
let botonCopiar = document.getElementById("botonCopiar");
let muñeco = document.getElementById("muñeco");
let textoEncripDesencrip = document.getElementById("textoEncripDesencrip");
let derecha = document.getElementById("derecha");

//a: ai
//e: enter
//i: imes
//o: ober
//u: ufat

let codigo = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]


botonEncriptar.addEventListener("click", () => {
    let textoMinuscula = ingresoTexto.value.toLowerCase();
    if(textoMinuscula != "") {
        function encriptarTexto(texto) {
            for(let i = 0; i < codigo.length; i++) {
                if (texto.includes(codigo[i][0])) {
                    texto = texto.replaceAll(codigo[i][0], codigo[i][1]);
                }
            }
            return texto;
        }
    }else {
        alert("Ingrese texto a encriptar")
    }
    
    let textoEncriptado = encriptarTexto(textoMinuscula);
    mensajeFinal.innerHTML = textoEncriptado;
    muñeco.classList.add("oculto");
    textoEncripDesencrip.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajuste__contenido");
    mensajeFinal.classList.add("ajuste__contenido");
    ingresoTexto.value = "";
})

botonDesencriptar.addEventListener("click", () => {
    let textoMinuscula = ingresoTexto.value.toLowerCase();
    if(textoMinuscula != "") {
        function desencriptarTexto(texto) {
            for(let i = 0; i < codigo.length; i++) {
                if(texto.includes(codigo[i][1])) {
                    texto = texto.replaceAll(codigo[i][1], codigo[i][0]);
                }
            }
            return texto;
        }
    }else {
        alert("Ingrese texto a encriptar")
    }
    
    let textoDesencriptado = desencriptarTexto(textoMinuscula);
    mensajeFinal.innerHTML = textoDesencriptado;
    muñeco.classList.add("oculto");
    textoEncripDesencrip.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajuste__contenido");
    mensajeFinal.classList.add("ajuste__contenido");
    ingresoTexto.value = "";
})

botonCopiar.addEventListener("click", () => {
    let textoCopiado = mensajeFinal;
    textoCopiado.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    mensajeFinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    textoEncripDesencrip.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajuste__contenido");
    mensajeFinal.classList.remove("ajuste__contenido");
    ingresoTexto.focus();

})

