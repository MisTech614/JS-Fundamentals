#!/usr/bin/node
const n = Number.parseInt(process.argv[2], 10);

function factorial(x) {
  if (Number.isNaN(x) || x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(n));