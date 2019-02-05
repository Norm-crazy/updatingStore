var counter = 0;
var prices = {
  finalFan: 9.99,
  metalGear: 19.99,
  metalGearSolid: 29.99,
  halo: 19.99,
  gears: 19.99,
  deadRising: 29.99,
};
var quantity = {
  ff8: 0,
  mgs: 0,
  mgs4: 0,
  halo: 0,
  gears:0,
  dead: 0,
};

var subTotal = {
  ff8: 0,
  mg: 0,
  mgs4: 0,
  halo: 0,
  gears:0,
  dead: 0,
};

$(".ffPrice").html(prices.finalFan);
$("#mgPrice").html(prices.metalGear);
$("#mgs4Price").html(prices.metalGearSolid);
$("#haloPrice").html(prices.halo);
$("#gowPrice").html(prices.gears);
$("#drPrice").html(prices.deadRising);

var psCartBtn = $(".ffAdd, .mgAdd, .mg4Add, .haloAdd, .gowAdd, .drAdd ");

$(psCartBtn).click(function(){
  counter++;
  $("#cartNum").text(counter);
  $(".itemMess").show().delay(2000).fadeOut();
});

function shoppingCart (){
  //parseFloat will turn the string into number
  subtotalCart = parseFloat(Number(subTotal.ff8 + subTotal.mg + subTotal.mgs4 + subTotal.halo + subTotal.gears + subTotal.dead).toFixed(2));
  taxCart = parseFloat(Number(subtotalCart * 0.0825).toFixed(2));
  totalCart = parseFloat(Number(subtotalCart + taxCart).toFixed(2));

  charge = "$" + totalCart;
    if (quantity.ff8 > 0) {
      quantity.ff8;
      $('#cart-input-item-ff8').html(quantity.ff8 + " X Final Fantasy 8");
    }
    if (quantity.mgs > 0) {
      quantity.mgs;
      $('#cart-input-item-mgs').html(quantity.mgs + " X Metal Gear Solid");
    }
    if (quantity.mgs4 > 0) {
      quantity.mgs4;
      $('#cart-input-item-mgs4').html(quantity.mgs4 + " X Metal Gear Solid 4");
    }
    if (quantity.halo > 0) {
      quantity.halo;
      $('#cart-input-item-halo').html(quantity.halo + " X Halo: Combat Evolved ");
    }
    if (quantity.gears > 0) {
      quantity.gears;
      $('#cart-input-item-gow').html(quantity.gears + " X Gears Of War");
    }
    if (quantity.dead > 0) {
      quantity.dead;
      $('#cart-input-item-dr3').html(quantity.dead + " X Dead Rising 3");
    }

    $('#cart-input-sub').html(" $" + subtotalCart);
    $('#cart-input-tax').html(" $" + taxCart);
    $('#cart-input-total').html(" $" + totalCart);
}

$(".ffAdd").on('click', function(){
  quantity.ff8 += 1;
  subTotal.ff8 = quantity.ff8 * prices.finalFan;
  shoppingCart();
});

$(".mgAdd").on('click', function(){
  quantity.mgs += 1;
  subTotal.mg = quantity.mgs * prices.metalGear;
  shoppingCart();
});

$(".mg4Add").on('click', function(){
  quantity.mgs4 += 1;
  subTotal.mgs4 = quantity.mgs4 * prices.metalGearSolid;
  shoppingCart();
});

$(".haloAdd").on('click', function(){
  quantity.halo += 1;
  subTotal.halo = quantity.halo * prices.halo;
  shoppingCart();
});

$(".gowAdd").on('click', function(){
  quantity.gears += 1;
  subTotal.gears = quantity.gears * prices.gears;
  shoppingCart();
});

$(".drAdd").on('click', function(){
  quantity.dead += 1;
  subTotal.dead = quantity.dead * prices.deadRising;
  shoppingCart();
});
