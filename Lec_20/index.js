// console.log("Bilal");

// setTimeout(function () {
//   console.log("JS");
// }, 5000);

// console.log("Season 2");

const cart = ["shoes", "pants", "kurta"];

// call back hell
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
