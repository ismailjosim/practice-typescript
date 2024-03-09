class Car {
	private make: string
	private model: string
	private year: number

	constructor(make: string, model: string, year: number) {
		this.make = make
		this.model = model
		this.year = year
	}

	// Getter method for make
	getMake(): string {
		return this.make
	}

	// Setter method for make
	setMake(make: string): void {
		this.make = make
	}

	// Other methods...
}

let myCar = new Car('Toyota', 'Camry', 2022)
console.log(myCar.getMake()) // Output: Toyota
myCar.setMake('Honda')
console.log(myCar.getMake()) // Output: Honda

//* In TypeScript, encapsulation is typically achieved through access modifiers, which control the visibility of class members (properties and methods) from outside the class. TypeScript provides three access modifiers: public, private, protected
