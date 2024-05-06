import getParams from 'hooks/useParams'
import { api } from 'services/api'
import { Departments, IWorkers } from 'types/types'

export default function fetchWorkers(filter: Departments): Promise<IWorkers> {
	return api
		.get('users', getParams(filter))
		.then(({ data }) => data)
		.catch(() => console.log('error'))
}
