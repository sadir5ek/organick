import React, { useState } from 'react';
import image from '../../assets/Image.png';
import logo1 from '../../assets/Logo (2).svg';
import icon1 from '../../assets/insta.svg';
import icon2 from '../../assets/2 (1).svg';
import icon3 from '../../assets/3 (1).svg';
import icon4 from '../../assets/4.svg';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState('');  

  const handleSubscribe = () => {
    if (email) {
      setMessage('Вы успешно зарегистрированы'); 
      setEmail(''); 
    } else {
      setMessage('Пожалуйста, введите ваш email'); 
    }
  };

  return (
    <div className='footer-container'>
      <div className='block'>
        <img src={image} alt="Newsletter" />
        <div className="input-container">
          <h1>We hope you like our website! If you have any suggestions, <br /> we are always happy to hear them. </h1>
        
        </div>
        {message && <p className="message">{message}</p>} 
      </div>

      <div className="footer-content">
        <div className="footer-section1">
          <h3>Contact Us</h3>
          <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
          <p><strong>Email:</strong> needhelp@organick.com</p>
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
          <p><strong>Phone:</strong> 123 (1254) 1452</p>
          </Link>
          
          <a href="https://www.google.com/maps/place/Ecolife/@42.8478076,74.2817737,41312m/data=!3m1!1e3!4m10!1m2!2m1!1sorganic+food+store!3m6!1s0x389ec9da0620a505:0x804dc56ab4e3a635!8m2!3d42.8478076!4d74.5866443!15sChJvcmdhbmljIGZvb2Qgc3RvcmVaFCISb3JnYW5pYyBmb29kIHN0b3JlkgEWaGVhbHRoX2FuZF9iZWF1dHlfc2hvcOABAA!16s%2Fg%2F11dyls3nvr?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D">
          <p><strong>Address:</strong> 88 Road, Brooklyn Street, USA</p>
          </a>
        </div>

        <div className="footer-center">
          <div className='logo1'>
            <Link onClick={() => window.scrollTo(0, 0)} to="/" className='logo1'>
              <img src={logo1} />
              <h2>Organick</h2>
            </Link>
          </div>
          <p>Simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum simply dummy text of the printing</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/organickg/"><img src={icon1} className="icon" /></a>
            <a href="https://www.facebook.com/?locale=ru_RU"><img src={icon2} className="icon" /></a>
            <a href="https://x.com/"><img src={icon3} className="icon" /></a>
            <a href="https://www.pinterest.com/"><img src={icon4} className="icon" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Utility Pages</h3>
          <div className='ulli'>
            <ul>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="fotcard1">Style Guide</Link></li>
              <li className='page'><Link onClick={() => window.scrollTo(0, 0)} to="/fotcard3">Page Not Found</Link></li> 
              <li><Link onClick={() => window.scrollTo(0, 0)} to="fotcard5">Licenses</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Organick | Designed by <a href="https://www.victorflow.com/">VictorFlow</a> - Powered by <a href="https://www.victorflow.com/">Webflow</a></p>
      </div>
    </div>
  );
}

export default Footer;
