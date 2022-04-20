//anonymous function, doing something
var f = function (a) {
  return a * 5;
};

//function, accepting callback as argument
function go(n, func) {
  return func(n);
}

//calling the function
// console.log(f);
// console.log(f(10));

// console.log(go(10, f));

console.log(
  go(10, function (a) {
    return a * 5;
  })
);

// ----------
// console.log();
