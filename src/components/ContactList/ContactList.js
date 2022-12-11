import './contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
    
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
    const onRemoveContact = (id) => {
        const action = deleteContact(id);    
        dispatch(action);
    }
    
    const elements = filteredContacts.map(({ name, id, number }) => {
        return <li className="contacts_item" key={id}>
            
            {name}: {number}
            <button type="button" className='btn_remove' onClick={() => onRemoveContact(id)}>X</button>
        </li>
    })

    return (
        <ul className="contact_list">{elements}</ul>
    )
}