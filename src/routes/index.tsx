import { Flex } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import CardsList from '../features/workersList/CardsList'
import SearchLayout from '../components/SearchLayout'

export const Route = createFileRoute('/')({
	component: Main,
})

function Main() {
	return (
		<Flex flexDirection={'column'} gap={4}>
			<SearchLayout />
			<CardsList />
		</Flex>
	)
}
