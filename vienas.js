// let myVar = 1;
// myVar += 5;
// console.log(myVar);

// console.log(2 !== "2"); /* true */
// console.log(2 !== 2); /* false */

// ------------------------------------------------
// https://js.en.sdacademy.pro/_slides/basics_of_programming_in_javascript/javascript.html#/59
// ------------------------------------------------
// function myFunction(a, b) {
//   var result = a + b;
//   return result;
// }
// console.log(myFunction(1, 2));
// console.log(myFunction("vienas ", "du"));

// ---------------------------
// https://js.en.sdacademy.pro/_slides/basics_of_programming_in_javascript/javascript.html#/63
// ---------------------------------------------

// function a(x) {
//   return x * 2;
// }
// function b(x) {
//   return a(x) * 2;
// }
// var y = 4;
// var z = b(y); //value of z becomes 16

// console.log(z);

// ---------------------------
// Užduotis 3
// ---------------------------
// for (var i = 1; i <= 100; i++) {
//   console.log(i);
//   document.writeln(i + ", ");
// }

// for (var i = 1; i <= 100; i++) {
//   document.write(i);
// }

// while (i <= 100) {
//   document.write(i);
//   i++;
// }

// do {
//   document.write(i);
//   i++;
// } while (i <= 100);

// ---------------------------
// https://js.en.sdacademy.pro/_slides/basics_of_programming_in_javascript/javascript.html#/75
// ---------------------------

var a = 5;

for (var i = 0; i < 10; i++) {
  if (i == a) {
    //exits the loop
    break;
  }
  console.log(i);
}

// ---------------------------
// https://js.en.sdacademy.pro/_slides/basics_of_programming_in_javascript/javascript.html#/77
// ---------------------------

// var a = 4;

// for (var i = 0; i < 10; i++) {
//   if (i == a) {
//     //jumps to next iteration
//     continue;
//   }
//   console.log(i);
// }

// ---------------------------
// https://js.en.sdacademy.pro/_slides/basics_of_programming_in_javascript/javascript.html#/85
// ---------------------------

// var myArray = [1, 2, 3, 4];

// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// var a = "abc";
// typeof a;
// console.log(typeof a);
