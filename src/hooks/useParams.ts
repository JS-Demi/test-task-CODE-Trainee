import { Departments } from '../types/types'

const getParams = (param: Departments) => {
	return {
		params: {
			__example: param,
			__dynamic: true,
		},
	}
}
export default getParams
