import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import './contact.scss'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_he4cpc2', 'template_owfpyf1', form.current, 'c3rdr51CV178oCjR8')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  }


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>Lcmalloy30@gmail.com</h5>
            <a href="mailto:lcmalloy30@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon"/>
            <h4>Phone Number</h4>
            <h5>1-925-336-9244</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact