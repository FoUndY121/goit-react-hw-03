import React from 'react'
// import s from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";
const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default ContactList;

