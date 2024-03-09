// Problem 1
function printValue(message: string, times: number = 3): void {
	for (let i = 0; i < times; i++) {
		console.log(message)
	}
}

// Problem 2
interface IPerson {
	name: string
	age: number
}

function matchAge(arr: IPerson[]): IPerson[] {
	return arr.filter((p) => p.age >= 18)
}

// problem 3
function reverseArray<T>(...items: T[]): T[] {
	return items.reverse()
}

// problem 4

class Person {
	private name: string
	private age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	getDetails(): string {
		return `Name: ${this.name}, age: ${this.age}`
	}
}

class Student extends Person {
	private grade: string
	constructor(name: string, age: number, grade: string) {
		super(name, age)
		this.grade = grade
	}
	getGrade(): string {
		return `Grade: ${this.grade}`
	}
}

// Problem 5
function logString(param: unknown): void {
	if (typeof param === 'string') {
		console.log(param)
	} else {
		console.error('param is not string type')
	}
}
