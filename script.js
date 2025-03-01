function toggleContent(id) {
  var content = document.getElementById(id);
  content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

var slideIndex = 0;
function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", showSlides);
