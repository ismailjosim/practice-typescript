interface CrushInterface<T> {
	name: string
	husband: T
}

const crushOne: CrushInterface<boolean> = {
	name: 'pakhi',
	husband: true,
}
const crushTwo: CrushInterface<string> = {
	name: 'pakhi',
	husband: 'Solim uddin',
}
const crushThree: CrushInterface<number> = {
	name: 'pakhi',
	husband: 5,
}
const crushFour: CrushInterface<object> = {
	// not a best practice here we can also define object properties
	name: 'pakhi',
	husband: {
		name: 'john doe',
		salary: 5000,
	},
}
// for multiple generic type
interface PersonInterface<T, U = null> {
	name: string
	maritalStatus: string
	husband?: T
	wife?: U
}

const personOneInfo: PersonInterface<object, object> = {
	name: 'person one',
	maritalStatus: 'single',
	husband: {
		status: true,
		name: 'john doe',
	},
}

// so the best practice will be tell what we input like this
const personTwoInfo: PersonInterface<
	{ status: boolean; name: string },
	object
> = {
	name: 'person one',
	maritalStatus: 'single',
	husband: {
		status: true,
		name: 'john doe',
	},
}
