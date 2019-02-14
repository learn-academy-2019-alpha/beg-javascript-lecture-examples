//Examples of If/else
//If/else is a decision making structure


//Are the lights on?
var lightsOn = true

if(lightsOn === false){
    console.log("the lights are on");
} else {
    console.log("the lights are off");
}

//Is the number divisible by 3?
var num = 49

if(num%3 === 0){
    console.log(num + " is divisible by 3");
} else {
    console.log(num + " is not divisible by 3");
}

//Take in two numbers, print which is greater or are they equal?
var num1 = 58
var num2 = 58

if(num1 < num2){
    console.log(num1 + " is less than " + num2);
} else if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num1 + "is equal to " + num2);
}

//Does a string contain a certain letter? Print yes or no.
//.includes()

var name = "Learn"
var sentence = " is super"
var punctuation = "!"

if(name.concat(sentence).includes("g")){
    console.log("includes:", "g!");
} else if(name.concat(sentence).concat(punctuation).includes("!")){
    console.log("includes:", "!!!");
} else {
    console.log("includes:", "nope");
}

//Data type if/else example

var data = null
//null has a weird quirk in the typeof return

if(typeof data === "string"){
    console.log("It is a string");
} else if(typeof data === "boolean" ) {
    console.log("It is boolean");
} else if(typeof data === "object" ) {
    console.log("It is null/object");
} else if(typeof data === "undefined") {
    console.log("It is undefined");
} else if(typeof data === "number"){
    console.log("It is a number");
} else if(typeof data === "symbol"){
    console.log("It is a symbol");
} else {
    console.log("That is not a primitive data type.");
}

console.log(typeof data);


//Is the number odd, even, or zero?
//Added on - is the it a number?
var num = "hello"

if(typeof num != "number") {
    console.log("this is not a number");
} else if(num === 0){
    console.log(num + " is zero");
} else if(num%2 === 0){
    console.log(num + " is even");
} else if(num%2 === 1){
    console.log(num + " is odd");
} else {
    console.log("that is not a whole number");
}
