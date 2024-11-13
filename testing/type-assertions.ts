const arrayOfThings = ['hello', 'there']; // string[]

type myTuple = [string, string];

function processStringTuple(input: myTuple) {
 return input[0] + ' ' + input[1];
}

let processed = processStringTuple(arrayOfThings as myTuple); // We know arrayOfThings
console.log(processed);



