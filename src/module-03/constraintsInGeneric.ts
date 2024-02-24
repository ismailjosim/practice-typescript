// Define a generic function called "printLength" that accepts an array of items of type T
function printLength<T>(arr: T[]): void {
	console.log(`Array length: ${arr.length}`)
}

// Call the function with an array of numbers
printLength([1, 2, 3]) // Output: Array length: 3

// Call the function with an array of strings
printLength(['a', 'b', 'c']) // Output: Array length: 3

// Call the function with an array of booleans
printLength([true, false]) // Output: Array length: 2

// Call the function with an array of numbers and strings mixed
printLength([1, 'two', 3]) // Output: Array length: 3

//*** comments: In the example above, the printLength function is a generic function that accepts an array of items of type T. However, it accepts arrays of any type, including numbers, strings, Boolean, or even a mix of types.

// ? Now, let's say we want to constrain the generic type T to only accept arrays of items that have a length property. We can do this using constraints:
function printLength2<T extends { length: number }>(arr: T): void {
	console.log(`Array length: ${arr.length}`)
}
// Call the function with an array of numbers
printLength2([1, 2, 3]) // Output: Array length: 3

// Call the function with an array of strings
printLength2(['a', 'b', 'c']) // Output: Array length: 3

// Call the function with an array of booleans
printLength2([true, false]) // Output: Error: Property 'length' is missing in type 'boolean[]'.

// Call the function with an array of numbers and strings mixed
printLength2([1, 'two', 3]) // Output: Error: Argument of type '(string | number)[]' is not assignable to parameter of type '{ length: number; }'.

printLength2([1, 'two', 3])

// *** comment: In this modified example, we've added a constraint to the generic type T using the extends keyword. The constraint { length: number } specifies that T must have a length property of type number. As a result, the function will only accept arrays or array-like objects that have a length property. If we try to call the function with an argument that doesn't meet this constraint, TypeScript will raise a compilation error.

// type alias
type MandatoryType = { name: string; age: number; salary: number }

// type interface
interface IMandatoryType {
	name: string
	age: number
	salary: number
}

const employDetails = <T extends IMandatoryType>(myInfo: T) => {
	const designation = 'Web Developer'
	const fullInfo = { ...myInfo, designation }
	return fullInfo
}

type myInfoLType = {
	name: string
	age: number
	salary: number
}

const myInfo = {
	name: 'ismail',
	age: 25,
	salary: 500000,
	others: 'popular',
}
const emplyOne = employDetails(myInfo)
console.log(emplyOne)
