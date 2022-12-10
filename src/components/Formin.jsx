import css from '../components/formin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addContacts } from '../redux/contacts/operation';

import { Button } from '@chakra-ui/react';
import { selectContacts } from '../redux/contacts/selectors';

import { Input, FormLabel, useToast, FormControl } from '@chakra-ui/react';
export function FormIn() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    if (contacts.find(contact => contact.name === name)) {
      toast(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl maxW="520px" margin="35px auto" textAlign="center">
        <FormLabel>
          Name
          <Input
            margin="0 "
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            size="md"
            variant="filled"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            margin="0 "
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            size="md"
            variant="filled"
            required
          />
        </FormLabel>
        <Button ml="auto" mr="auto" type="submit" bg="teal" color="#fff">
          Add contact
        </Button>
      </FormControl>
    </form>
  );
}
