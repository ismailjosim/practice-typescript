const crash1: {
	name: string
	age?: number // optional type
	profession: string
	address: string
} = {
	name: 'Person',
	age: 22,
	profession: 'web developer',
	address: 'USA',
}
const crash2: {
	name: string
	age?: number // optional type
	profession: string
	address: string
} = {
	name: 'ISMAIL',
	age: 22,
	profession: 'web developer',
	address: 'Bangladesh',
}
// to avoid this type of type declaration we use type alis. for that we use  a type then specify all the properties name there.

type EmployInfo = {
	name: string
	age?: number // optional type
	designation: string
	address: string
}

const employOne: EmployInfo = {
	name: 'ismail',
	age: 25,
	designation: 'Web Instructor',
	address: 'Char fasson, Bhola',
}
const employTwo: EmployInfo = {
	name: 'josim',
	age: 26,
	designation: 'Web Instructor L2',
	address: 'Dhaka Bangladesh',
}

// type alias with function
type OperationType = (x: number, y: number) => number

const calcMath = (
	numberOne: number,
	numberTwo: number,
	operation: OperationType,
) => {
	return operation(numberOne, numberTwo)
}

// calling the function with operation

const addFn = calcMath(10, 20, (x, y) => x + y)
const summationFn = calcMath(30, 10, (x, y) => x - y)
