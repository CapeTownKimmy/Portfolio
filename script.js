// Card Display //
const cards = document.querySelectorAll('.card'); //Array of Cards//
const cardText = document.querySelectorAll('.cardName');


// Card Display - Functions //
cardText.forEach(element => {
if(element.innerHTML === ''){
    element.innerHTML = 'Coming Soon...';
    element.style.color = '#949fa6';
    element.style.backgroundColor = '#b4bbbf'
    element.style.boxShadow = 'none';
    let noInteract = element.parentElement.parentElement; // Stop interaction on empty project divs //
    noInteract.style.border = 'none';
    noInteract.style.scale = '1';
    noInteract.style.boxShadow = '.3rem .3rem .5rem #394a59';
    noInteract.style.cursor = 'auto';
    } 
})
