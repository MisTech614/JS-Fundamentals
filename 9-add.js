#!/usr/bin/node
function add(a, b) {
    return a + b;
  }
  
  const a = Number.parseInt(process.argv[2], 10);
  const b = Number.parseInt(process.argv[3], 10);
  
  console.log(add(a, b));