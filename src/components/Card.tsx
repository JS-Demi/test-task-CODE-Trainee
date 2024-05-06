import { Box, Flex, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { IWorker } from '../types/types'

interface CardProps {
	worker: IWorker
}

const Card: FC<CardProps> = ({ worker }) => {
	const { avatarUrl, firstName, lastName, userTag, position } = worker
	return (
		<>
			<Image
				src={`${avatarUrl}&t=${Date.now()}`}
				alt={`${firstName} ${lastName}`}
				borderRadius='full'
				w={'72px'}
				h={'72px'}
			/>
			<Flex flexDirection={'column'}>
				<Box fontSize={'16px'} fontWeight={500} color={'#050510'} as='span'>
					{`${firstName} ${lastName}`}{' '}
					<Box color={'#97979B'} as='span'>
						{`${userTag === 'string' ? '' : userTag}`}
					</Box>
				</Box>
				<Box color={'#97979B'} as='span'>
					{position}
				</Box>
			</Flex>
		</>
	)
}

export default Card
