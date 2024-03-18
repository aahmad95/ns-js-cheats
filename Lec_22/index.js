const cart = ["shoes", "pants", "kurta"];

// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet
let balance = 200000;
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    // proceedToPayment(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then(function (order) {
    console.log(order);
    return updateWallet(order);
  })
  .then(function (wallet) {
    console.log(wallet);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No matter what happens, I will definitely be called.");
  });

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     // proceedToPayment(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function () {
//     console.log("No matter what happens, I will definitely be called.");
//   });
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     // proceedToPayment(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   });

////
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validateCart
    // createOrder
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
function proceedToPayment(orderId) {
  ////
  return new Promise(function (resolve, reject) {
    resolve({ status: true, message: "Payment Successful" });
  });
}
function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo.status) {
      resolve({
        status: "success",
        order: "cart",
      });
    } else {
      reject(new Error("Something went wrong!"));
    }
  });
}

function updateWallet(order) {
  return new Promise(function (resolve, reject) {
    if (order.status == "success") {
      const amount = 5000;
      balance -= amount;
      resolve({
        balance,
        message: "Updated Balance",
      });
    } else {
      reject(new Error("Wallet not updated!"));
    }
  });
}
