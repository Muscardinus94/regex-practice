/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last.
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

let reg = /(\w+), (\w+)/;
let result = data.map((val) => {
    let arr = reg.exec(val);
    console.log(arr);
    if (arr !== null) {
        return arr[2] + " " + arr[1];
    } else {
        return null;
    }
});

let result = data.map((val) => {
    let arr = reg.exec(val);
    console.log(arr);
    if (arr !== null) {
        return arr.groups.first + " " + arr.groups.last;
    } else {
        return null;
    }
});
console.log(result);
