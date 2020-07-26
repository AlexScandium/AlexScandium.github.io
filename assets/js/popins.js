/*------------PROPERTIES--------------*/

const openDescriptionButtons = document.getElementsByClassName('gameiconarea');
const closeDescriptionButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

var currentDescription;

/*---------INIT HTML ELEMENTS---------*/


/*-----------INIT LISTENERS-----------*/

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