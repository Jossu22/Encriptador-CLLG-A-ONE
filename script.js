var vocalesEncrip = {
    "a": "ai" , "e": "enter" , "i": "imes" , "o": "ober", "u": "ufat"
};
var vocalesDeencrip = {
    "ai": "a" , "enter": "e" , "imes": "i" , "ober": "o", "ufat": "u"
};
function Encriptar() {
    let texto = document.getElementById("itxt").value;
    var nuevotexto = texto.replace(/[aeiou]/g, function(match){
        return vocalesEncrip[match];
    });
    document.getElementById("otxt").value = nuevotexto;                          
}
function Desencriptar() {
    let texto = document.getElementById("itxt").value;
    var nuevotexto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match){
        return vocalesDeencrip[match];
    });
    document.getElementById("otxt").value = nuevotexto;                          
}
function ValidarTexto(){
    var verificardor = false;
    let texto = document.getElementById("itxt").value;
    acentos = /[áéíóúÁÉÍÓÚ]/;
    mayus = /[A-Z]/; 
    if (acentos.test(texto) || mayus.test(texto)) {
        verificardor = true;
    }
    if (verificardor == false){                  
        Encriptar();
    }else{
        alert("Evite usar acentos o mayúsculas en el texto");
    }
}
function Copiarotxt(){
    var oTextarea = document.getElementById("otxt");
    oTextarea.select();
    document.execCommand("copy");
} 