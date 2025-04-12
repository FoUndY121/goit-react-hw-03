import React from 'react';
import { useState } from 'react';
import ContactForm from "./components/ContaktFrom/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useLocalStorage } from './components/UseLocalStorage/useLocalStorage.js';
import SearchBox from "./components/SeachBox/SeachBox.jsx";
function App() {
    const defaultContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ];

    const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
    const [searchQuery, setSearchQuery] = useState('');

    const addContact = (newContact) => {
        const contactWithId = { ...newContact, id: Date.now().toString() };
        setContacts([...contacts, contactWithId]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const filteredContacts = contacts.filter(contact =>
        contact?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={searchQuery} onChange={setSearchQuery} />
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}

export default App;