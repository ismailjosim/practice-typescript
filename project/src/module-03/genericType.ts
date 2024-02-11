const personOneRoll: Array<number> = [33, 1232, 343]
const personsName: Array<string> = ['rohim', 'korim']
const personsIsWorking: Array<boolean> = [true, false]

// From the above we need to define data array separately each time we create different types of array.

// to solve this issue and write any types of data in one block/array we can generalize using generic type.

function reverse<T>(items: T[]): T[] {
	return items.reverse()
}
//*** In this example, we define a function named reverse that takes an array of items of type T and returns an array of the same type T. The <T> syntax indicates that T is a generic type parameter that can be replaced with a specific type at runtime.

const numbers = [1, 2, 3, 4, 5, 6]
const reversedNumbers = reverse(numbers)
const reversedString = reverse(['rohim', 'korim', 'rohoman'])

// *** In this example, we call the reverse function with an array of numbers and an array of strings, and the function returns an array of the same type with the elements reversed.

// *** Generics can also be used with classes and interfaces to create generic types and to enforce constraints on the types that can be used:

interface IStack<T> {
	push(item: T): void
	pop(): T | undefined
}

class NumberStackOne implements IStack<number> {
	private items: number[] = []

	push(item: number): void {
		this.items.push(item)
	}

	pop(): number | undefined {
		return this.items.pop()
	}
}

// *** In this example, we define an interface Stack<T> that can work with different types, and then create a class NumberStack that implements the Stack<number> interface with the number type parameter. The push and pop methods can only be called with a number type parameter, which enforces the type safety of the code.

// *** Generics provide a powerful tool for creating reusable and flexible code in TypeScript, and are commonly used in libraries and frameworks.

type GenericsTuple<X, Y> = [X, Y]

const relation: GenericsTuple<string, number> = ['ismail', 19]
const salaryInfo: GenericsTuple<{ name: string; salary: number }, string> = [
	{
		name: 'ismail',
		salary: 20000,
	},
	'Programming Hero',
]

// this is not the best practice. but we can use any type of info inside the object.
