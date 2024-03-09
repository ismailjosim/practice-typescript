// In TypeScript, the static keyword is used to define static properties and methods within a class. Static members belong to the class itself rather than to instances of the class. This means you can access static members without creating

class MathUtility {
	// Static property
	static PI: number = 3.14159

	// Static method to calculate the area of a circle
	static calculateCircleArea(radius: number): number {
		return this.PI * radius * radius
	}
}

// Accessing static property
console.log(MathUtility.PI) // Output: 3.14159

// Calling static method
console.log(MathUtility.calculateCircleArea(2)) // Output: 12.56636
