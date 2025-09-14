#!/usr/bin/node
const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

let out = '';
for (const s of lines) {
  out += s + '\n';
}
console.log(out.slice(0, -1));