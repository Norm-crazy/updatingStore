/* Prices and add to cart*/
$(document).ready(function () {
  var ffPrice = "$9.99";
  var mgPrice = "19.99";
  var mgs4Price = "29.99";
  var haloPrice = "19.99";
  var gowPrice = "19.99";
  var drPrice = "29.99";
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
