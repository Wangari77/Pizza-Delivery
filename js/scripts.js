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
