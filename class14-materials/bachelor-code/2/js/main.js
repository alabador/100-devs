const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
    document.querySelector('body').style.backgroundColor = 'pink'
}

function claireNext(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
    document.querySelector('body').style.backgroundColor = 'gray'
}

function sharleenNext(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
    document.querySelector('body').style.backgroundColor = 'teal'
}