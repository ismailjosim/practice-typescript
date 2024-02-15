const numberList = [1, 3, 4, 64, 1] // convert them to string

const convertNum = numberList.map((item) => item.toString())

type AreaNum = {
	height: number
	width: number
}
// lookup types
type x = AreaNum['height']

// get the keys of a type
type AreaKeys = keyof AreaNum

type Properties = {
	name: string
	age: number
	isMarried: boolean
}

// create readonly type

type PropertiesReadonly = {
	readonly name: string
	readonly age: number
	readonly isMarried: boolean
}

const personOneProperties: PropertiesReadonly = {
	name: 'ismail',
	age: 25,
	isMarried: false,
}
// if we set readonly properties then we can't modify the value.
//personOneProperties.name = 'josim' // Cannot assign to 'name' because it is a read-only properties.

// here we need to follow some steps to convert Properties then PropertiesReadonly then we create personOneProperties. we can create this more efficient way using mapped type.
type mappedType = {
	[key in keyof Properties]: Properties[key]
	// dynamic type  name: string;
	// age: number;
	// isMarried: boolean
}

const personOnePropertiesName: mappedType = {
	name: '',
	age: 0,
	isMarried: false,
}

type Area<T> = {
	[key in keyof T]: T[key]
}
const personOneProps: Area<{ name: string; age: number; isMarried: string }> = {
	name: '',
	age: 0,
	isMarried: 'married', // we can change type
}
