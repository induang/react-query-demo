import axios from 'axios';

const baseUrl = 'http://localhost:4000'

export interface ICourseDetail {
	id?: string;
	title: string;
	description: string;
	duration: number;
	authors: string[];
}

export const getAllCourse = () => axios.get(`${baseUrl}/courses/all`)
.then((res) => {
	return res.data.result
})
.catch((reason) => {
	console.log(reason)
})

export const createCourse = (course: ICourseDetail) => axios.post(
	`${baseUrl}/courses/add`, 
	course, 
	{
		headers: {
		'Content-Type': 'application/json;charset=utf-8',
		'Cache-Control': 'no-cache',
		Authorization: 'Bearer FNJ0pHl7mCuFhlgkXECGw2X1F40+X9LNFspuOicKYvI/PZCbUeKM1GpB7Z8WtobO3ZloyCrwKt2kuRkQaApDWgB71WUxnHovf3z2hEwx5bSI//6erzr3cRAM9UjpIAEfqiZoPDde+wMFovMwbNBDYqTJrgkHTfahcXOgCAukTByqLLGs2pmTNvmEdifd4OukgszIVMup6/NPXivjcR0IYAYuKYAqiLpXrZ73IpNmIIrLwX8OJPgEZafC9c8TTFoQVWuZ42kGYasvMGbjo2sUhqSJtzjHF+P3Xz9w1eLup3/MBHRu5JxCF2QarJPQJfsaZZQgHZ2nkSa2p8DU+4Px1w=='
	}
}).then((res) => res.data.result)
.catch((reason) => {
	console.log(reason)
})