
//create a function that takes in a word(string) and returns the word with the first letter capitalized.

function capWord(word){
    var newWord = word.charAt(0).toUpperCase() + word.substring(1)
    return newWord
}


console.log(capWord("alpha2019"))



//Create a function that takes in an array and returns a NEW array with all numbers multiplied by 2.

var testArr = [5, 6, 3, 4, 15]



function mult2(array){
    var newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i] * 2)
    }
    return newArr
}

console.log(mult2(testArr));

var newArr1 = mult2(testArr)

console.log(newArr1);






//Create a function that takes in an array and returns a NEW array with only the odd numbers.

var testArr = [5, 6, 3, 4, -1, -6, -3, 15, 2, 7, 10, 20]

function oddArr(array){
    var newArr = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(oddArr(testArr));

//Create a function that takes in an array of strings and returns a new array of  strings that are only at the even indexes.


var testWords = ["bye", "tomorrow", "yall", "no", "see", "the", "you", "a", "later"]

//create function that takes an array of strings
function evenWords(array){
//create an empty array
var newArr = []
//loop
    for(let i = 0; i < array.length; i++){
//if/else that deals with both the values and the indexes
        if(i % 2 === 0){
            newArr.push(array[i])
        }
    }
    var finalArr = newArr.join(" ")
    //return new array
    return finalArr
}

console.log(evenWords(testWords));
