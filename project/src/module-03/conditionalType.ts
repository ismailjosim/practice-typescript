type MyType<T> = T extends string ? number : boolean

let valueT: MyType<string>

//*** In this example, MyType is a conditional type. It checks whether the type T is a string. If it is, it assigns the type number to MyType; otherwise, it assigns the type boolean.

type a1 = string
type a2 = a1 extends string ? string : null

// *** You can also use conditional types to create more complex type transformations based on the input type:
type TypeName<T> = T extends string
	? 'string'
	: T extends number
	? 'number'
	: 'object'

let name1: TypeName<string> // 'string'
let name2: TypeName<number> // 'number'
let name3: TypeName<boolean> // 'object'
