const text1 = "Make the outline for the square gray and the fill for the circle grey.";

// 모든 것은 다 단일 character 이다
// [] 해당 집합에서 하나를 충족하는 것 찾기, []안에 .이 있으면 wildcard가 아니다
const regex1 = /gr[ae]y/;

// [1-4] 1에서 4까지의 범위, [a-e] a에서 e까지의 범위
const text2 = "There have been 4 - 5 times I have tried, but I will try it again."
const regex2 = /[1-6]/;
// 1~6, a~z, A~Z
const regex2 = /[1-6a-zA-Z]/;

const regex3 = /[-,.]/;

const text4 = "13 - 20";
const regex4 = /[1-2][0-9]/;

// ^ Excluding a Character Set (가장 앞에 둬야한다)
const text5 = "Exception 0xG89F";
const regex5 = /0x[^0-9A-F][^0-9A-F]/;

const text6 = "abcdefghijklmnop";
const regex6 = /[^a-i]/;

// Escape Metacharacter Set - ^ \ ]

// Character Set Shorthand
// \d = [0-9] digit
// \w = [a-zA-Z0-9_] word
// \s = [ \t\r\n] whitespace
// \D = [^0-9]
// \W = [^a-zA-Z0-9_]
// \S = [^ \t\r\n]
