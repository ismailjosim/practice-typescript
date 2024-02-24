// union type
type NoobDeveloper = {
	name: string
	age: number
}

type JuniorDeveloper = {
	name: string
	age: number
	expertise: string
	experience: number
}

const firstPerson: NoobDeveloper | JuniorDeveloper = {
	name: 'ismail',
	age: 25,
	expertise: 'ReactJS',
	experience: 25,
	// profession: 'developer', it will show error.
}
// intersection type
type GeneralType = {
	name: string
	age: number
	address: string
}
enum Level {
	Junior,
	Mid,
	Senior,
}

// *** By default enum value will be index order like 0, 1, 2, 3..... but wek can change the value of enum like this: Junior = "Junior"

type DeveloperType = GeneralType & {
	expertise: string
	isWorking: boolean
	level: Level // Enum type
}

const personOne: GeneralType = {
	name: '',
	age: 0,
	address: '',
}

const personTwo: DeveloperType = {
	name: '',
	age: 0,
	address: '',
	expertise: '',
	isWorking: true,
	level: Level.Junior,
}

// ! enum use is not recommended.
