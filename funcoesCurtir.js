function Avaliar(coracao) {
 var url = window.location;
 url = url.toString()
 url = url.split("TelaPrincipal.html");
 url = url[0];

 var c1 = document.getElementById("c1").src;
 var avaliacao = 0;

 
 //ESTRELA 1
if (coracao == 1){ 
 if (c1 == url + "img/core1.png") {
 document.getElementById("c1").src = "img/core0.png";
 avaliacao = 1;
 } else {
 document.getElementById("c1").src = "img/core1.png";
 avaliacao = 0;
}}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}