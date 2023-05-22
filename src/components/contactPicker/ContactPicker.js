import React from "react";

export const ContactPicker = ({selectContactName, contacts}) => {
  return (
    <select onChange={selectContactName}>
      <option value="">No option select yet</option>
      {contacts.map((contact, index) => {
       return <option key={index} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
