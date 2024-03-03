type Alphanumeric = number | string
// key of guard

function addTwoNum(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2
	} else {
		return num1.toString() + num2.toString()
	}
}
addTwoNum('1', '2')
addTwoNum(3, 4)

// in guard

type NormalUserType = {
	name: string
	role: 'member'
}

type AdminUserType = {
	name: string
	role: 'admin'
}
