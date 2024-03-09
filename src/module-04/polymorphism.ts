//*** Polymorphism is a fundamental concept in object-oriented programming (OOP) where objects of different classes can be treated as objects of a common superclass. This allows a single interface to represent multiple underlying data types or classes.

// ? ploy means অনেক morphism means রুপ। যার অনেক গুলো রুপ থাকবে তাকে বলা হয় Polymorphism। যখন কোন একটা ক্লাসের সেম মেথড ভিন্ন ভিন্ন আউটপুট বা রুপ দিবে তাকেই Polymorphism বলা হয়।

// class Animal {
// 	name: string

// 	constructor(name: string) {
// 		this.name = name
// 	}

// 	// Method to make a sound
// 	makeSound() {
// 		console.log('Animal makes a sound')
// 	}
// }

// class Dog extends Animal {
// 	// Override makeSound method
// 	makeSound() {
// 		console.log('Dog barks')
// 	}
// }

// class Cat extends Animal {
// 	// Override makeSound method
// 	makeSound() {
// 		console.log('Cat meows')
// 	}
// }

// // Creating instances of Dog and Cat
// let dog = new Dog('Buddy')
// let cat = new Cat('Whiskers')

// // Polymorphic behavior
// let animals: Animal[] = [dog, cat]

// // Calling makeSound method on each object
// animals.forEach((animal) => {
// 	animal.makeSound() // Calls the appropriate makeSound method for each object
// })
