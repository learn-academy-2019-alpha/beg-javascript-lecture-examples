//----------------ES6 or ECMAScript 2015
//European Computer Manufacturers Association Script, the 6th version

//`const` is a signal that the variable won’t be reassigned
//`let` is a signal that the variable may be reassigned, such as a counter in a loop, designed to be available to the block-scope


//----------------Arrow Functions
//Cleaner syntax, good for use with map and filter, we will use arrow functions more with react, not meant to replace regular functions, can be harder to bug fix since the function is not named

//traditional function call
function greeter(name){
    return "hello " + name
}

//Refactored to a arrow(anonymous) function
const greeter2 = (name) => "Hello, " + name + "!"
console.log(greeter2("Sarah"))

//-----------------String Interpolation - easier than concatenation, wrap the string in backticks

const greeter = (name) => `Hello, ${name}!`
//console.log(greeter("Sarah"))


//----------------Object Destructuring
let book = {
    title: "Hitchhiker's Guide to the Gallaxy",
    author: "Douglas Adams",
    characters: {
        name1: "Arthur Dent",
        name2: "Ford Prefect",
        name3: "Trillian"
    }
};

//Old way of returning information about an object
console.log("The characters " + book.characters.name1 + ", " + book.characters.name2 + ", and " + book.characters.name3 + " are in the book " + book.title + "is by " + book.author + ".")


let { title, author, characters } = book
console.log(author)
//now I have a variable of author storing the information book.author
let { name1, name2, name3 } = characters
console.log(name1)
//now I have a variable of name1 storing the info of book.characters.name1

//Using string interpolation
console.log(`The characters ${name1}, ${name2}, and ${name3} are in the book ${title} is by ${author}.`)


//------------------Spread Syntax

//copy array - we can use mutators without changing the original array
var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [...arr1, 7, 8, 9]
arr2.push(10)
console.log(arr1)
console.log(arr2)


//passes a dynamic number of arguments
getWord = (...letters) => {
    return letters.join("")
}
console.log(getWord("H", "i", " ", "t", "h", "e", "r", "e", " ", "A", "l", "p", "h", "a", " ", "C", "l", "a", "s", "s", "!"))


// function mergeArray takes in four arrays as arguments, returns one array with no duplicate values
var a = [1, 2, 3]
var b = [2, 30, 1]
var c = [2, 4, 5, 6, 7, 0]
var d = [2, 4, 5, 6, 7, 0]

function mergeArray(...arrays) {
	// the spread operator used above (...) allows us to pass in a varying number of arguments to the function
    var deduped = []
    var combinedArray = arrays.shift().concat(...arrays)
    for (let i=0; i<combinedArray.length; i++) {
        if(deduped.indexOf(combinedArray[i]) === -1) {
            deduped.push(combinedArray[i])
        }
    }
    return deduped
}
console.log(mergeArray(a, b))
console.log(mergeArray(a, b, c))
console.log(mergeArray(a, b, d, c))
