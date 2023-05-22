import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({addAppointment, appointments, contacts}) => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState([]);

  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      title,
      date,
      time,
      contact,
    }
    addAppointment(appointment)
    /*
    Add contact info and clear data  
    */   

  };

  const props = {
    title,
    setTitle,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
    contacts,
    contact,
    setContact
  }


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...props}/> 
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList allTiles={appointments}/>
      </section>
    </div>
  );
};