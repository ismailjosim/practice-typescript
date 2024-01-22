// #1: nullable type
const searchName = (value: string | null) => {
	if (value === null) {
		console.log('There is noting to search!')
	} else {
		console.log('Searching...')
	}
}
searchName(null)

// #2: unknown type: suppose i want to know the age from user and based on user age we will give user access to the party.

/*
 * if the age is below 18 they can't enter the party
 * if the age is over 18 and under 40 they will get free drink.
 * if the age is over 40 and below 70 they will get free juice.

 ! here the main problem is user can input any type of data. for example: they can write:
 18 or 18 years
 */

const partyAccess = (res: unknown) => {
	let age: number = 0
	if (typeof res === 'number') {
		age = res
	}
	if (typeof res === 'string') {
		const convertValue = res.split(' ')[0]
		const convertNum = parseFloat(convertValue)
		age = convertNum
	}

	if (age < 18) {
		console.log(`Your age is ${age} Years old. You can't Enter the Party!`)
	}
	// over 18 and under 40 they will get free drink.
	else if (age >= 18 || age <= 40) {
		console.log(`Your age is ${age} years old. You will get free drink`)
	}
	// if the age is over 40 and below 70 they will get free juice.
	else if (age > 40 || age < 70) {
		console.log(`Your age is ${age} years old. You will age a free juice.`)
	} else {
		console.log('You entered Wrong type')
	}
}

// partyAccess('20 years')

// #2: never type: it will never ever return any value that's why it called never type.
function throwError(message: string): never {
	throw new Error(message)
}
// throwError('Found Error!')
// npx ts-node-dev --respawn .\module-01\src\null-unknown-never.ts
