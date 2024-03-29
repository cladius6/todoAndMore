import React, { useState, useRef } from 'react';
import {
  useDisclosure,
  IconButton,
  Grid,
  GridItem,
  ListItem,
  Box,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
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
}) {
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

    var checked = status ? true : false;

    function handleChange(e){
      completeItem(id)
    }

    function descriptionAccordion(){
        if (description != ''){
            return(
          <Accordion allowMultiple grid="2">
            <AccordionItem border="none">
              <AccordionButton
                _hover={{ boxShadow: 'inner' }}
                p="0"
                _expanded={{ color: 'gray.100' }}
              >
                <AccordionIcon fontSize="28px" flex="1" />
              </AccordionButton>
              <AccordionPanel textAlign="left" pb="4">
                <Box fontSize="16px" color="gray.100">
                  Description: <br />
                </Box>
                {description}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
            );
        }
    }

  return (
    <ListItem
      as="button"
      p="5px"
      width="100%"
      transition="all 1000ms scale"
      _hover={{ boxShadow: 'dark-lg' }}
    >
      <Grid
        justify="center"
        templateColumns="repeat(12,1fr)"
        templateRows="repeat(1, 1fr)"
      >
        <GridItem fontSize="xl" colSpan="2" rowSpan="1" p="0">
          <Box display="flex" justifyContent="left" h="100%">
      <Checkbox
        id={'checkbox'+id}
        size=""
        colorScheme="teal"
        isChecked={checked}
        onChange={(e) => handleChange(e)}
      />
          </Box>
        </GridItem>
        <GridItem colSpan="6" rowSpan="1">
          {content}
          {descriptionAccordion()}
        </GridItem>

        <GridItem fontSize="xs" colSpan="2" rowSpan="1">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            {creation.year}.{creation.month}.{creation.day} | {creation.time}
          </Box>
        </GridItem>

        <GridItem fontSize="xs" colSpan="2" rowSpan="1">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <IconButton
              colorScheme="teal"
              fontSize="lg"
              mr="2"
              aria-label="edit"
              onClick={onOpen}
              icon={<EditIcon />}
            />
            <IconButton
              colorScheme="teal"
              fontSize="lg"
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
              editTodo={editTodo}
              initialFocusRef={initialRef}
            />
          </Box>
        </GridItem>
      </Grid>
    </ListItem>
  );
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
