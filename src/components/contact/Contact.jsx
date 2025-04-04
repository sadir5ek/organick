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
              <p><FaEnvelope className='fa' /> example@example.com</p>
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
           <h2 className='zap'>Заполните форму</h2>
           <button className="close-btn" onClick={closeModal}>X</button>
         </div>
         <form onSubmit={submitForm}>
           <input type="text" placeholder="Имя" required />
           <input type="text" placeholder="Аккаунт" required />
           <textarea placeholder="Сообщение" required></textarea>
           <button type="submit">Отправить</button>
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
            <h2 className='x'>Спасибо!</h2>
            <i>Мы получили вашу заявку и свяжемся с <br /> вами 
             в ближайшее время.</i>
            <h3>Хорошего дня!!</h3>
            <button className="close-btnn" onClick={closeThankYou}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
