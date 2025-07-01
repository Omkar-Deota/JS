// // //print statement
// // console.log("hello world!")

// //keywords and datatypes
// // keywords = let, var and const
// // --------------------------------------------------
// //let - block scope identifier and can't be declared inside the same scope but can be declared outside of the previously declared scope
// // -------------------------------------------------------
// // var: it has global scope and can be assigned again with same name and supports hoisting
// // hoisting - whenever you declare any variable using var keyword then ignoring the line number wherever the variable is declared,
// //   js takes the variable to the top of the code and initialize it without giving any Value. very first thing done by the compiler
// // var a; a = undefined, var c, c = undefined
// function newA() {
//   let a = 10;
//   var b = 20;
//   console.log(a);
// }
// console.log(c, "first:undefined(j&n)")
// console.log(a, 'secondprint : 10(j&n)')
// var a = 10;
// console.log(a, 'third:10- j,n')
// b = 30;
// console.log(b, 'fourth - j-n:30');
// var c = 22;
// newA();
// a = 55;
// console.log(a, 'fifth-n:55, fifth:10;j');
// //b=20, a=55, c=undefined,
// //c=undefined
// //a=undefined
// //a=10
// //b=30
// //a=55

// // const can never be declared twice irrespective of the scope
// const a;
// function myon() {
//   const a;
// }

// // variable name, _: (121321, special character) variable can never start number and special charcter

// {
// let a = 10;

// function myFunction() {
//   let a = 20;
//   console.log(a, "inside the function")
// }
// console.log(a, "outside the function")
// myFunction()
// }

// function abc() {
//   let a = 45;
//   a = 78;
//   console.log(a, "abc")
// }

// let a = 78;
// a = 45;
// console.log(a, "main");
// a = 66;
// def()
// function def() {
//   let a = 45;
//   console.log(a, "def")
//   a = 78;
// }
// abc();

// constant can't be declared with same name but can be updated;
// var:
// 1.global scope
// 2.hoisting - logically decalre value: undefine, if used before intilization(only in case of var)
// 3. redeclare / reassign

// function main() {
//   var a = 10;
//   a = 20;
//   const b = 20;

//   console.log(a, "main");

//   function abc() {
//     console.log(a, "abc")
//   }
//   function def() {
//     let c = 45
//     console.log(console.log(c, "def"))
//   }
//   console.log(c)
//   var c = 20;
//   abc();
//   def();
//   console.log(a, "end of main")
// }
// main();


//40 abc
//10 outside

// 1. error

// Number , String, boolean, bigint

// null - no value can be given, (user define)/ negative case
// undefined: not value is present at time but can be updated later. (error raise) / can be positive

// const a = Symbol(20); 
// const b = Symbol(20); 
// console.log(a == b)

// console.log(typeof obj)
// 1. Number
// 2. string , bigint, Boolean, Object, symbol, null , undefined

//task 1. self- programe let var and const clearly diff.
// task 2. array and object // object manipulate // object-crud