// HEADER TEXT SLIDER
let textSlideIndex = 0;
showTextSlides();

function showTextSlides() {
  let i;
  let slides = document.getElementsByClassName("textSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  textSlideIndex++;
  if (textSlideIndex > slides.length) {textSlideIndex = 1}    
  slides[textSlideIndex-1].style.display = "block";  
  setTimeout(showTextSlides, 4000); // Change image every 2 seconds
}
// /HEADER TEXT SLIDER


// --------------------------------------------


// STICKY NAVBAR
  // Keeps the navbar up top the page upon scrolling
window.onscroll = function() {stickyNav()};

var nav = document.getElementById('navbar');
var sticky = nav.offsetTop;

function stickyNav() {

  if (window.scrollY >= sticky) {

    nav.classList.add('sticky')

  } else {

    nav.classList.remove('sticky');

  }
}
// /STICKY NAVBAR

// INDEX SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// /INDEX SLIDESHOW