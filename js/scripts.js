//BUSINESS LOGIC
function placeOrder(size, sauce, crust, toppings) {

    var addToppings = 0;
    for (var i = 0; i < toppings.length; i++) {
      addToppings += parseInt(toppings[i]);
    }
  
    this.pizzaSize = size;
    this.sauceSize = sauce;
    this.crustSize = crust;
    this.toppingsSize = addToppings;
};  

placeOrder.prototype.final = function () {
    return "pizzaSize: " + this.pizzaSize + ", sauce: " + this.sauceSize + ", crust: " + this.crustSize + ", toppings: " + this.toppingsSize;
  };
placeOrder.prototype.totalOder = function () {
    return parseInt(this.pizzaSize) + parseInt(this.sauceSize) + parseInt(this.crustSize) + parseInt(this.toppingsSize);
  };

  //USER INTERFACE

$(document).ready(function () {
    $("#pob").click(function () {
      $("#mySection").submit(function (event) {
        event.preventDefault();
        var sizy = $('#customSize').val();
        var sauce = $('#customSauce').val();
        var crust = $('#customCrust').val();
        var toppingsArray = [];
        $("input[name=foo]:checked").each(function () {
          toppingsArray.push($(this).val());
        });
        var newPizzaOrder = new placeOrder(sizy, sauce, crust, toppingsArray);
        $("#sumofOrder").append("<li>" + newPizzaOrder.final() + "</li>");
        // append total order
        $("#total").append("<p>" + newPizzaOrder.totalOder() + "</p>");
        // Send alert to user
        alert(`If the order is to be delivered,the delivery cost will be ${newPizzaOrder.totalOder()}. Your order will be delivered to your location!`);
      });  