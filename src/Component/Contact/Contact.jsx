import React from "react";
import s from "./Contacts.module.css";
function Contact({contacts,onDelete})

{
    return (
       <>
           {contacts.map((item,index)=>{
               return(
                   <li className={s.contactItem} key={item.id}><p>#{index + 1}</p>
                       <p>{item.number}</p>
                          <p>{item.username}</p>
                       <button type="button" onClick={() => onDelete(item.id)}>Delete</button>

                   </li>
               );
           })}

       </>

    )
}

export default Contact
