let pista = parseInt(document.getElementById("qtd-pista").textContent.trim());
let superior = parseInt(
  document.getElementById("qtd-superior").textContent.trim()
);
let inferior = parseInt(
  document.getElementById("qtd-inferior").textContent.trim()
);
let lista = document.querySelector(".lista");



let botao = document.querySelector("button");

function comprar() {
  let ingresso = document.getElementById("tipo-ingresso").value;
  let quantidade = document.getElementById("qtd").value;
  //PISTA
if(quantidade < 0  ){
   alert('digite um numero valido')
 
}else{
  if (ingresso == "pista") {
    if (quantidade <= pista) {
      pista = pista - quantidade;
      lista.innerHTML = `<ul class="lista">
         <li>Pista<span id="qtd-pista">${pista}</span></li>
         <li>Cadeira superior <span id="qtd-superior">${superior}</span></li>
         <li>Cadeira inferior <span id="qtd-inferior">${inferior}</span></li>
         
     </ul>
     `;
    } else if (quantidade > pista) {
       alert('Nao há mais ingressos para a pista')
      return;
    }
  }
    //SUPERIOR
  if (ingresso == "superior") {
    
    if (quantidade <= superior) {
      superior = superior - quantidade;
      lista.innerHTML = `<ul class="lista">
         <li>Pista<span id="qtd-pista">${pista}</span></li>
         <li>Cadeira superior <span id="qtd-superior">${superior}</span></li>
         <li>Cadeira inferior <span id="qtd-inferior">${inferior}</span></li>
         
     </ul>`;
    } else if (quantidade > superior) {
      alert("Nao ha mais ingressos disponiveis para a cadeira superior");
    
      return;
    }
  }
  if (ingresso == "inferior") {
    
    if (quantidade <= inferior) {
      inferior = inferior - quantidade;
      lista.innerHTML = `<ul class="lista">
         <li>Pista<span id="qtd-pista">${pista}</span></li>
         <li>Cadeira superior <span id="qtd-superior">${superior}</span></li>
         <li>Cadeira inferior <span id="qtd-inferior">${inferior}</span></li>
         
     </ul> `;
    } else if (quantidade > inferior) {
      alert("Nao ha mais ingressos no inferior");
      
    }
  }
  
}


}
