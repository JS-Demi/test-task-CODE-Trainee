export enum Departments {
	All = 'all',
	Analytics = 'analytics',
	Design = 'design',
	Management = 'management',
	QA = 'qa',
	HR = 'hr',
	PR = 'pr',
	Frontend = 'frontend',
	Backend = 'backend',
	Back_office = 'back-office',
	Support = 'support',
	iOS = 'ios',
	Android = 'android',
}

export interface IWorker {
	id: string
	avatarUrl: string
	firstName: string
	lastName: string
	userTag: string
	department: string
	position: string
	birthday: string
	phone: string
}
export interface IWorkers {
	items: IWorker[]
}
