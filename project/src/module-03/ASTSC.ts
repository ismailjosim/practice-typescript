// // *** In TypeScript, asynchronous programming is commonly done using promises, async/await, or callback functions.
// type Person = {
// 	name: string
// 	age: number
// }

// const data: Person = {
// 	name: 'ismail',
// 	age: 20,
// }

// // *** 01: Promise
// function fetchData(): Promise<object> {
// 	return new Promise((resolve, reject) => {
// 		// Simulate fetching data asynchronously

// 		if (data) {
// 			return resolve(data)
// 		} else {
// 			reject('Data not found!')
// 		}
// 	})
// }

// fetchData().then((data) => {
// 	console.log(data) // Output: Data fetched successfully
// })

// // *** 02: Async/Await
// async function fetchData2(): Promise<object> {
// 	// here Promise<object> we can specify which type of output will return
// 	return new Promise((resolve, reject) => {
// 		if (data) {
// 			return resolve(data)
// 		} else {
// 			reject('Data not found!')
// 		}
// 	})
// }

// async function processData() {
// 	const data = await fetchData2()
// 	console.log(data) // Output: Data fetched successfully
// }

// processData()

// // *** 03: Callback Functions
// function fetchData3(callback: (data: string) => void) {
// 	// Simulate fetching data asynchronously
// 	setTimeout(() => {
// 		callback('Data fetched successfully')
// 	}, 2000)
// }

// fetchData3((data) => {
// 	console.log(data) // Output: Data fetched successfully
// })

// fetch data
interface ITodo {
	userId: number
	id: number
	title: string
	completed: boolean
}

const getTodo = async (): Promise<ITodo> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
	const data = await res.json()
	return data
}

const getTodoData = async (): Promise<void> => {
	const res = await getTodo()
	console.log(res)
}
getTodoData()
