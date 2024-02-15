// my accodion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// my header 

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6000); // Change image every 6 seconds
}



// my range
const slider = document.getElementById("myPrice");
let displayPrice = document.getElementById("price");
displayPrice.innerHTML = slider.value;
 slider.oninput = function() {
 displayPrice.innerHTML = this.value;
}