// Card Display //
const cards = document.querySelectorAll('.card'); //Array of Cards//
const cardText = document.querySelectorAll('.cardName');

// Contact Pop Up //
// const contactBtnIndex = document.getElementById('contactIndex');
// const overlay = document.getElementById('overlay');
// const popUp = document.getElementById('popUpContainer');
// const closePopUpBtn = document.getElementById('closeBtn');


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
// contactBtnIndex.addEventListener('click', showPopUp); // Show Pop Up on Click - Index Page //
// closePopUpBtn.addEventListener('click', closePopUp); // Close on Click X //
// overlay.addEventListener('click', closePopUp); // Close on overlay click //

function showPopUp(event) {
    overlay.hidden = false;
    popUp.style.visibility = 'visible';
    popUp.style.opacity = '1';
    console.log(event.target);
}
function closePopUp(event) {
    overlay.hidden = true;
    popUp.style.opacity = '0';
    popUp.style.visibility = 'hidden';
}
