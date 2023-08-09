// ^ anchors match start
// $ anchors match end

let text = `The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data. 
The problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obvious at first.`;
let regex = /^The/igm;

// Working with Word Boundaries
text = "Inplant this idea: plan to plant multiple trees on this planet."

// \b Word boundary - Pattern bounded by a non word character 문자가 아닌것이 있는거 (선택은 되지 않는다)
// \B Nonword boundary - Pattern bounded by a word character 문자가 맞는것이 있는거 (선택은 되지 않는다
regex = /\bplan\b/;
regex = /\bplan\B/;
