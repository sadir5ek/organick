import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { HiArrowRightCircle } from "react-icons/hi2";
import { BsCircle } from "react-icons/bs";
import surot1 from '../../assets/About/Banner.svg';
import surot2 from '../../assets/About/photo.svg';
import surot3 from '../../assets/About/Photo(1).svg';
import surot4 from '../../assets/About/AboutUs.svg';
import surot5 from '../../assets/About/Icon.svg';
import surot6 from '../../assets/About/Icon(1).svg';
import surot7 from '../../assets/About/WhyChooseus_.svg';
import surot8 from '../../assets/About/Image(1).svg';
import surot9 from '../../assets/About/Team.svg';
import { teamcard } from './Card';
import { cards } from './Card';

function About() {
  return (
    <div className='container'>

      <div className="surot-banner">
        <img src={surot1} className='surot1' alt="Banner" />
      </div>
      <div className='surot-about'>
        <div className="surot-images">
          <img src={surot2} className='surot2' alt="About Image 1" />
          <img src={surot3} className='surot3' alt="About Image 2" />
          <img src={surot4} className='surot4' alt="About Us" />
        </div>
        
        <div className="surot-text">
          <h1>We do Creative Things for Success</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>

          <div className="surot-features">
            <div className="surot-feature">
              <img src={surot5} alt="Modern Equipment" />
              <h2>Modern Agriculture Equipment</h2>
            </div>
            <div className="surot-feature">
              <img src={surot6} alt="No Growth Hormones" />
              <h2>No growth hormones are used</h2>
            </div>
          </div>

          <Link to="/services" className='surot-button'>
            Explore More <HiArrowRightCircle className='surot-icon-btn' />
          </Link>
        </div>
      </div>
      <div className='surot-why'>
        <div className='surot-why-content'>
          <div className="surot-why-text">
            <img src={surot7} alt="Why Choose Us"  />
            <h2>We do not buy from the open market & traders.</h2>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard since the 1500s.</p>

            <div className="surot-why-feature">
              <BsCircle className="surot-circle-icon" />
              <h3>100% Natural Product</h3>
            </div>
            <p>Simply dummy text of the printing and typesetting industry.</p>

            <div className="surot-why-feature">
              <BsCircle className="surot-circle-icon" />
              <h3>Increases resistance</h3>
            </div>
            <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing.</p>
          </div>

          <img src={surot8} alt="Organic Product" className='surot8' />
        </div>
      </div>
      <div className='surot-team'>
        <div className="surot-team-container">
          {teamcard.map((member) => (
            <div key={member.id} className='surot-team-card'>
              <img src={member.image} alt={member.name} className="surot-team-photo" />
            </div>
          ))}
        </div>
      </div>
       <div className="surot-cards-text">
        <h1>Our Organic Experts</h1>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's  <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
      <div className="surot-cards">
       
    
        {cards.map((s) => (
          <div key={s.id} className='surot-card'>
            <img src={s.image} alt={s.name} className="surot-card-image" />
            <h2>{s.name}</h2>
            <p>{s.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

