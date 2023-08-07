
let txt = "Programming courses always starts with a hello world example."

let regex1 = /hello/;
let regex2 = /world/;

// True/False
console.log(regex1.test(txt));
console.log(regex2.test(txt));

// exec
// [
//   'hello',
//   index: 41,
//   input: 'Programming courses always starts with a hello world example.',
//   groups: undefined
// ]
console.log(regex1.exec(txt));
console.log(regex2.exec(txt));

console.log(txt.match(regex1));

// 41
console.log(txt.search(regex1));

// Programming courses always starts with a hi world example.
console.log(txt.replace(regex1, "hi"));

// [ 'Programming courses always starts with a ', ' world example.' ]
console.log(txt.split(regex1));

// 공간, 여백
const regex3 = /\s/;
console.log(txt.split(regex3));

// Flags
// g - global, 전체 다 찾기, 대소문자 구분
// i - 대소문자 상관 없음
// m - multi-line match

const regex4 = /s\s/g;
console.log(txt.match(regex4));

const regex5 = /s\s/i;
console.log(txt.match(regex5));

