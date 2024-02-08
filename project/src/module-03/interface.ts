/**
 *
 *
 *
 *
 *
 */

type User = {
	name: string
	age: number
}

// we can write similar thing with interface
interface IUser {
	name: string
	age: number
}

// ? comment: when we should use alias when should use interface:
// answer: We will use type alias in primitive type and interface for object type data.

const userWithTypeAlias: User = {
	name: 'ismail',
	age: 20,
}

// it also works with object, function and array

// function type with type alias
// type addNumbersType = (num1: number, num2: number) => number

// const addNumbers: addNumbersType = (num1, num2) => num1 + num2

// function type with type interface
interface IAddNumbersType {
	(num1: number, num2: number): number
}

const addNumbers: IAddNumbersType = (num1, num2) => num1 + num2

//*** comment: we will use type alias in function

// Array (type alias)
//
// const rollNumbers2: rollNumbersType = [1, 4, 5]

// Array (type interface)
type rollNumbersType = number[]
interface IRollNumbers {
	[index: number]: number
}
const rollNumbers2: IRollNumbers = [1, 4, 5]
