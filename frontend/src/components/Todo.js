import React, { useState } from 'react';
import {
  useDisclosure,
  IconButton,
  Grid,
  GridItem,
  ListItem,
  Box,
  Checkbox,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import TodoExt from './TodoExt.js';
import '../static/checkbox.css';

function TodoItem({
  id,
  content,
  description,
  status,
  date_created,
  deadline,
  priority,
  completeItem,
    editTodo,
  deleteTodo,
}){
  const initialRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDel,
    onOpen: onOpenDel,
    onClose: onCloseDel,
  } = useDisclosure();
  const tododata = {
    id: { id },
    content: { content },
    description: { description },
    status: { status },
    date_created: { date_created },
    deadline: { deadline },
    priority: { priority },
  };
  const creation = {
    year: date_created.slice(0, 4),
    month: date_created.slice(5, 7),
    day: date_created.slice(8, 10),
    time: date_created.slice(11, 19),
  };
  const dato = new Date(date_created);

  function CheckboxTodo() {
    let checked =false;

    const handleChange = () => {
      completeItem(id);
    };
    if (status === true) {
      return (
        <Checkbox
          h="100%"
          width="100%"
          isChecked={!checked}
          onChange={() => handleChange()}
        >
          {content}
        </Checkbox>
      );
    } else {
      return (
        <Checkbox
          h="100%"
          width="100%"
          isChecked={checked}
          onChange={() => handleChange()}
        >
          {content}
        </Checkbox>
      );
    }
  }

  if (description === '') {
    return (
      <ListItem
        as="button"
        p="5px"
        width="100%"
        transition="all 200ms scale"
        _hover={{ bg: 'gray.700' }}
      >
        <Grid
          justify="center"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(7,1fr)"
        >
          <GridItem fontSize="xl" colSpan="5" rowSpan="1">
            {CheckboxTodo()}
          </GridItem>
          <GridItem fontSize="xs" colSpan="1" rowSpan="1">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              {creation.year}.{creation.month}.{creation.day} | {creation.time}
            </Box>
          </GridItem>
          <GridItem fontSize="xs" colSpan="1" rowSpan="1">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <IconButton
                mr="2"
                aria-label="edit"
                onClick={onOpen}
                icon={<EditIcon />}
              />
              <IconButton
                aria-label="delete"
                icon={<DeleteIcon />}
                onClick={onOpenDel}
              />
              <TodoExt
                isOpen={isOpen}
                onClose={onClose}
                isOpenDel={isOpenDel}
                onCloseDel={onCloseDel}
                tododata={tododata}
                date_created={dato}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                initialFocusRef={initialRef}
              />
            </Box>
            <Box></Box>
          </GridItem>
        </Grid>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        as="button"
        p="5px"
        width="100%"
        transition="all
                200ms scale"
        _hover={{ bg: 'gray.700' }}
      >
        <Grid
          justify="center"
          templateRows="repeat(2,1fr)"
          templateColumns="repeat(7,1fr)"
        >
          <GridItem fontSize="xl" colSpan="5" rowSpan="1">
            {CheckboxTodo()}
          </GridItem>

          <GridItem fontSize="xs" colSpan="1" rowSpan="2">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              {creation.year}.{creation.month}.{creation.day} | {creation.time}
            </Box>
          </GridItem>

          <GridItem fontSize="xs" colSpan="1" rowSpan="2">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <IconButton
                mr="2"
                aria-label="edit"
                onClick={onOpen}
                icon={<EditIcon />}
              />
              <IconButton
                aria-label="delete"
                ref={initialRef}
                icon={<DeleteIcon />}
                onClick={onOpenDel}
              />
              <TodoExt
                isOpen={isOpen}
                onClose={onClose}
                isOpenDel={isOpenDel}
                onCloseDel={onCloseDel}
                tododata={tododata}
                date_created={dato}
                deleteTodo={deleteTodo}
              />
            </Box>
          </GridItem>

          <GridItem fontSize="xs" colSpan="5" rowSpan="2" color="gray.400">
            {description}
          </GridItem>
        </Grid>
      </ListItem>
    );
  }
}

const Todo = ({
  id,
  content,
  description,
  status,
  date_created,
  deadline,
  priority,
  setIsOpenDel,
  completeItem,
  editTodo,
  deleteTodo,
}) => {
  return (
    <TodoItem
      id={id}
      content={content}
      description={description}
      status={status}
      date_created={date_created}
      deadline={deadline}
      priority={priority}
      completeItem={completeItem}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />
  );
};
export default Todo;
