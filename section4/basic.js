// Repetition
// + 한개 이상
// ? 0, 1개
// * 0개 이상

const text1 = "She sells seashells on a seashore. The shells she sells are seashells, I’m sure.";

const regex1 = /[A-Z]+/;
const regex2 = /s[a-z]+/;

const text3 = "Steve Normal Jeff amanda Sherry";
const regex3 = /[A-Z][a-z]*/;

const text4 = "He picked apples of the apple tree";
const regex4 = /apples?/;

const text5 = `
<p>This is the first paragraph.</p><p>Paragraph number two.</p>

<p>This is the first paragraph.</p><p>Paragraph number two.</p>
`
const regex5 = /<p>[\w.\s]*<\/p>/;
// lazy -> match few character as possible
const regex6 = /<p>.*?<\/p>/;

// Specifying a Repetition Amount
// {min,max} min to max
// {min} min only
// {min,} min or more
const text7 = "My telephone number is as follows: 801-555-6789.";
const regex7 = /\w{3,5}/;

// Revisiting Greedy and Lazy Concepts
const text8 = "32-6678, 45-668778, 65-454";
const regex8 = /\d{2}-\d{4,6}/;
// lazy
const regex9  = /\d{2}-\d{4,6}?/;
