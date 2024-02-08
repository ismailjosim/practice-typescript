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
