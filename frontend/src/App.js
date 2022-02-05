import {React, useState, useEffect} from 'react';
import {
	ChakraProvider,
	Container,
	VStack,
	Heading,
	Box,
	List,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import axios from 'axios'

import Todo from './components/Todo.js'
import AddTodo from './components/AddTodo.js'
import theme from './theme.js';

function App() {
	const [todos, setTodos] = useState([])

	const getTodos = async () => {
		try {
			const response = await axios.get('/api/v1/todo/')
			const { data } = response
            console.log(data)
			setTodos(data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getTodos()
	}, [])

	const addTodo = async newTodo => {
		try {
			console.log(newTodo)
			await axios.post('/api/v1/todo/', newTodo)
			getTodos()
		}catch(err){
			console.log(err)
		}
	}

	return (
		<ChakraProvider theme={theme}>
		<Box>
			<Container maxW='container.xl' centerContent>
				<Heading>ToDo</Heading>
				<AddTodo addTodo={addTodo}/>
				<List width='100%' mt='5' fontSize='20px'>
					{todos.map((todo, index) => (
						<Todo key={index} id={todo.id} content={todo.content} description={todo.description} date_created={todo.date_created} date_goal={todo.date_goal}/>
					))}
				</List>
			</Container>
		</Box>
		</ChakraProvider>
  );
}

export default App;
