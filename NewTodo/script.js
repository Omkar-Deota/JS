// //setTimeOut: execute sth after a given period of time - let say 3 sec after console.log("hii"); only one time
// //setInterval: continuously execute sth after a regular interval of time : every 3 sec me clg("hii"), infinite unless it is stopped manually

// // setTimeout(print, 1000);
// // setInterval(print, 1000);

// // RegExp = Regular Expression: defining a set of rules to be followed by any input:
// // https://github.com/{userName}

// // const f1 = () => {
// //   console.log("F1");
// // }

// // const f2 = () => {
// //   setTimeout(print, 2000);
// // }

// // const main = () => {
// //   f1();
// //   f2();
// // }
// // f1();
// // main();
// // f2();


// // f1
// // f1
// // f2
// // f2

// // async
// // await

// // const login = async (showItems, payment) => {
// //   setTimeout(print, 2000);
// //   await showItems();
// //   payment();
// // }

// // const showItems = () => {
// //   // setTimeout(print, 2000);
// //   console.log("item");
// // }

// // const payment = () => {
// //   console.log("payment")
// // }


// // const main = () => {
// //   login(showItems, payment);
// // }

// // main();

// // const showUser = () => {
// //   console.log("User is here");
// // }

// // const showError = () => {
// //   console.log("Function failed")
// // }

// // let myPromise = new Promise((resolve, reject) => {
// //   const success = true;
// //   if (success) {
// //     resolve(showUser);
// //   }
// //   else {
// //     reject(showError);
// //   }
// // })

// // myPromise.then((msg) => {
// //   console.log(msg)
// // })
// //   .catch((msg) => {
// //     console.log(msg)
// // })


// const login = (userName, pass) => {


//   if (userName === 'user' && pass === "123") {
//     setTimeout(() => {
//       console.log("login")
//       resolve("login resolved");
//     }, 3000)
//   }
//   else {
//     reject("Invalid credentials");
//   }
// }

// const showItems = () => {

//   console.log("Show items");
//   resolve("show items resolved")

// }

// const payment = () => {

//   console.log('Payment done');
//   resolve("payment done resolved");

// }

// // login("user", "123").then((user) => {
// //   return showItems();
// // }).then((pay) => {
// //   return payment();
// // }).then((msg) => {
// //   console.log("successfully promise resolved")
// // })
// //   .catch((err) => {
// //     console.log(err)
// //   })

// const purchase = async () => {
//   await login("user", "123");
//   await showItems();
//   await payment();
// }

// purchase();

// localStorage.setItem("name", "logi");
// document.getElementById("demo").innerText = localStorage.getItem("name")
