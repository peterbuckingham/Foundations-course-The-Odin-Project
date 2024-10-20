//Arrow function that adds 7 to a number
let add7 = (num) => num + 7;
console.log(add7(10));

//a classic function that multiplies two numbers
function multiply(a, b) {
    return a * b;
};
console.log(multiply(1, 2))

//a function expression that takes a string and returns that string with only the first letter capitalized
let capitalize = function(string) {
    let firstLetter = string.toLowerCase().charAt(0).toUppercase();
    let endOfString = string.toLowerCase().slice(1)

    return firstLetter + endOfString;
}
console.log(capitalize('HELLO WORLD')) // returns 'Hello world'
console.log(capitalize('hello world')) // returns 'Hello world'


function lastletter(string) {
    return string.slice(-1);
}

console.log(lastletter("Peter Buckingham"));