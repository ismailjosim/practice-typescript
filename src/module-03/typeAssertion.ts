// আমি যদি নিজে ম্যানুয়ালী কোন টাইপ সেট করে দেই তাহলে সেটাই হলো টাইপ assertion.

// exmple:
let value: any = 'Hello, TypeScript!'
let valueName: number = (value as string).length

console.log(valueName) // Outputs: 19

// ? comment: amra jodi sure thaki je amader data type ta ki tahole apmra manually data ke type set kore dibo.

// example using function

function kgToGram(params: string | number): string | number | undefined {
	if (typeof params === 'string') {
		const value = parseFloat(params) * 1000
		return `the converted value is: ${value}GM`
	}
	if (typeof params === 'number') {
		const value = params * 100
		return `the converted value is: ${value}GM`
	}
}

const firstCalc = kgToGram(1000) as number // return: 1000000
const firstCalc2 = kgToGram(1000) as string // return: 1000000

type CustomErrorType = {
	message: string
}

try {
} catch (error) {
	console.log((error as CustomErrorType).message)
}

// syntax
// 1. kgToGram(1000) as number using as
// <number>kgToGram(1000) ==> using angle bracket but this will not in tsx
