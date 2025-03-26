import React from 'react'
import './footer.css'
import image from '../../assets/Image.png'
import logo1 from '../../assets/Logo (2).svg'
import icon1 from '../../assets/insta.svg'
import icon2 from '../../assets/2 (1).svg'
import icon3 from '../../assets/3 (1).svg'
import icon4 from '../../assets/4.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
    <div className='block'>
        <img src={image} alt="Newsletter" />
        <div className="input-container">
        <h1>Subscribe to <br /> our Newsletter</h1>
          <input type="text" placeholder='Your Email Address' className='input'/>
          <button className='Subscribe'>Subscribe</button>
        </div>
      </div>
    <div className="footer-content">
          <div className="footer-section1">
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> needhelp@organick.com</p>
            <p><strong>Phone:</strong> 123 (1254) 1452</p>
            <p><strong>Address:</strong> 88 Road, Brooklyn Street, USA</p>
          </div>

          <div className="footer-center">
            <div className='logo1'>
            <Link to="/" className='logo1'>
            <img src={logo1} />
            <h2>Organick</h2>
            </Link>
            </div>
            <p>Simply dummy text of the printing and typesetting industry.</p>
            <p>Lorem Ipsum simply dummy text of the printing</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/?locale=ru_RU"><img src={icon1} className="icon" /></a>
             <a href="https://www.instagram.com/"> <img src={icon2} className="icon" /></a>
             <a href="FaPinterestP"><img src={icon3} className="icon" /> </a>
             <a href="FaPinterestP"><img src={icon4} className="icon" /> </a>
           
            </div>
          </div>

          <div className="footer-section">
            <h3>Utility Pages</h3>
            <ul>
              <li><Link to="fotcard1">Style Guide</Link></li>
              <li><Link to="fotcard2">Protected</Link></li>
              <li><Link to="/fotcard3">Page Not Found</Link></li>
              <li><Link to="fotcard4">Changelog</Link></li>
              <li><Link to="fotcard5">Licenses</Link></li>
            </ul>
          </div>
      </div>
     <div className="footer-bottom">
          <p>Copyright © Organick | Designed by <a href="#">VictorFlow</a> - Powered by <a href="#">Webflow</a></p>
      </div>

    </div>
  )
}

export default Footer
