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

let moscaSkinVariant = ["assets/images/fly1.png", "assets/images/fly2.png", "assets/images/fly3.png"];
let moscaSizeVariant = ["mosca1", "mosca2", "mosca3"];
let moscaAxisVariant = ["ladoB", "ladoA"];

const mosca = document.createElement("img");

mosca.src = moscaSkinVariant[ramdomNumber(moscaSkinVariant.length)]
mosca.className = `${moscaSizeVariant[ramdomNumber(moscaSizeVariant.length)]} ${moscaAxisVariant[ramdomNumber(moscaAxisVariant.length)]}`

mosca.style.left = `${posX}px`;
mosca.style.top = `${posY}px`;

mosca.style.position = `absolute`;

document.body.appendChild(mosca)

function ramdomNumber(limit) {
    return Math.floor(Math.random() * limit);
}