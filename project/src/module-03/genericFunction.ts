// const createArray = (params: string): string[] => {
// 	return [params] // (parameter) params: string
// }
const createArray = <T>(params: T): T[] => {
	return [params]
}

const res = createArray<string>('Bangladesh')
const res2 = createArray<boolean>(true)
const res3 = createArray<{ name: string; age: number }>({
	name: 'ismail',
	age: 25,
})

// with multiple params

const createCoffee = <X, Y>(beansType: X, Water: Y): [X, Y] => {
	return [beansType, Water]
}

const espresso = createCoffee<string, number>('Robusta', 9)
const americano = createCoffee<string, string>('espresso', 'hot water')
// console.log(americano)

// Spread Operator
const job = 'Web instructor'
const generalInfo = {
	name: 'ismail',
	age: 25,
	salary: 50000,
}

// const myInfo = { ...generalInfo, job }

// same thing we can do with function
const company = (employInfo: object) => {
	const designation = 'Web instructor'
	const employPortal = { ...employInfo, designation }
	return employPortal
}

const finalResult = company(generalInfo)
console.log(finalResult)
