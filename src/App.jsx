import React from 'react';
import ContactForm from "./Component/ContaktFrom/ContactForm.jsx";
import ContactList from "./Component/ContactList/ContactList.jsx";
import { useLocalStorage } from './Component/UseLocalStorage/useLocalStorage.js';
function App() {
    const defaultContacts = [
        { id: 'id-1', username: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', username: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', username: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', username: 'Annie Copeland', number: '227-91-26' }
    ];

    const [contacts, setContacts] = useLocalStorage("contacts", defaultContacts);
    const [searchQuery, setSearchQuery] = React.useState("");

    const addContact = (newContact) => {
        const contactWithId = {
            ...newContact,
            id: Date.now()
        };
        setContacts(prev => [...prev, contactWithId]);
    };

    const deleteContact = (contactId) => {
        setContacts(contacts.filter(item => item.id !== contactId));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div >
            <ContactForm
                addContact={addContact}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
            />
            <ContactList
                contacts={filteredContacts}
                onDelete={deleteContact}
            />
        </div>
    );
}

export default App;