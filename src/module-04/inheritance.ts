// Inheritance In Typescript
class EmployCommonInfo {
	name: string
	age: number
	location: string
	designation: string

	constructor(
		name: string,
		age: number,
		location: string,
		designation: string,
	) {
		this.name = name
		this.age = age
		this.location = location
		this.designation = designation
	}
}

class webTeam extends EmployCommonInfo {
	constructor(
		name: string,
		age: number,
		location: string,
		designation: string,
	) {
		super(name, age, location, designation)
	}

	responsibilities() {
		return `${this.name.toLowerCase()} have to take Support Session.`
	}
}

const webTeamEmployOne = new webTeam('JASIM', 25, 'Bhola', 'Web Instructor')

console.log(webTeamEmployOne.responsibilities())
