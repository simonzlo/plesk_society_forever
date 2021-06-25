var slideIndex = findParams();
window.addEventListener("load", function(event) {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function findParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('slide')
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("graphic");
  console.log(slides);
  if (n === "1-1") { slideIndex = slides.length }
  if (n > slides.length) { slideIndex = 1 }
  console.log(slideIndex);

  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
