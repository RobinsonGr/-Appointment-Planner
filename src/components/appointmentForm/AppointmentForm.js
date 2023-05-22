import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const selectContactName = (e) => {

    const contactName = e.target.value;
    const searchName = contacts.find(contact => contact.name === contactName)

    setContact(searchName)
  
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input onChange={({target}) => setTitle(target.value) }></input>
      </label>

      <label>
        Date
        <input type="date" min={getTodayString()} onChange={({target}) => setDate(target.value) }></input>
      </label>

      <label>
        Time
        <input type="time" onChange={({target}) => setTime(target.value) }></input>
      </label>

      <ContactPicker selectContactName={selectContactName} contacts={contacts}/>

      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};
