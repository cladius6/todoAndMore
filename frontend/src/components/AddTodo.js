import { React,useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react'

const AddTodo = ( {addTodo} ) => {
	const [content, setContent] = useState('')
	const [description, setDescription] = useState('')

	const addTodoHandler = e => {
		e.preventDefault()
		addTodo({content},)
	}
	return (
		<Box p='5' size='lg' display='flex' maxW='xl' bg='gray.800' alignItems='center'>
			<Input fontSize='32px' size='lg' borderRadius='0' variant='flushed' placeholder='Name of todo item to add.' onChange={e => setContent(e.target.value)}/>
			<Button fontSize='32px' variant='ghost' size='lg' textTransform='uppercase' borderRadius='0' colorScheme='teal' onClick={addTodoHandler}>Add</Button>
		</Box>
	);
}

export default AddTodo
