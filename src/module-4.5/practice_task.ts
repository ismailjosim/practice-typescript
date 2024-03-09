// Problem 01: convert the following JS Array into a TS tuple
const userInfo1 = [101, 'Ema', 'John', true, , '2003']

// Solution: change into Tuple
const userInfoTuple: [number, string, string, boolean, undefined, string] = [
	101,
	'Ema',
	'John',
	true,
	,
	'2003',
]

// Problem 02: Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

const compareArr = (arr1: number[], arr2: number[]): number[] => {
	const commonEl: number[] = []
	for (const item of arr1) {
		if (arr2.includes(item)) {
			commonEl.push(item)
		}
	}
	return commonEl
}

// Problem 03: You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value. Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

// an interface for Product containing the product's id, name, price, and category.
interface Product {
	id: number
	name: string
	price: number
	category: string
}

// Write a TypeScript generic function that takes an array

function filterProducts<T extends keyof Product>(
	products: Product[],
	criterion: T,
	value: Product[T],
): Product[] {
	return products.filter((pd) => pd[criterion] === value)
}

// Example usage:
const products: Product[] = [
	{ id: 1, name: 'Product 1', price: 10, category: 'A' },
	{ id: 2, name: 'Product 2', price: 20, category: 'B' },
	{ id: 3, name: 'Product 3', price: 30, category: 'A' },
]

// Filter products by category "A"
const filteredProductsByCategoryA = filterProducts(products, 'category', 'A')
console.log(filteredProductsByCategoryA)

// Filter products by price 20
const filteredProductsByPrice20 = filterProducts(products, 'price', 20)
console.log(filteredProductsByPrice20)

//* Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number]

const productArr: ProductTuple[] = [
	['Product A', 10.99, 5],
	['Product B', 5.49, 10],
	['Product C', 20.99, 3],
	['Product D', 15.79, 8],
]
function calcTotalConst(products: ProductTuple[]): number {
	let totalCost = 0

	for (const pd of products) {
		const [name, price, quantity] = pd

		const calcPrice = price * quantity
		totalCost += calcPrice
	}
	return totalCost
}

const numbers1: number[] = [1, 2, 3, 4, 5]

function calcSumEvenNum(arr: number[]): number {
	let total = 0

	// Iterate through each number in the array
	for (const num of arr) {
		// Check if the number is even
		if (num % 2 === 0) {
			// If it's even, add it to the total
			total += num
		}
	}

	// Return the total sum of even numbers
	return total
}

// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface IPerson {
	name: string
	age: number
	email: string
}
const persons: IPerson[] = [
	{ name: 'person 1', age: 23, email: 'person1@gmail.com' },
	{ name: 'person 2', age: 25, email: 'person2@gmail.com' },
	{ name: 'person 3', age: 26, email: 'person3@gmail.com' },
	{ name: 'person 4', age: 27, email: 'person4@gmail.com' },
]

function findPerson(arr: IPerson[], email: string): IPerson | null {
	let findMatchedPerson = null

	for (const ps of arr) {
		if (ps.email === email) {
			findMatchedPerson = ps
		}
	}

	return findMatchedPerson
}

// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

function findMinMax(...numbers: number[]): [number, number] {
	const min = Math.min(...numbers)
	const max = Math.max(...numbers)
	return [min, max]
}
// Array of numbers
const numbersarr: number[] = [5, 3, 9, 1, 7]

// Find minimum and maximum values using spread operator
const [minValue, maxValue] = findMinMax(...numbersarr)

// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

function logColor(color: 'red' | 'green' | 'blue', uppercase?: boolean): void {
	if (uppercase) {
		console.log(color.toUpperCase())
	} else {
		console.log(color.toLowerCase())
	}
}
// Test the function
logColor('red', true) // Logs "RED"
logColor('green') // Logs "green" in lowercase
