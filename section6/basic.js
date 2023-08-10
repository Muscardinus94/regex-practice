let text = "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that someday this Tuesday meeting might not occur. When that happens, we will make an announcement.";

// Specifying Options
let regex = /\b[a-z]{3}day\b|\b[a-z]{4}day\b|\b[a-z]{6}day\b/gi;

// Using Grouping
text = "a5c3a2b1d1 a1e3a2b1a4 d5c3a2b1d1 aac3a2b1d1 a5c3a2b1d6 a5c312b1d1 d4b2a5b2d3";
regex = /([a-d][1-5]){5}/g;

// Using Grouping with JS
text = "2018/03/09";
regex = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/;
let arr = regex.exec(text);

if (regex.test(text)) {
    let year = arr[1];
    let month = arr[2];
    let day = arr[3];
    console.log({year, month, day});
} else {
    console.log("Wrong Format")
}

// Capturing Group - Pattern을 따라하는게 아니라 텍스트를 따라한다
text = "yoyo";
regex = /(yo)\1/g;

text = "2018-9-9";
regex = /^(\d\d\d\d)[-./](\d{1,2})[-./]\2$/g
regex = /^(\d\d\d\d)([-./])(\d{1,2})\2\3$/g

// ?: -> Capturing Group 제외
// exec에서도 제외된다
regex = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/g

// Understanding Group Back References
text = "a1a1d5c1d5b2b3d4";
regex = /([a-d][1-5])\1/g;

text = "<strong>This is a strong tag</strong><i>this is italic</i>";
regex = /<(\w+>)[\w\s]+<(\/\1)/g;

// Named Capture Groups
// 이름 지어서 하기 -> ?로 시작하고 어떻게 표현할지 그다음에 진짜 pattern, 그러고 나서 \k로 해당 부분을 선언
regex = /<(?<tag>\w+>)[\w\s]+<\/\k<tag>/g;

// Using Lookahead Groups ?=
text = "allthingsjavascript.com";
// 해당 조건이 포함되어 있어야 하지만, 찾아지지는 않는다
// allthingsjavascript (도메인 일부만 포함)
regex = /\w+(?=\.com)/g;

// 8개 이상이면서 최소한 하나의 소문자, 대문자, 숫자
text = "abcdefghA0";
regex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;

// Using Negative Lookahead Groups ?!
text = "aha0kdfjn";
regex = /^(?=.{8,})(?!.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;

// Using Lookbehind Groups ?<=
text = "There are 59 items for a price of $199 or €173.";
regex = /(?<=(\$|\€))\d+/g;
