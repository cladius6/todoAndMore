import { React, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
} from '@chakra-ui/react';

import DatePicker from './DatePicker.js';
import { Formik, Form, Field } from 'formik';

function EditModal({ isOpen, onClose, date_created, tododata, editTodo }) {
  const id = tododata.id.id;
  var name = tododata.content.content;
  var desc = tododata.description.description;
  var status = tododata.status.status;
  var priority = tododata.priority.priority;
  var created = tododata.date_created.date_created;
  const [selectedDateCreated, setStartDateCreated] = useState(
    new Date(created)
  );
  const [selectedDateDeadline, setStartDateDeadline] = useState();
  return (
    <Modal size="sm" htmlFor="date_created" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Item</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            id: id,
            name: name,
            description: desc,
            status: status,
            date_created: selectedDateCreated.toISOString(),
            deadline: selectedDateDeadline,
            priority: priority,
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              editTodo(values);
              actions.setSubmitting(false);
              onClose();
            }, 1000);
          }}
        >
          {props => (
            <Form>
              <ModalBody>
                <Field as="div" name="name">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" placeholder={name} />
                    </FormControl>
                  )}
                </Field>
                <Field as="div" name="description">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input {...field} id="description" placeholder={desc} />
                    </FormControl>
                  )}
                </Field>

                <Field as="div" name="priority">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>Piority</FormLabel>
                      <NumberInput
                        onChange={v => {
                          props.setFieldValue(field.name, v);
                        }}
                        id="priority"
                        min={1}
                        max={10}
                      >
                        <NumberInputField placeholder={priority} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  )}
                </Field>
                <Field as="div" name="date_created">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>Date created</FormLabel>
                      <DatePicker
                        id="date_created"
                        selected={selectedDateCreated}
                        onChange={date => {
                          setStartDateCreated(date);
                          props.setFieldValue(field.name, date);
                        }}
                        dateFormat="MM/dd/yyyy HH:mm:ss"
                        showTimeInput
                        customInput={
                          <Input selectedDate={selectedDateCreated} />
                        }
                      />
                      <FormHelperText m="10px">
                        Date this item was created.
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field as="div" name="deadline">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>Deadline</FormLabel>
                      <DatePicker
                        selected={selectedDateDeadline}
                        onChange={date => {
                          setStartDateDeadline(date);
                          props.setFieldValue(field.name, date);
                        }}
                        dateFormat="MM/dd/yyyy hh:mm:ss aa"
                        showTimeInput
                        customInput={
                          <Input selectedDate={selectedDateDeadline} />
                        }
                      />
                      <FormHelperText m="10px">
                        Optional deadline.
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field as="div" name="status">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>Status</FormLabel>
                      <Switch
                        colorScheme="teal"
                        defaultChecked={status}
                        id="status"
                        onChange={val =>
                          props.setFieldValue(field.name, val.target.checked)
                        }
                      />
                      <FormHelperText
                        htmlFor={'switch' + tododata.id.id}
                        m="10px"
                      >
                        Did you finish this item?
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  colorScheme="teal"
                  mr={3}
                  isLoading={props.isSubmitting}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

function DelConfModal({
  isOpenDel,
  onCloseDel,
  deleteTodo,
  tododata,
  initialRef,
}) {
  const id = tododata.id.id;
  return (
    <Modal isOpen={isOpenDel} onClose={onCloseDel} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onCloseDel}>
            Cancel
          </Button>
          <Button
            ref={initialRef}
            colorScheme="red"
            onClick={() => {
              deleteTodo(id);
              onCloseDel();
            }}
          >
            Apply
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const TodoExt = ({
  isOpen,
  onClose,
  isOpenDel,
  onCloseDel,
  date_created,
  tododata,
  editTodo,
  deleteTodo,
  initialFocusRef,
}) => {
  return (
    <>
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        date_created={date_created}
        tododata={tododata}
        editTodo={editTodo}
      />
      <DelConfModal
        isOpenDel={isOpenDel}
        onCloseDel={onCloseDel}
        deleteTodo={deleteTodo}
        tododata={tododata}
        initialRef={initialFocusRef}
      />
    </>
  );
};

export default TodoExt;
