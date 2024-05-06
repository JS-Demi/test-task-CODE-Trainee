import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import { FC } from 'react'
import { nanoid } from 'nanoid'

interface SkeletonProps {}

const LoadingSkeleton: FC<SkeletonProps> = () => {
	const template = Array(7).fill(null)
	return (
		<>
			<Flex flexDirection={'column'} gap='12px'>
				{template.map(() => (
					<Flex key={nanoid()} py={'16px'} width={'350px'} gap={'15px'}>
						<SkeletonCircle size='72px' />
						<Flex flexDirection={'column'} justifyContent={'center'} gap='5px'>
							<Skeleton borderRadius={'50px'} height={'16px'} width={'144px'} />
							<Skeleton borderRadius={'50px'} height={'12px'} width={'80px'} />
						</Flex>
					</Flex>
				))}
			</Flex>
		</>
	)
}

export default LoadingSkeleton
