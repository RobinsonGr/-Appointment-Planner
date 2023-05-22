import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

 


  const [appointments, setAppointment ]= useState([])
  const [contacts, setContacts ]= useState([])



function  addContacts (newContact) {

  setContacts(Prev => [...Prev, newContact])

}

function addAppointment ({title, contact, date, time}) {
  
  setAppointment(Prev => ([...Prev, {title, contact, date, time}]))

}
  


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage  contacts={contacts} 
      addContacts={addContacts}
      /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage 
        addAppointment = {addAppointment}
        contacts={contacts}
        appointments={appointments}
       /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
