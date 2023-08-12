// Using Unicode Characters
let text = "Smith, Andrea";
let regex = /\u0061/g;

text = "£¥©®";
regex = /[\u00A3\u00A9]/g;

text = `“Here is a quote”`;
regex = /[\u201c\u201d]/g;

// Understanding ES6 Unicode Features
// \u(4자리)로 표현 안 될때 -> /u 사용
text = "𝄞-clef";
regex = /^\u{1d11e}-clef/u;
console.log(regex.test(text));
