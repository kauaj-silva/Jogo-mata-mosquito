var width = window.innerHeight
var height = window.innerWidth
var vidas = 1
var time = 15

var createMosquitoTime = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

switch(nivel) {
    case 'normal':
        createMosquitoTime = 1500
        break 
    case 'dificil':
        createMosquitoTime = 1000
        break
    case 'chuck':
        createMosquitoTime = 750
}

function setPositions() {
    var positions = []
    var positionX = Math.round((Math.random() * height) - 90) 
    var positionY = Math.round((Math.random() * width) - 90) 
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    positions[0] = positionX
    positions[1] = positionY
    return positions
}


function adjustSize() {
    var width = window.innerWidth
    var height = window.innerHeight
}

function randomPosition() {

    if(document.getElementById('mosquito')){
        if(vidas>3) {
            window.location.href = 'gameover.html'
        }else {
          document.getElementById('mosquito').remove()
          document.getElementById('v'+ vidas).src = '../img/coracao_vazio.png'
          vidas++  
        }
        

    }
    var mosquito = document.createElement('img')
    var mosquitoSize = randomSize()
    var mosquitoSide = randomSide()
    var listPositions = setPositions()
    var positionX = listPositions[0]
    var positionY = listPositions[1]

    mosquito.src = '../img/mosquito.png'
    mosquito.id = 'mosquito'
    mosquito.className = 'mosquito1 ' + mosquitoSide
    mosquito.style.left = positionX +'px'
    mosquito.style.top =  positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.style.width = mosquitoSize + 'px'
    mosquito.style.height = mosquitoSize + 'px'
    document.body.appendChild(mosquito)
    mosquito.onclick = function () {
       this.remove()
    } 
} 

function randomSize() {
    var mosquitoSize = Math.round(Math.random() * 80) 

    if(mosquitoSize<30) {
        mosquitoSize = 40
    } else {
        mosquitoSize = mosquitoSize
    }
    return mosquitoSize
}

function randomSide() {
    var classe = Math.round(Math.random()*2)
    switch(classe) {
        case 1:
            classe = 'ladoA'
            break;
        case 2: 
            classe = 'ladoB'
            break;
    } 
    return classe
}

var cronometro = setInterval(function() {
    time-=1
    if(time<0) {
        clearInterval(cronometro)
        clearInterval(randomPosition())
        window.location.href = 'victory.html'
    }else {
        document.getElementById('cronometro').innerHTML = time
        }
    },1000)
