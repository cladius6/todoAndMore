import { React,useState } from 'react'
import {Divider, Center, IconButton, Grid, GridItem, Badge, ListItem, Box, Text, Heading } from '@chakra-ui/react'
import { DeleteIcon,EditIcon } from '@chakra-ui/icons'
import axios from 'axios'



function TodoItem({ content, description, date_created, date_goal }) {
	const creation = {
		year: date_created.slice(0,4),
		month: date_created.slice(5,7),
		day: date_created.slice(8,10),
		time: date_created.slice(11,19),
	}
	if (description == ''){
		return (
	  <ListItem
	  as='button'
	  p='5px'
	  width='100%'
	  transition='all 200ms scale'
	  _hover={{bg: 'gray.700'}}>
        <Grid justify='center' templateRows='repeat(1, 1fr)' templateColumns='repeat(7,1fr)'>

		<GridItem fontSize='xl' colSpan='5' rowSpan='1'>
            { content }
		</GridItem>

		<GridItem fontSize='xs' colSpan='1' rowSpan='1'>
            <Box display='flex' justifyContent='center' alignItems='center' h='100%'>
                { creation.year }.{ creation.month }.{ creation.day } | { creation.time }
            </Box>
		</GridItem>


		<GridItem fontSize='xs' colSpan='1' rowSpan='1'>
	   <Box display='flex' justifyContent='center' alignItems='center' h='100%'>
        <IconButton mr='2' aria-label='delete' icon={<EditIcon />} />
		  <IconButton aria-label='delete' icon={<DeleteIcon />} />
	  </Box>
		</GridItem>
	  </Grid>
	  </ListItem>
		)
	}else{
  return (
	  <ListItem
	  as='button'
	  p='5px'
	  width='100%'
	  transition='all 200ms scale'
	  _hover={{bg: 'gray.700'}}>
	  <Grid justify='center' templateRows='repeat(2,1fr)' templateColumns='repeat(7,1fr)'>

		<GridItem fontSize='xl' colSpan='5' rowSpan='1'>
			{ content }
		</GridItem>


		<GridItem fontSize='xs' colSpan='1' rowSpan='2'>
	   <Box display='flex' justifyContent='center' alignItems='center' h='100%'>
			{ creation.year }.{ creation.month }.{ creation.day } | { creation.time }
	  </Box>
		</GridItem>

		<GridItem fontSize='xs' colSpan='1' rowSpan='2'>
	   <Box display='flex' justifyContent='center' alignItems='center' h='100%'>
            <IconButton mr='2' aria-label='delete' icon={<EditIcon />} />
		  <IconButton aria-label='delete' icon={<DeleteIcon />} />
	  </Box>
		</GridItem>

		<GridItem fontSize='xs' colSpan='5' rowSpan='2'>
			{ description}
		</GridItem>

	  </Grid>
	  </ListItem>
  )
	}
}

const Todo = ( {id, content, description, date_created, date_goal}) => {
	const [newTitle, setTitle] = useState(content)
	return (
		<TodoItem
			content={content}
			description={description}
			date_created={date_created}
			date_goal={date_goal}
		/>
	)
}
// N | DATE | EDIT | DEL | 
export default Todo
