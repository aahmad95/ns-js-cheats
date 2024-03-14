const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);

// }); // orderId

// const promise = createOrder(cart);

// // {data: orderDetails }

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfp) {
    showOrderSummary(paymentInfp, function () {
      updateWalletBalance();
    });
  });
});

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfp) {
    showOrderSummary(paymentInfp);
  })
  .then(function () {
    updateWalletBalance();
  });
