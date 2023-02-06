import { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import style from './ContactForm.module.css';
import { addContact } from "redux/contacts/contacts.thunk";

export const ContactForm = () => {
  const contactsFromBack = useSelector((state) => state.contacts.contacts.items)
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onDataChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const AddNewContact = () => {

    if (onDoppleContactInfoAdd(name, number)) {
      toast.error(`Contact "${name}" or number "${number}" is already in your contactlist!`);
      return;
    }
    const newContact = {
      name: name,
      number: number,
    }
    dispatch(addContact(newContact))
  }

  const onDoppleContactInfoAdd = () => {
    return contactsFromBack.find(contact => contact.number === number || contact.name === name);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    AddNewContact();
    setName('');
    setNumber('');

  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onDataChange}
          />
        </label>
        <label >
          Number:
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onDataChange}
          />
        </label>
        <button type="submit" className={style.formbtn}>Add Contact</button>
      </form>
    </div>
  );
}
