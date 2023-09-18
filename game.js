var height = 0
var widht= 0
var life = 1
var tempo = 20

var dificuldade = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){

dificuldade = 1500

}else if (nivel === 'dificil' ){

dificuldade = 1000

}else{

dificuldade = 750

}

function adjust() {
	height = window.innerHeight
	widht = window.innerWidth

	console.log(height, widht)
	
}

adjust()

var cronometro = setInterval(function() {

	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(spawn)
		window.location.href = "victory.html"

	}else{
	document.getElementById('cronos').innerHTML = tempo
}
         
}, 1000)


function randomic() {

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
        
        if(life > 3){
        	window.location.href = "game_over.html"
        }else{
		document.getElementById('hp' + life).src = "imagens/coracao_vazio.png"

		life++
		}
	}
	

var positionX = Math.floor(Math.random() * widht) - 90

var positionY = Math.floor(Math.random() * height) - 90

positionX = positionX < 0 ? 0 : positionX

positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY )

var mosquito = document.createElement('img')

mosquito.src = 'imagens/mosca.png'

mosquito.className = size() + ' ' + ladoaleatorio()

mosquito.style.left = positionX + 'px'

mosquito.style.top = positionY + 'px'

mosquito.style.position = 'absolute'

mosquito.id = 'mosquito'

mosquito.onclick = function() {
	this.remove()
}

document.body.appendChild(mosquito)


}

function size(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
	case 0:
		return 'mosquito1'
	case 1: 
		return 'mosquito2'
	case 2:
		return 'mosquito3'
	}
}

function ladoaleatorio() {

	var lado = Math.floor(Math.random() * 2)

	switch(lado){
	case 0:
		return 'ladoA'
	case 1: 
		return 'ladoB'
	
	}
}



