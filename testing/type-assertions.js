var arrayOfThings = ['hello', 'there']; // string[]
function processStringTuple(input) {
    return input[0] + ' ' + input[1];
}
var processed = processStringTuple(arrayOfThings); // We know arrayOfThings
console.log(processed);
