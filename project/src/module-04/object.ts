// class JCDEmploy {
// 	name: string
// 	age: number
// 	designation: string
// 	isMarried: boolean

// 	// parameter properties
// 	constructor(
// 		name: string,
// 		age: number,
// 		designation: string,
// 		isMarried: boolean,
// 	) {
// 		this.name = name
// 		this.age = age
// 		this.designation = designation
// 		this.isMarried = isMarried
// 	}
// 	// create a method
// 	processSalary() {
// 		console.log(`${this.name} this Month salary has paid off`)
// 	}
// }

// const ismail = new JCDEmploy('ismail', 26, 'CEO', false)

// ismail.processSalary()

// solve the code reparation issue using public keyword

class JCDEmploy {
	// 	name: string
	// 	age: number
	// 	designation: string
	// 	isMarried: boolean

	// parameter properties
	constructor(
		public name: string,
		public age: number,
		public designation: string,
		public isMarried: boolean,
	) {
		//      this.name = name
		// 		this.age = age
		// 		this.designation = designation
		// 		this.isMarried = isMarried
	}
	// create a method
	public processSalary() {
		console.log(`${this.name} this Month salary has paid off`)
	}
}

const ismail = new JCDEmploy('ismail', 26, 'CEO', false)

ismail.processSalary()

// ? The above class declaration the properties name and types written twice. to prevent that use can use typescript using parameter properties.
