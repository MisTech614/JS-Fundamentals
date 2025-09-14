#!/usr/bin/node
const n = Number.parseInt(process.argv[2], 10);

if (Number.isNaN(n)) {
  console.log('Missing size');
} else if (n > 0) {
  const row = 'X'.repeat(n);
  for (let i = 0; i < n; i++) {
    console.log(row);
  }
}