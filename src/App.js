import './App.css';
import { useState, useEffect } from 'react';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from "uuid";
import Navbar from './pages/main/views/component/Navbar';
import AddContact from './pages/main/views/component/AddContact';
import ContactList from './pages/main/views/component/ContactList copy';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });

    setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) {
      setContacts(retrieveContacts)
}}, [])

  useEffect(() => {
    // if(contacts.length > 0){
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    // }
  }, [contacts])

  return (
    <div className='ui container'>
     <Navbar/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div> 
  );
}

export default App;
