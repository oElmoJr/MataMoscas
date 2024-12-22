
let altura = 0;
let largura = 0;
let vidas = 3
var timer = 16;
var spawnTimer = 1000;

let nivel = window.location.search
nivel = nivel.replace("?", "")

if (nivel === "1") {
    spawnTimer = 1500
    var timer = 11;
} else if (nivel === "2") {
    spawnTimer = 1000
    var timer = 16;
} else {
    spawnTimer = 750
    var timer = 21;
}


function ajustarTamnhoPalcoJogo() {
    altura = window.innerHeight - 150
    largura = window.innerWidth - 150 
    
    console.log( largura, altura);
}

ajustarTamnhoPalcoJogo() 

cronometro = setInterval(() =>{

    if (timer > 0) {
        timer--
        document.getElementById("timer"). innerHTML = timer
    } else {
        clearInterval(cronometro)
        clearInterval(Spawn)
        window.location.href = "https://oelmojr.github.io/MataMoscas/vitoria.html" 
        // window.location.href = "/vitoria.html" 
    }

}, 1000)
   const audioWrong = document.getElementById("wrong")

function CriaMosca() {

    if (document.getElementById("mosca")) {
        document.getElementById("mosca").remove()
        
        audioWrong.currentTime = 0; 
        audioWrong.play();
        
        setTimeout(() => audioWrong.pause(), 500);
        
        if (vidas > 0) {
            document.getElementById(`v${vidas}`).src = "assets/images/vidaVazia.png"
            vidas--;

        } else {
            window.location.href = "https://oelmojr.github.io/MataMoscas/gameover.html"
            // window.location.href = "/gameover.html"
        }
    }


    let posX = Math.floor(Math.random() * largura) 
    let posY = Math.floor(Math.random() * altura) 

    let moscaSkinVariant = ["assets/images/fly1.png", "assets/images/fly2.png", "assets/images/fly3.png"];
    let moscaSizeVariant = ["mosca1", "mosca2", "mosca3"];
    let moscaAxisVariant = ["ladoB", "ladoA"];
    
    let mosca = document.createElement("img");
    
    mosca.src = moscaSkinVariant[ramdomNumber(moscaSkinVariant.length)]
    mosca.className = `${moscaSizeVariant[ramdomNumber(moscaSizeVariant.length)]} ${moscaAxisVariant[ramdomNumber(moscaAxisVariant.length)]}`
    mosca.id = "mosca"
    
    mosca.style.left = `${posX}px`;
    mosca.style.top = `${posY}px`;
    
    mosca.style.position = `absolute`;
    let audioSlap = document.getElementById("slap")
    let audioFly = document.getElementById("audioFly")
    
    mosca.onclick = function() {
        this.remove();
        audioSlap.currentTime = 0;
        audioSlap.play();
        audioFly.pause()
        
        setTimeout(() => audioSlap.pause(), 500);
        
    };
    
    document.body.appendChild(mosca)   
    
    audioFly.currentTime = 0;
    audioFly.play();
    
    setTimeout(() => audioFly.pause(), spawnTimer-100);

}


let Spawn = setInterval(() => CriaMosca(), spawnTimer);


function ramdomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function iniciarJogo(params) {
    
}

