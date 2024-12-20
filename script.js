let altura = 0;
let largura = 0;

function ajustarTamnhoPalcoJogo() {
    altura = window.innerHeight - 100
    largura = window.innerWidth - 100 
    
    console.log( largura, altura);
}

ajustarTamnhoPalcoJogo() 

let posX = Math.floor(Math.random() * largura) 
let posY = Math.floor(Math.random() * altura) 

console.log(posX, posY)

let moscaVariant = ["assets/images/fly1.png", "assets/images/fly2.png", "assets/images/fly3.png"]

const mosca = document.createElement("img");
mosca.src = moscaVariant[Math.floor(Math.random()* 3)]

mosca.className = "mosca1"

mosca.style.left = `${posX}px`;
mosca.style.top = `${posY}px`;

mosca.style.position = `absolute`;

document.body.appendChild(mosca)