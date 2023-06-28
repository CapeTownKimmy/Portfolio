// Card Display //
const cards = document.querySelectorAll('.card'); //Array of Cards//
const cardText = document.querySelectorAll('.cardName');

// Contact Pop Up //
const contactBtn = document.getElementById('contact');
const overlay = document.getElementById('overlay');
const popUp = document.getElementById('popUpContainer');
const closePopUpBtn = document.getElementById('closeBtn');


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

// Contact Pop Up - Events and Functions //
contactBtn.addEventListener('click', showPopUp); // Show Pop Up on Click//
closePopUpBtn.addEventListener('click', closePopUp); // Close on Click X //
overlay.addEventListener('click', closePopUp); // Close on overlay click //

function showPopUp(event) {
    overlay.hidden = false;
    popUp.style.visibility = 'visible';
    popUp.style.opacity = '1';
}
function closePopUp(event) {
    overlay.hidden = true;
    popUp.style.opacity = '0';
    popUp.style.visibility = 'hidden';
}

