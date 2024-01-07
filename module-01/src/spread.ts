//* Spread Operator with Arrays
const originalArray = [1, 2, 3]
const copyArray = [...originalArray] // Creates a copy of originalArray

//* Concatenating Arrays:
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2] // Merges both arrays into one

// Adding Elements to an Array:
const array = [1, 2, 3]
const newArray2 = [...array, 4] // Adds 4 to the end of the array

const friendList = ['Raihan', 'aowlad', 'ismail']

const greetFn = (...friends: string[]): void => {
	// rest pattern
	friends.map((friend) => console.log(`Hello! ${friend}`))
}

greetFn('Raihan', 'aowlad', 'ismail', 'Jeba', 'ratan')

//* Spread Operator with Objects
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const mergedObj = { ...obj1, ...obj2 } // Merges obj1 and obj2 into one object

// Example 1: Using Tuple Type
// Function Arguments:
function myFunctionTuple(...args: [number, number, number]) {
	// Destructuring the tuple
	const [x, y, z] = args
	// Rest of your function logic using x, y, z...
}

const args: [number, number, number] = [1, 2, 3]
myFunctionTuple(...args)

// Example 2: Using Rest Parameters
function myFunctionRest(...args: number[]) {
	const [x, y, z] = args
	// Rest of your function logic using x, y, z...
}

const args2 = [1, 2, 3]
myFunctionRest(...args)
