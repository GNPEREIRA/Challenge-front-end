/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
 */

var msg= document.querySelector("textarea");
var msgCriptografada;
var msgDescriptografada;
let texto;
var img;

function criptografa()
{
    const n = msg.value;

    if(n == ""){
        alert('Digite algo!');
    }else{
        /* troca os termos especificados */
        msgCriptografada = n.replaceAll("a","ai").replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
        //console.log(msgCriptografada);

        /* Esconde a imagem da id=div2 */
        img = document.getElementById("id-observador");
        img.style.display = "none";

        /* Mostra a textarea com texto criptogrado na id=div2 */
        const section = document.getElementById("div2")
        texto = document.createElement('textarea');
        texto.innerHTML = msgCriptografada;
        section.appendChild(texto); 

        /* limpa texto do text area */
        var clear = document.getElementById("textarea").value = "";

        /* desabilita botao criptografar */
        document.querySelector("button").disabled = true;
    }
    
}    

function descriptografa()
{
   if(texto == undefined){
    alert("Criptografe algo antes!");
   }else{
    msgDescriptografada = msgCriptografada.replaceAll("ufat", "u").replaceAll("ober", "o").replaceAll("imes","i").replaceAll("enter","e").replaceAll("ai","a");
    //console.log(msgDescriptografada);

    /* mostra texto textarea id=div1 */
    document.getElementById("textarea").value = msgDescriptografada;
    
    /* esconde textarea id=div2*/
    texto.style.display = "none";

    /* mostra imagem observador id=div2 */
    img.style.display = "block";

    /* habilita botão criptografar */
    document.querySelector("button").disabled = false;

    msgCriptografada = "";

   }
    
    
}





