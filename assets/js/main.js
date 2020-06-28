const accueil = document.getElementById('accueil-button');
const jeux = document.getElementById('jeux-button');
const apropos = document.getElementById('apropos-button');

const buttons = new Array(accueil,jeux,apropos);

const openDescriptionButtons = document.getElementsByClassName('game-icon');
const closeDescriptionButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

var currentDescription;

accueil.className = "active-button";

accueil.onclick = function(){
	for (let j = buttons.length - 1; j >= 0; j--) {
		buttons[j].className = "navigation-button";
	}
	accueil.className = "active-button";
}

jeux.onclick = function(){
	for (let j = buttons.length - 1; j >= 0; j--) {
		buttons[j].className = "navigation-button";
	}
	jeux.className = "active-button";
}

apropos.onclick = function(){
	for (let j = buttons.length - 1; j >= 0; j--) {
		buttons[j].className = "navigation-button";
	}
	apropos.className = "active-button";
}

for (var i = openDescriptionButtons.length - 1; i >= 0; i--) {
	const descirptionBtn = openDescriptionButtons[i];

	descirptionBtn.onclick = function(){
		let description = document.querySelector(descirptionBtn.dataset.modalTarget);
		openDescription(description);
	}
}

for (var i = closeDescriptionButtons.length - 1; i >= 0; i--) {
	const closeBtn = closeDescriptionButtons[i];

	closeBtn.onclick = function(){
		closeDescription();
	}
}

overlay.onclick = function(){
	closeDescription();
}

function openDescription(description){
	if (description == null) return;

	currentDescription = description;
	description.classList.add('active');
	overlay.classList.add('active');
}

function closeDescription(){
	if (currentDescription == null) return;

	currentDescription.classList.remove('active');
	overlay.classList.remove('active');
}