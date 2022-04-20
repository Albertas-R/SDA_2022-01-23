var age = undefined | null | "" | 0 | false;

var age = 1 && "gg" && {} && [] && true;

//anonymous function, doing something
var f = function (a) {
  // a = 10
  // a * 5 = 50
  return a * 5;
};

//function, accepting callback as argument
function go(n, func) {
  // n = 10; func = f;
  // func(n) = f(10);
  // n = 50;
  // func(n) = function(50) {return 50 + 50}
  return func(n); // 50
}

//calling the function
go(10, f);
var g = go("50", function (b) {
  return Number(b) + Number(b);
});

console.log(g);
