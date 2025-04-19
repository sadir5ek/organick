import React, { useState } from 'react';
import './contact.css';
import contactBanner from '../../assets/contact/Image (5).png';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import banan from '../../assets/contact/frutsContact.png';
import logo from '../../assets/Logo (2).svg';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const submitForm = (e) => {
    e.preventDefault();
    closeModal();
    setIsThankYouOpen(true);
  };
  const closeThankYou = () => setIsThankYouOpen(false);

  return (
    <div className='contact'>
      <div className="contact-header">
        <img src={contactBanner} alt="Contact Us" className="contact-banner" />
        <h1>Contact Us</h1>
      </div>
      <div className="contact-info">
        <img src={banan} alt="Banana and Oranges" className="contact-image" />
        <div className="contact-text">
          <h1>We'd love to talk about how we can work together.</h1>
          <p>Simply dummy text of the printing and typesetting industry.</p>
          <div className="contact-details">
            <div className='Massege' onClick={openModal}>
              <h3>Message</h3>
              <p><FaEnvelope className='fa' />needhelp@organick.com</p>
            </div>
            <a href="https://web.whatsapp.com/">
            <div>
              <h3>Contact Us</h3>
              <p><FaPhone className='fa' /> +01 123 456 789</p>
            </div>
            </a>
           
          </div>
        </div>
      </div>

      {isModalOpen && (
       <div className="modal-overlay active">
       <div className="modal">
         <div className="modal-header">
           <h2 className='zap'>Fill out the form</h2>
           <button className="close-btn" onClick={closeModal}>X</button>
         </div>
         <form onSubmit={submitForm}>
           <input type="text" placeholder="Name" required />
           <input type="text" placeholder="Account" required />
           <textarea placeholder="Message" required></textarea>
           <button type="submit">Send</button>
         </form>
       </div>
     </div>
     
      )}

      {isThankYouOpen && (
        <div className="modal-overlay active">
          <div className="modal">
      <div className="loogo">
        <img src={logo} alt="Logo" />
        <h1 className='Organick'>Organick</h1>
     </div>
            <h2 className='x'>Thank you!</h2>
            <i>We have received your request and will contact you as soon as possible. <br />
            </i>
            <h3>Have a great day!!</h3>
            <button className="close-btnn" onClick={closeThankYou}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
