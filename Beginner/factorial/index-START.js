/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


function factorial(n) {
   if (n === 1 || n === 0) return 1;
   else return n * factorial(n - 1);
}

module.exports = factorial