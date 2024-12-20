let altura = 0;
let largura = 0;

function ajustarTamnhoPalcoJogo() {
    altura = window.innerHeight - 150
    largura = window.innerWidth - 150 
    
    console.log( largura, altura);
}

ajustarTamnhoPalcoJogo() 

let posX = Math.floor(Math.random() * largura) 
let posY = Math.floor(Math.random() * altura) 

console.log(posX, posY)

let moscaVariant = ["assets/images/fly1.png", "assets/images/fly2.png", "assets/images/fly3.png"];
let moscaSizeVariant = ["mosca1", "mosca2", "mosca3"];

const mosca = document.createElement("img");

mosca.src = moscaVariant[ramdomNumber()]
mosca.className = moscaSizeVariant[ramdomNumber()]

mosca.style.left = `${posX}px`;
mosca.style.top = `${posY}px`;

mosca.style.position = `absolute`;

document.body.appendChild(mosca)

function ramdomNumber() {
    return Math.floor(Math.random() * 3);
}