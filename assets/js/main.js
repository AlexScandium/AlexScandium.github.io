/*------------PROPERTIES--------------*/

const accueil = document.getElementById('accueil-button');
const jeux = document.getElementById('jeux-button');
const apropos = document.getElementById('apropos-button');

const buttons = new Array(accueil,jeux,apropos);

const accueilContent = document.getElementById( 'accueil-content' );
const jeuxContent = document.getElementById( 'jeux-content' );
const aproposContent = document.getElementById( 'apropos-content' );

const openDescriptionButtons = document.getElementsByClassName('gameiconarea');
const closeDescriptionButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

var currentDescription;
var currentButton;

/*---------INIT HTML ELEMENTS---------*/

//Init navbar
setActiveNavBtn(accueil, false);
currentButton = accueil;

/*-----------INIT LISTENERS-----------*/

//Init navbar button
for (var i = buttons.length - 1; i >= 0; i--) {
	let btn = buttons[i];
	btn.onclick = function() {
		switchNavBarBtn(btn);
	}
}

//Init navbar update on scroll
document.addEventListener( 'scroll', event => {
  activeButtonByContent(accueilContent,accueil);
  activeButtonByContent(jeuxContent,jeux);
  activeButtonByContent(aproposContent,apropos);
});

//Init popins openning
for (var i = openDescriptionButtons.length - 1; i >= 0; i--) {
	const descirptionBtn = openDescriptionButtons[i];

	descirptionBtn.onclick = function(){
		let description = document.querySelector(descirptionBtn.dataset.modalTarget);
		openDescription(description);
	}
}

//Init popins closing
for (var i = closeDescriptionButtons.length - 1; i >= 0; i--) {
	const closeBtn = closeDescriptionButtons[i];

	closeBtn.onclick = function(){
		closeDescription();
	}
}

//Init overlay for closing popin
overlay.onclick = function(){
	closeDescription();
}

/*-------------METHODS----------------*/

//Active or Deactive the scrolling of the page
function setScroll(bool){
	if (bool){
		document.body.classList.add("active");
	}
	else{
		document.body.classList.remove("active");
	}
}

//Switch to a new active button and deactivate the previous one
function switchNavBarBtn(button){
	setActiveNavBtn(currentButton, true);
	setActiveNavBtn(button, false);
	currentButton = button
}

//Active or deactive the button
function setActiveNavBtn(button, isActive){
	if (!isActive){
		button.classList.remove("navigate");
		button.classList.add("active");
	}
	else {
		button.classList.remove("active");
		button.classList.add("navigate");
	}
}

//Check if an element is in the viewport
function inViewportMiddle(element){
	let rect = element.getBoundingClientRect();
	return !(rect.top > innerHeight/3 || rect.bottom < 0);
}

//Active the current button corresponding to the main content on the viewport
function activeButtonByContent(content, btn){
	if( inViewportMiddle(content) )
		switchNavBarBtn(btn);
}

//Open a popin
function openDescription(description){
	if (description == null) return;

	currentDescription = description;
	description.classList.add('active');
	overlay.classList.add('active');
	setScroll(false);
	// reloadVideos();
}

//Close a popin
function closeDescription(){
	if (currentDescription == null) return;

	currentDescription.classList.remove('active');
	overlay.classList.remove('active');
	setScroll(true);
	// stopVideos();
}