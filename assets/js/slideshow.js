var slideId = ["mySlides1", "mySlides2","mySlides3","slidesGame4","slidesGame5","mySlides6","mySlides7"]


var slideIndex;
slideIndex = new Array(slideId.length);
for (let j = slideIndex.length - 1; j >= 0; j--) {
	slideIndex[j] = 1;
	showDivs(1,j);
}

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}