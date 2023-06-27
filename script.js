const cards = document.querySelectorAll('.card'); //Array of Cards//
const cardText = document.querySelectorAll('h2');

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
