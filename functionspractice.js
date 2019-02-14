// // PSEUDO CODE
//
// // Write a function called peanut butter that returns jelly.
// //
// // create function called peanut_butter
//
// function peanutButter(){
//     //returns the word jelly
//     return "Jelly"
// }
//
// //call function
//
// console.log(peanutButter());
//
// // create a function greeting
// // takes in an argument - name
// function greeting(name){
//     //returns argument in a sentence
//     return "Hello " + name + "." + " How are you today?"
// }
//
// console.log(greeting("Robert"));
//
//
//
//
//
// var num1 = 3
// var num2 = 5
// var num3 = 10
//
// //write a function that takes a number as an argument
//
// function isOdd(number){
//     //if the number is odd
//
//     if(number % 2 === 1){
//         return number + " is odd"
//     } else {
//         return number + " is even"
//     }
// }
//
//
// //call function
//
// console.log(is_odd(num1));
// console.log(is_odd(num2));
// console.log(is_odd(num3));
//
// var number1 = 784
// var number2 = 2934
//
// function greaterNum(num1, num2){
//     if(num1 < num2) {
//        return num2 + " is greater"
//     } else if(num1 > num2) {
//        return num1 + " is greater"
//     } else {
//        return num1 + " is equal to " + num2
//     }
// }
//
// console.log(greaterNum(number1, number2))

//what about edge cases?  We'll need to account for things like numbers being equal or an entry that's not a number (for example a string).  How would we refactor to account for these things?




// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form of the noun, if necessary.
// pluralizer(5, cat) should return "5 cats" pluralizer(1, dog) should return "1 dog" because the number one does not require a plural noun
//
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

function pluralizer(number, noun){
    if(number === 1 || noun === "sheep" || noun === "species"){
        return number + noun
    } else if (number > 1 && noun === "child"){
        return number + "children"
    } else if (number > 1 && noun === "person"){
        return number + "people"
    } else if (number > 1 && noun === "goose"){
        return number + "geese"
    } else if (number > 1){
        return number + noun + "s"
    } else {
        return "that's not a number"
    }
}

console.log(pluralizer(1, "child"))
console.log(pluralizer(2, "child"))
console.log(pluralizer(1, "goose"))
console.log(pluralizer(2, "goose"))
console.log(pluralizer(1, "cat"))
console.log(pluralizer(2, "cat"))
console.log(pluralizer(1, "person"))
console.log(pluralizer(2, "person"))
console.log(pluralizer("two", "child"))

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function pluralizer(number, name){
//     if(number > 1 && name === "sheep" || number > 1 && name === "species"){
//         return number + name
//     } else if (number > 1 && name === "child"){
//         return number + "Children"
//     } else if (number > 1 && name === "person"){
//         return number + "people"
//     } else if (number > 1 && name === "goose"){
//             return number + "geese"
//     } else if (number === 1){
//         return number + name
//     } else {
//         return number + name + "s"
//     }
// }
//
// console.log(pluralizer(1, "cat"))
// console.log(pluralizer(2, "cat"))
// console.log(pluralizer(1, "goose"))
// console.log(pluralizer(2, "goose"))
// console.log(pluralizer(1, "child"))
// console.log(pluralizer(2, "child"))
// console.log(pluralizer(1, "person"))
// console.log(pluralizer(2, "person"))
// console.log(pluralizer(1, "species"))
// console.log(pluralizer(2, "species"))





typeof challenge

wording of pluralizer (make sure to add that user will input a number and a singular noun)

langauge challenge - default being english

reword magic8 ball "variable set to question..."
