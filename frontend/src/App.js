import { React, useState, useEffect } from 'react';
import {
  ChakraProvider,
  Container,
  Heading,
  Box,
  List,
} from '@chakra-ui/react';

import axios from 'axios';

import Todo from './components/Todo.js';
import AddTodo from './components/AddTodo.js';
import theme from './theme.js';
import { Global, css } from '@emotion/react';

function App() {
  const GlobalStyles = css`
    /*
    https://github.com/WICG/focus-visible#2-update-your-css

    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
    .js-focus-visible :focus:not(.focus-visible),
    .js-focus-visible :focus:not(.focus-visible) + [data-focus] {
      outline: none;
      box-shadow: none;
    }
  `;
  const [todos, setTodos] = useState([]);
  const viewsetlink = '/api/v1/';

  const getTodos = async () => {
    try {
      const response = await axios.get(viewsetlink + 'todo/');
      const { data } = response;
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async newTodo => {
    try {
      console.log(newTodo);
      await axios.post(viewsetlink + 'todo/', newTodo);
      getTodos();
      const form = document.getElementById('todo_add_form');
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const completeTodo = async id => {
    try {
      const todo = todos.filter(todo => todo.id === id)[0];
      if (todo.status === true) {
        todo.status = false;
      } else {
        todo.status = true;
      }
      await axios.put(viewsetlink + '/todo/' + id + '/', todo);
      await getTodos();
      return todo.status;
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async todo => {
    try {
      console.log(todo);
      await axios.put(`/api/v1/todo/${todo.id}/`, todo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async id => {
    try {
      await axios.delete(viewsetlink + 'todo/' + id + '/');
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Box>
        <Container maxW="container.xl" centerContent>
          <Heading>ToDo</Heading>
          <AddTodo addTodo={addTodo} />
          <List transition="all 1000ms scale"
width="100%" mt="5" fontSize="20px">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                id={todo.id}
                content={todo.name}
                description={todo.description}
                status={todo.status}
                date_created={todo.date_created}
                deadline={todo.deadline}
                priority={todo.priority}
                deleteTodo={deleteTodo}
                completeItem={completeTodo}
                editTodo={editTodo}
              />
            ))}
          </List>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
