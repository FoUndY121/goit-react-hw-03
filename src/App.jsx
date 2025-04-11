import React from 'react';
import ContactForm from "./component/ContaktFrom/ContactForm.jsx";
import ContactList from "./component/ContactList/ContactList.jsx";
import { useLocalStorage } from './component/UseLocalStorage/useLocalStorage.js'; // или './useLocalStorage' — в зависимости от места
function App() {
    const [contacts, setContacts] = useLocalStorage("contacts", []);
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