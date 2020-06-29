const accueil = document.getElementById('accueil-button');
const jeux = document.getElementById('jeux-button');
const apropos = document.getElementById('apropos-button');

const buttons = new Array(accueil,jeux,apropos);

const openDescriptionButtons = document.getElementsByClassName('game-icon');
const closeDescriptionButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

var currentDescription;
var currentButton;

//Init navbar
updateNavBtn(accueil, false);
currentButton = accueil;

//Activation des boutons de la nav bar
for (var i = buttons.length - 1; i >= 0; i--) {
	let btn = buttons[i];
	btn.onclick = function() {
		switchNavBarBtn(btn);
	}
}

function switchNavBarBtn(button){
	updateNavBtn(currentButton, true);
	updateNavBtn(button, false);
	currentButton = button
}

function updateNavBtn(button, isActive = false){
	if (!isActive){
		button.classList.remove("navigate");
		button.classList.add("active");
	}
	else {
		button.classList.remove("active");
		button.classList.add("navigate");
	}
}

//Ouverture et fermertures des popins sur l'ecran des jeux
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

//Instantiation des jeux sur la page de sélection

const gamesData = [
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	},
	{
		name: "Psycho Defender",
		image: "../../images/psychodfender_vignette.png",
	},
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	},
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	},
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	},
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	},
	{
		name: "Bug Jungle",
		image: "../../images/bugjungle_vignette.png",
	}
]

const gameContainer = document.getElementById('jeux-content');
