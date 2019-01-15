/*SlideShow images*/
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}

/* Prices and add to cart*/
$(document).ready(function () {
  var ffPrice = 9.99
  var mgPrice = 19.99
  var mgs4Price = 29.99
  var haloPrice = 19.99
  var gowPrice = 19.99
  var drPrice = 29.99
  var counter = 0;

  $("#ffPrice").html(ffPrice);
  $("#mgPrice").html(mgPrice);
  $("#mgs4Price").html(mgs4Price);
  $("#haloPrice").html(haloPrice);
  $("#gowPrice").html(gowPrice);
  $("#drPrice").html(drPrice);

  $("#ff8Btn, #mgsBtn, #mgs4Btn, #haloBtn, #gowBtn, #drBtn").click(function(){
    counter++;
    $("#cartNum").text(counter);
  });

});
