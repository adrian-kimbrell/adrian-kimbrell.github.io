import React, { useState } from 'react';
import './contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className='contact'>
      <div className="container contact-container">
        <h2 className='contact-title'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label contact-labels">Name:</label>
            <input
              type="text"
              className="form-control contact-form-container"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label contact-labels">Email:</label>
            <input
              type="email"
              className="form-control contact-form-container"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label contact-labels">Message:</label>
            <textarea
              className="form-control contact-form-container"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary contact-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
