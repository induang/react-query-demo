import axios from 'axios';

const baseUrl = 'http://localhost:4000'

export const getAllCourse = () => axios.get(`${baseUrl}/courses/all`)
.then((res) => {
	console.log('res: ', res.data.result)
	return res.data.result
})
.catch((reason) => {
	console.log(reason)
})