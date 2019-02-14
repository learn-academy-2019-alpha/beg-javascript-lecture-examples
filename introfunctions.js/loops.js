
// Loops/Iteration Practice

// Below are exercises in using loops and iteration. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a for loop that logs each number from 1 - 10.
//
for(let i = 20; i >= 0; i--){
	console.log(i);
}



// Exercise 2
// Write a for loop that logs the result of each number from 1 - 10 doubled.

for(let i = 1; i <= 10; i++){
	console.log(i * 2);
}



// Exercise 3
// Consider this variable:
var numbers = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]
// // Write for loop that logs each number.
//
for(let i = 0; i < numbers.length; i++){
	console.log(numbers[i] * 5);
}





// Exercise 4

Use the numbers array above and write a for loop that logs only the even numbers.
var numbers = [1, 8, 3, 2, 5, 4, 8, 9, 7, 1, 15, 10, 11]

for(let i = 0; i < numbers.length; i++){
	if(numbers[i] % 2 === 0){
		console.log(numbers[i]);
	}
}




//Exercise 5

var numArr = [8, 3, 5, 3, 7, 3, 7, 10, 3]

//Use the numArr above and write a for loop that logs all numbers except 3.

for(let i = 0; i < numArr.length; i++){
	if(numArr[i] !== 3) {
		console.log(numArr[i]);
	}
}
