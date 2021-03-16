var img = document.getElementById('doggoIMG')
var dogRaca = document.getElementById('doggoName')
var dogoLink = document.getElementById('doggoLink')

async function getContent(){
    img.src="load.gif";
    dogoLink.innerHTML = "loading.."
    try {
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await resposta.json();
        img.src = data.message
        dogoLink.innerHTML = data.message;
    } catch (error) {
        alert(error)
    }  
}

getContent()

async function searchDoggo(valor){
    img.src="load.gif";
    dogRaca.innerHTML = "loading.."
    dogoLink.innerHTML = "loading.."
    try {
        const response = await fetch('https://dog.ceo/api/breed/'+valor.toLowerCase()+'/images/random')
        const data = await response.json();
        img.src = data.message
        dogoLink.innerHTML = data.message;
        dogRaca.innerHTML = valor
    } catch (error) {
        
    }
}