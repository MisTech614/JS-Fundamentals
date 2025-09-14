#!/usr/bin/node
const x = Number.parseInt(process.argv[2], 10);

if (Number.isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let out = '';
  for (let i = 0; i < x; i++) {
    out += 'C is fun\n';
  }
  if (out) console.log(out.trimEnd());
}