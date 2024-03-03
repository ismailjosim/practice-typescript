type Alphanumeric = number | string
// key of guard

function addTwoNum(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2
	} else {
		return num1.toString() + num2.toString()
	}
}
addTwoNum('1', '2')
addTwoNum(3, 4)

// in guard

type NormalUserType = {
	name: string
}

type AdminUserType = {
	name: string
	role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType): string {
	if ('role' in user) {
		return `This is ${user.name} and my role is ${user.role}`
	} else {
		return `This ${user.name} and i'm a Normal User`
	}
}

const normalUserOne: NormalUserType = { name: 'MR. X' }
const adminUserOne: AdminUserType = { name: 'ismail', role: 'admin' }

// console.log(getUser(normalUserOne))
// console.log(getUser(adminUserOne))

// instance of guard (it guard class and object)

class Animal {
	name: string
	species: string
	sound: string
	constructor(name: string, species: string, sound: string) {
		this.name = name
		this.species = species
		this.sound = sound
	}

	makeSound() {
		return `${this.name} make sound ${this.sound}`
	}
}

class Dog extends Animal {
	constructor(name: string, species: string, sound: string) {
		super(name, species, sound)
	}

	makeGuard() {
		console.log(`The ${this.name} Dog Guard our Garden and ${this.makeSound()}`)
	}
}
class Cat extends Animal {
	constructor(name: string, species: string, sound: string) {
		super(name, species, sound)
	}

	sleep() {
		console.log(`The ${this.name} Cat is always sleep and ${this.makeSound()}`)
	}
}

// check type guard in a class and object
function getAnimal(animal: Animal) {
	if (animal instanceof Dog) {
		animal.makeSound()
		animal.makeGuard()
	} else if (isCat(animal)) {
		animal.makeSound()
		animal.sleep()
	} else {
		animal.makeSound()
	}
}

// check type using function
function isCat(animal: Animal): animal is Cat {
	return animal instanceof Cat
}

const animalOne = new Dog('German Shepard', 'dog', 'gew')
const animalTwo = new Cat('Persian', 'Cat', 'Mewa')
getAnimal(animalOne)
getAnimal(animalTwo)
