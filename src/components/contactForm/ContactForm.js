import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        {/* Controlled input elements, in this case are three */}
        <input value={name} onChange={ (e) => setName(e.target.value)} type="text"></input>
      </label>

      <label>
        Email:
        <input value={email} onChange={ (e) => setEmail(e.target.value)} type="text"></input>
      </label>

      <label>
        Phone Number:
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text"></input>
      </label>

      <button type="submit">Submit</button>

    </form>
  );
};

