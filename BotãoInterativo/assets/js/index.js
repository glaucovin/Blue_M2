const elementoNome = document.getElementById('nome'); 
const elementoEstado = document.querySelector('#estado');
const elementoHumor = document.querySelector('#humor'); 
const elementoImg = document.querySelector('#img');
let elementoSuper = document.querySelector('#transformar');
let elementoChar = document.querySelector('#alterar');

elementoSuper.addEventListener('click', () =>{
    if(elementoSuper.value == 'primeiro'){
        elementoImg.src = './assets/img/gokussj1.jpg'
        elementoEstado.innerText = 'Super Saiyajin' 
        elementoHumor.innerText = 'Raivoso'
        elementoSuper.value = 'segundo'
    } else if(elementoSuper.value == 'segundo') {
        elementoImg.src = './assets/img/gokussj2.jpg' 
        elementoEstado.innerText = 'Super Saiyajin 2' 
        elementoHumor.innerText = 'Furioso'
        elementoSuper.value = 'terceiro' 
    } else if(elementoSuper.value == 'terceiro') {
        elementoImg.src = './assets/img/gokussj3.png' 
        elementoEstado.innerText = 'Super Saiyajin 3' 
        elementoHumor.innerText = 'Destemido'
        elementoSuper.value = 'quarto' 
    } else if(elementoSuper.value == 'quarto') {
        elementoImg.src = './assets/img/gokussj4.jpg' 
        elementoEstado.innerText = 'Super Saiyajin 4' 
        elementoHumor.innerText = 'Nostálgico'
        elementoSuper.value = 'quinto' 
    } else if(elementoSuper.value == 'quinto') {
        elementoImg.src = './assets/img/gokussjgod.jpg' 
        elementoEstado.innerText = 'Deus Super Saiyajin' 
        elementoHumor.innerText = 'Piedoso'
        elementoSuper.value = 'sexto' 
    } else if(elementoSuper.value == 'sexto') {
        elementoImg.src = './assets/img/gokussjblue.png' 
        elementoEstado.innerText = 'Super Saiyajin Blue' 
        elementoHumor.innerText = 'Controlado'
        elementoSuper.value = 'setimo' 
    } else if(elementoSuper.value == 'setimo') {
        elementoImg.src = './assets/img/gokumigattesign.jpg' 
        elementoEstado.innerText = 'Instinto Superior Presságio' 
        elementoHumor.innerText = 'Impassível'
        elementoSuper.value = 'oitavo' 
    } else if(elementoSuper.value == 'oitavo') {
        elementoImg.src = './assets/img/gokumigattefull.png' 
        elementoEstado.innerText = 'Instinto Superior Completo' 
        elementoHumor.innerText = 'Pleno'
        elementoSuper.value = 'nono' 
    } else {
        elementoImg.src = './assets/img/goku.jpg'
        elementoEstado.innerText = 'Forma base'
        elementoHumor.innerText = 'Relaxado'
        elementoSuper.value = 'primeiro'
    }
})     
elementoChar.addEventListener('click', () =>{
    if(elementoChar == 'goku'){
        elementoChar = 'vegeta'
        elementoNome.innerText = 'Príncipe Vegeta'
        if(elementoSuper.value == 'primeiro'){
            elementoImg.src = './assets/img/vegeta.jpg'
            elementoEstado.innerText = 'Forma base' 
            elementoHumor.innerText = 'Sério'
            elementoSuper.value = 'segundo'
        } else if(elementoSuper.value == 'segundo') {
            elementoImg.src = './assets/img/vegetassj1.jpeg' 
            elementoEstado.innerText = 'Super Saiyajin' 
            elementoHumor.innerText = 'Determinado'
            elementoSuper.value = 'terceiro' 
        } else if(elementoSuper.value == 'terceiro') {
            elementoImg.src = './assets/img/vegetasuper.jpg' 
            elementoEstado.innerText = 'Super Vegeta' 
            elementoHumor.innerText = 'Orgulhoso'
            elementoSuper.value = 'quarto' 
        } else if(elementoSuper.value == 'quarto') {
            elementoImg.src = './assets/img/vegetassj2.jpg' 
            elementoEstado.innerText = 'Super Saiyajin 2' 
            elementoHumor.innerText = 'Revoltado'
            elementoSuper.value = 'quinto' 
        } else if(elementoSuper.value == 'quinto') {
            elementoImg.src = './assets/img/majinvegeta.png' 
            elementoEstado.innerText = 'Majin Vegeta' 
            elementoHumor.innerText = 'Maligno'
            elementoSuper.value = 'sexto' 
        } else if(elementoSuper.value == 'sexto') {
            elementoImg.src = './assets/img/vegetassjgod.jpg' 
            elementoEstado.innerText = 'Deus Super Saiyajin' 
            elementoHumor.innerText = 'Divino'
            elementoSuper.value = 'setimo' 
        } else if(elementoSuper.value == 'setimo') {
            elementoImg.src = './assets/img/vegetassjblue.jpg' 
            elementoEstado.innerText = 'Super Saiyajin Blue' 
            elementoHumor.innerText = 'Controlado'
            elementoSuper.value = 'oitavo' 
        } else if(elementoSuper.value == 'oitavo') {
            elementoImg.src = './assets/img/vegetassjblueevolution.jpg' 
            elementoEstado.innerText = 'Super Saiyajin Blue Evolution' 
            elementoHumor.innerText = 'Despertado'
            elementoSuper.value = 'nono'
        } else if(elementoSuper.value == 'nono') {
            elementoImg.src = './assets/img/vegetadestruidor.jpg' 
            elementoEstado.innerText = 'Destruidor' 
            elementoHumor.innerText = 'Inevitável'
            elementoSuper.value = 'decimo'
        } else {
            elementoImg.src = './assets/img/vegeta.jpg'
            elementoEstado.innerText = 'Forma base' 
            elementoHumor.innerText = 'Sério'
            elementoSuper.value = 'primeiro'
        }

    }
})