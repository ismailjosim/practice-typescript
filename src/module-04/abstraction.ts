//* Abstraction is a concept in OOP that involves hiding the implementation details of a class and showing only the necessary features of an object to the outside world. It focuses on what an object does rather than how it achieves its functionality.

interface Shape {
	area(): number // Method signature
}

class Rectangle implements Shape {
	constructor(private width: number, private height: number) {}

	// Implementation of interface method
	area(): number {
		return this.width * this.height
	}
}

let rect: Shape = new Rectangle(5, 4)
console.log(rect.area()) // Output: 20

// using class

// abstract class Shape {
// 	abstract area(): number // Abstract method

// 	// Concrete method
// 	displayArea() {
// 		console.log('Area:', this.area())
// 	}
// }

// class Rectangle extends Shape {
// 	constructor(private width: number, private height: number) {
// 		super()
// 	}

// 	// Implementation of abstract method
// 	area(): number {
// 		return this.width * this.height
// 	}
// }

// let rect = new Rectangle(5, 4)
// rect.displayArea() // Output: Area: 20
