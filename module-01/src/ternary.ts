// Ternary operator:
const age: number = 22

// age >= 18 ? console.log('Yes') : console.log('No')

// nullish coalescing operator
const isStudent = ''

const checkStudentRole = isStudent ?? 'Guest' // it didn't work in negative value

const userTwo = isStudent ? isStudent : 'guest'

console.log({ checkStudentRole }, { userTwo })
