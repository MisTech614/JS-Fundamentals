#!/usr/bin/node
const n = Number.parseInt(process.argv[2], 10);
console.log(Number.isNaN(n) ? 'Not a number' : `My number: ${n}`);