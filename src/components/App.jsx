import React from "react";
import Form from "./Form/Form";
import { Filter } from './Filter/Filter';
import { Loader } from "./Loader/Loader";
import { ContactList } from './ContactList/ContactList';
import './Form/form.css';
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts, selectIsLoading, selectError } from "redux/contacts/contacts-selector";

export function App() {

  const contacts = useSelector(getFilteredContacts);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
 
  return (
      <>
      <div className="form_wrapper">
        <h1>Phonebook</h1>
        <Form />
        
      </div> 
      <div className="phonebook_contaner">
        <h2> Contacts</h2> 
        <Filter />
         {/* <ContactList className="phonebook-container" />  */}
        {isLoading && !error && <Loader />}
        {contacts?.length > 0 && (<ContactList className="phonebook-container" />  )}
        {/* <ContactList /> */}
      </div>
     {error && <p>Oooops... Something wemt wrong</p>}
      </>
    )
}


// {contacts?.lenght === 0 && !isLoading && (<p>Contacts list is empty! Try to add contact</p>)} 
//         {contacts?.lenght === 0 && (<p>Contacts list is empty! Try to add contact</p>)}

