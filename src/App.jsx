import React, { useState } from 'react'
import ContactForm from "./component/ContaktFrom/ContactForm.jsx";
import ContactList from "./component/ContactList/ContactList.jsx";

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // <--- состояние поиска

    const addContact = (newContact) => {
        // Добавим ID для удаления и ключей
        const contactWithId = {
            ...newContact,
            id: Date.now()
        };
        setContacts(prev => [...prev, contactWithId]);
    };

    const deleteContact = (contactId) => {
        setContacts(contacts.filter(item => item.id !== contactId));
    };
// hello
    const filteredContacts = contacts.filter(contact =>
        contact.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <ContactForm addContact={addContact}  setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
            <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
        </>
    );
}

export default App;
