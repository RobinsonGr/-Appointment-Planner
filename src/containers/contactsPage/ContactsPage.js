import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({addContacts, contacts}) => {
 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nonDuplicate, setDuplicate] = useState(false)


  //useEffect is used as a control structure, replacing  the if  i had before
  useEffect(() => {

    const isUniqueName = contacts.some(contact => contact.name === name || contact.email === email);
    setDuplicate(!isUniqueName)
  }, [name])


  const validateNumberUS = () => {
    const usNumberPattern = /^[2-9]\d{2}-\d{3}-\d{4}$/
    return phone.match(usNumberPattern)

  }



  const handleSubmit = (e) => {

    e.preventDefault();

    if(!validateNumberUS()) {
      return alert("must be a US number")
    }

    if(nonDuplicate && name) {

      const newContact = {
        name,
        phone,
        email,
      };

      addContacts(newContact) 
 

    
  setName("")
  setPhone("")
  setEmail("")
    
  } else {

      if(!name) {
        alert ("Add a name please") 
      } else {
        alert("Error, that name already exist")//If the name variable is not empty but the name already exists in the contacts list
      }   
 
  }

  
};


  const props = {
    name,
    phone,
    email,
    setName,
    setEmail,
    setPhone,
    handleSubmit,
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm {...props}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList allTiles={contacts}/>
      </section>
    </div>
  );
};
