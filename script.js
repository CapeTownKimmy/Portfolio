// Card Display //
const cards = document.querySelectorAll('.card'); //Array of Cards//
const cardText = document.querySelectorAll('.cardName');
const caption = document.querySelectorAll('.caption');


// Card Display - Functions //
cardText.forEach(element => {
if(element.innerHTML === ''){
    element.innerHTML = 'Coming Soon...';
    element.style.color = '#949fa6';
    element.style.backgroundColor = '#b4bbbf'
    element.style.boxShadow = 'none';
    let cardBorder = element.parentElement.parentElement;
    cardBorder.style.border = 'none';  
    } 
})
