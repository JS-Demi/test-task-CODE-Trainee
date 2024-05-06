import { Filters, IWorker, IWorkers } from 'types/types'
import { create } from 'zustand'
interface UseWorkersStore {
	workers: IWorker[]
	activeFilter: Filters
}
export const useWorkersStore = create<UseWorkersStore>()((set) => ({
	workers: [],
	activeFilter: Filters.All,
	setWorkers: (workers: IWorker[]) => set({ workers }),
	setActiveFilter: (filter: Filters) => set({ activeFilter: filter }),
}))
