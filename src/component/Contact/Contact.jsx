import React from "react";

// function Contact({contacts})
function Contact({contacts,onDelete})

{
    return (
       <div >
           {contacts.map((item,index)=>{
               return(
                   <ul key={item.id}>
                       <p>#{index + 1}</p>
                       <li>{item.username}</li>
                       <li>{item.number}</li>
                       <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
                   </ul>

               );
           })}

       </div>

    )
}

export default Contact
