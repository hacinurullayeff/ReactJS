import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdmdbgg', 'template_jlczcsj', form.current, 'oE30-NcKBlw6OyDDK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Phone</label>
      <input type="text" name="phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contactme    