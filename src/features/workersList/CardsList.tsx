import { Flex } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Card from 'components/Card'
import LoadingSkeleton from 'components/LoadingSkeleton'
import { FC } from 'react'
import { Departments } from 'types/types'
import fetchWorkers from './fetchWorkers'

interface CardsListProps {}

const CardsList: FC<CardsListProps> = () => {
	const {
		data: workers,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['workers'],
		queryFn: () => fetchWorkers(Departments.All),
	})
	return (
		<>
			{isLoading && <LoadingSkeleton />}
			{isSuccess && (
				<Flex flexDirection={'column'} gap={'12px'} px={'16px'}>
					{workers.items.map((worker) => (
						<Flex key={worker.id} gap='15px' alignItems={'center'}>
							<Card worker={worker} />
						</Flex>
					))}
				</Flex>
			)}
		</>
	)
}

export default CardsList
