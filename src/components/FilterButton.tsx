import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Departments } from 'types/types'

interface ButtonProps {
	selected: string
	name: string
	endpoint: Departments
}

const FilterButton: FC<ButtonProps> = ({ selected, name, endpoint }) => {
	return (
		<Box
			as='button'
			px={'16px'}
			borderBottom={selected === endpoint ? '2px solid' : 'none'}
			color={selected === endpoint ? 'black' : ''}
			borderColor={'#6534FF'}
			height={'36px'}
		>
			{name}
		</Box>
	)
}

export default FilterButton
