// Matching an Email Address
let text = "something@domain.com";
let regex = /.+@.+\..+/g;
regex = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

// Matching a Twitter Handle
text = "@javascriptthing"
regex = /^@?(\w+)$/g;

// Testing Passwords
text = "N2RN3/>zvd";

let checkPass = (pass) => {
    let theLength = /^.{8,32}$/;
    let upper = /[A-Z]/;
    let lower = /[a-z]/;
    let numbers = /[0-9]/;
    let special = /[!"#$%&'()*+,\-./;<=>?@[\\\]^_`{|}~]/g;

    if (theLength.test(pass) && upper.test(pass) && lower.test(pass) && numbers.test(pass) && special.test(pass)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPass(text));

/*
Create a new array that shows the names with the firstname and then the surname.
*/

let names = ["Smith, James", "Peterson, Alyssa", "Johnson, Lynette", "Lopez, Tony"];
let newNames = names.map((name) => {
    return name.replace(/(\w+), (\w+)/, "$2 $1");
});
console.log(newNames);

// Matching a Word Next to Another Word
text = "Lets put several different words together and see what we can match.";
regex = /\b(?:words\W+together)\b/g;
regex = /\b(?:words\W+(?:\w+\W+){0,5}together)\b/g;
regex = /\b(?:words\W+(?:\w+\W+){0,5}together)|(?:together\W+(?:\w+\W+){0,5}words)\b/g;

// Validating Dates
text = "24/06/1966"
regex = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}$/g;
// 2000년대 이후 2100년 미만
regex = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/20[0-9]{2}$/g;

// Validating IP Numbers
text = "25.013.55.255 192.32.1.1 832.26.123.5 0.1.12.1 255.255.255.1";
regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;

/*
Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.";
let total = 0;

let result = phrase.match(/\d+/g);
total = result.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
console.log(total);

/*
Retrieve the starting index for the match, the length of the match and the actual match.
*/

phrase = "First number: 32, and a second number 100. Here is the last number 15.";
let matchstart;
let matchlength;
let match;

result = /\d+/.exec(phrase);

if (result) {
    matchstart = result.index;
    matchlength = result[0].length;
    match = result[0];
}

/*
Iterate over each match and log the information to the console.
*/

phrase = "First number: 32, and a second number 100. Here is the last number 15.";
regex = /\d+/g;
match = null;

while(match = regex.exec(phrase)) {
    if (match.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    console.log(match);
}
