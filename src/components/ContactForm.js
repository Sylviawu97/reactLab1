import React from 'react'
import { useState } from 'react';

const ContactForm = () => {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list={Name:`${name}`,Email:`${email}`,Message:`${message}`}
    console.log(list);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

  )
}

export default ContactForm
