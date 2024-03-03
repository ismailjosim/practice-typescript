class BankAccount {
	name: string
	id: number
	// private balance: number
	protected balance: number

	constructor(name: string, id: number, balance: number) {
		this.name = name
		this.id = id
		this.balance = balance
	}
}

const UCBBank = new BankAccount('Md. JASIM', 6560, 20000)

console.log(UCBBank) // { name: 'Md. JASIM', id: 6560, balance: 0 }

// the above code we can modify the info from outside to prevent this we can use accessModifier to prevent that issues. if we set that private balance: number it will prevent to modify from outside and show an error "Property 'balance' is private and only accessible within class 'BankAccount'"

class StudentAccount extends BankAccount {
	test() {
		this.id
		this.name
		this.balance
	}
}
