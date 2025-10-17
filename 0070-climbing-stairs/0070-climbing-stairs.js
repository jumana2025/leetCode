/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  
  if (n === 1) return 1;
  if (n === 2) return 2;

  let first = 1;  
  let second = 2; 
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;


};