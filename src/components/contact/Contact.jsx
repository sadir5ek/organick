// import React from 'react'
// import './contact.css'
// import contact from '../../assets/contact/Image (5).png'
// import rt1 from '../../assets/portfolio/Pattern (3).svg';
// import rt2 from '../../assets/portfolio/Pattern (5).svg';
// import rt3 from '../../assets/portfolio/Pattern (6).svg';

// function Contact() {
//   return (
//     <div className='contact'>
//       <div className="contact1">
//               <img src={rt1} className='rt11' />
//                 <img src={rt2} className='rt22' />
//                 <img src={rt3} className='rt33' />
//                 <h1 className='rt44'>Contact Us</h1>
//         <img src={contact} className='contactt'/>
//       </div>
//       <div className="contact2">
//         <img src={banan} />
//         <div className="contact2-text">
//       <h1>We'd love to talk about how we <br />
//        can work together.</h1>
//        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
//        been the industry's standard dummy text ever since the 1500s, when an unknown <br />
//         printer took a galley.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
import React from 'react';
import './contact.css';
import contactBanner from '../../assets/contact/Image (5).png';
import leafImage from '../../assets/contact/Photo (10).svg';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import banan from '../../assets/contact/frutsContact.png';
 import rt1 from '../../assets/portfolio/Pattern (3).svg';
 import rt2 from '../../assets/portfolio/Pattern (5).svg';
 import rt3 from '../../assets/portfolio/Pattern (6).svg';
import icon1 from '../../assets/insta.svg'
import icon2 from '../../assets/2 (1).svg'
import icon3 from '../../assets/3 (1).svg'
import icon4 from '../../assets/4.svg'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-header">
        <img src={contactBanner} alt="Contact Us" className="contact-banner" />
        <h1>Contact Us</h1>
        <img src={rt1} className='rt11' />
        <img src={rt2} className='rt22' />
        <img src={rt3} className='rt33' />
      </div>
            <div className="contact-info">
        <img src={banan} alt="Banana and Oranges" className="contact-image" />
        <div className="contact-text">
          <h1>We'd love to talk about how we can work together.</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className="contact-details">
            <div>
              <h3>Massege  </h3>
            <p><FaEnvelope className='fa'/> example@example.com</p>
            </div>
            <div>
              <h3>Contact Us</h3>
            <p><FaPhone className='fa'/> +01 123 456 789</p>
            </div>
          </div>
             {/* <div className="contact-details">
          <a href="sms:+01123456789?body=Hello,%20I%20have%20a%20question!" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Message</h3>
              <p>abdiraimov</p>
            </div>
          </a>

          <a href="tel:+01123456789" className="contact-card">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Contact Us</h3>
              <p>+996 554 478 444</p>
            </div>
          </a>
        </div> */}
           <div className="social-icon">
           <a href=" https://www.instagram.com/organickg/"><img src={icon1} className="icons" /></a>
          <a href="https://www.facebook.com/?locale=ru_RU "> <img src={icon2} className="icons" /></a>
          <a href="FaPinterestP"><img src={icon3} className="icons" /> </a>
          <a href="FaPinterestP"><img src={icon4} className="icons" /> </a>
        
         </div>
        </div>
      </div>
      
      <div className="contact-location">
      <div className="location-info">
        <div className=""> </div>
        <i>Location</i>
          <h1>Our Farms</h1>
          <p>
            Established fact that a  will be distracted <br /> by the readable content of  when looking <br />
         <p className='its'>   at its a loading layout.</p>  
          </p>
          <h3 className='new'>📍 New York, USA</h3>
          <p className='york'>45, New York Street, New York</p>
          <h3 className='neew'>📍 London, UK</h3>
          <p className='yoork'>25, Landmark Street, London SE1 1RQ</p>
        </div>
        <img src={leafImage} alt="Leaf Background" className="location-bg" />
      </div>
    </div>
  );
}

export default Contact;
