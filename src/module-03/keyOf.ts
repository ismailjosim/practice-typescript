// Let's say we have an interface representing a generic object with a specific property
interface HasName {
	name: string
}

// A generic function that takes an object and a key of that object
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key]
}

// Example usage
const personKey: HasName = { name: 'John Doe' }
console.log(getProperty(person, 'name')) // Output: John Doe
// console.log(getProperty(person, "age")); // This would result in a TypeScript error because "age" is not a property of `person`

/*
In this example:
    *- T is a generic type representing any object type.
    *- K is a generic type parameter constrained by keyof T, meaning it must be a key of type T.
    *- The getProperty function takes an object of type T and a key K of that object. It returns the value     corresponding to the provided key.
    *- This ensures that you can only access properties that actually exist on the object type T. If you try to access a property that doesn't exist on the object, TypeScript will raise a type error.


*/

type PersonType = {
	name: string
	age: number
	address: string
}

type optionType = 'name' | 'age' | 'address' // create manually

type newTypeUsingKeyOf = keyof PersonType

const a: optionType = 'address'
const b: newTypeUsingKeyOf = 'address'

// function getPropertyValue(obj: object, key: string) {
// 	obj[key]
// }
// const properties = getPropertyValue({ name: 'mr. x', age: 25 }, age)

// ** to make the above function generic
function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
	obj[key]
}
const properties = getPropertyValue({ name: 'mr. x', age: 25 }, 'age')
