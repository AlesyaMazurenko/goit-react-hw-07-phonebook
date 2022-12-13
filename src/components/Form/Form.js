import React, { useState } from "react";
import { nanoid } from 'nanoid';
import './form.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/contacts-operations";
import { getContacts } from "redux/contacts/contacts-selector";
// import { contactsReducer } from "redux/contacts/contacts-slice";

const Form = () => {

  // const [state, setState] = useState(initialState);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setPhone(value);
      default:
        return;
    }
  };
  
  const isDuplicate = ({ name, phone }) => {
    const resullt = contacts.find(item => item.name === name || item.phone  === phone);
    return resullt;
  } 

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isDuplicate({ name, phone })) {
      return alert(`Contact with name ${name} or number ${phone} is already in list`);
    }

    // const action = contactsReducer({ name, phone });
    const action = addContact({ name, phone });
    dispatch(action);
    reset();
  };
    
  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor={nameId} className='form_label'>Name
        <input
          type="text"
          name="name" //name cовпадает с полем в state.name!!
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="input_field"
          value={name}
          onChange={handleInputChange}
          id={nameId} />
      </label>
      <label htmlFor={numberId} className='form_label'>Number
        <input
          type="tel"
          name="number" //name cовпадает с полем в state.name!!
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="input_field"
          value={phone}
          onChange={handleInputChange}
          id={numberId} />
      </label> 
      <button type="submit" className='form_btn'>Add contact</button>
    </form>
  );
}

export default Form;

