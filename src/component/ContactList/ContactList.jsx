import React from 'react'
import s from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";
function ContactList({contacts,onDelete}) {
    // const deleteContact = todoId => {
    //     setContacts(contacts.filter(item => item.id !== todoId));
    // };
    return (
        <div >
            <h3>Список контактов:</h3>
            <ul className={s.contactList}>
                <Contact contacts={contacts} onDelete={onDelete}/>
            </ul>
            </div>
)
}

export default ContactList
