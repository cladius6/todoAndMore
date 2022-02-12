import { React, useState } from 'react';
import { Box, Button, Input, Tooltip } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const AddTodo = ({ addTodo }) => {
  const [name, setContent] = useState('');
  const [description, setDescription] = useState('');

  const addTodoHandler = e => {
    e.preventDefault();
    addTodo({ name });
    setContent('')
  };

  return (
    <form onSubmit={addTodoHandler} id="todo_add_form">
      <Box
        p="5"
        size="lg"
        display="flex"
        maxW="xl"
        bg="gray.800"
        alignItems="center"
      >
        <Tooltip hasArrow label="Press enter to add quickly">
          <Input
            autoFocus
            fontSize="32px"
            size="lg"
            borderRadius="0"
            variant="flushed"
            placeholder="Name"
            onChange={e => setContent(e.target.value)}
          />
        </Tooltip>
        <Tooltip hasArrow label="Add with more informations.">
          <Button
            leftIcon={<AddIcon />}
            fontSize="32px"
            variant="ghost"
            size="lg"
            textTransform="uppercase"
            borderRadius="0"
            colorScheme="teal"
            onClick={addTodoHandler}
          >
            Add
          </Button>
        </Tooltip>
      </Box>
    </form>
  );
};

export default AddTodo;
