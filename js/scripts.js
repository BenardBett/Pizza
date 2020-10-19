var pizzaFlavour = ["Berry","Butternut Squash","Chicken","Hummus","Turkish Ground"];
var pizzaSize = ["Regular", "Medium", "Large"];
var pizzaCrust = ["Thin crust", "Thick crust", "Deep crust", "Stuffed crust"];
var pizzaTopping = ["Onion", "Mushroom", "bacon", "black olives"];
function getFlavour() {
  var flavour = $("#flavour :selected").val();
  return parseInt(flavour);
}
function getSize() {
  var size = $("#size :selected").val();
  return parseInt(size);
}
function getCrust() {
  var crust = $("#crust :selected").val();
  return parseInt(crust);
}
function getTopping() {
  var topping = $("#topping :selected").val();
  return parseInt(topping);
}
function getNumber() {
  var number = $("#number").val();
  return parseInt(number);
}
function getAmount(flavour, size, crust, topping, number) {
  var results =
    (parseInt(flavour.val()) +
      parseInt(size.val()) +
      parseInt(crust.val()) +
      parseInt(topping.val())) *
    parseInt(number.val());
  alert(
    // "You've ordered " +
    //   number.val() +
    //   " " +
    "You've ordered " +
      number.val() +
      " "  +
      "pizza's" +
      " "  +
      flavour.html() +
      " " +
      " "  +
      size.html() +
      " " +
      " "  +
      crust.html() +
      " " +
      " "  +
      topping.html() +
      " pizza's," +
      // "which amounts to Ksh. " +
      // " "  +
      " which amounts to Ksh. "  +
      results +
      " Thanks for your order,welcome again!"
  );
  prompt("Enter your location");
  prompt("Enter your name");
  prompt("Enter your phone number");
  alert("Your order will be delivered shortly, delivery fee is  Ksh.200/=");
};
// function getPick() {
function getPick(flavour, size, crust, topping, number) {
  var results =
    (getFlavour() + getSize() + getCrust() + getTopping()) * getNumber();
  (parseInt(flavour.val()) +
  parseInt(size.val()) +
  parseInt(crust.val()) +
  parseInt(topping.val())) *
  parseInt(number.val());
  alert(
    // "You've ordered  " +  getNumber("") + " pizza's,  " + "which amounts to ksh   " +   results +  
    "You've ordered "  + number.val() +
    " "  + " pizza's, "  + flavour.html() + " "   + size.html() + " "  + crust.html() + "  "  + topping.html() +  "  "  
    + " which amounts to Ksh. " +  results  + "  Thanks for choosing our pizza company "
  );
}
$(document).ready(function() {
  $("#make-delivery").click(function(event) {
    var flavour = $("#flavour :selected");
    var size = $("#size :selected");
    var crust = $("#crust :selected");
    var topping = $("#topping :selected");
    var number = $("#number");
    getAmount(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("#pick-up").click(function(event) {
    var flavour = $("#flavour :selected");
    var size = $("#size :selected");
    var crust = $("#crust :selected");
    var topping = $("#topping :selected");
    var number = $("#number");
    getPick(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
