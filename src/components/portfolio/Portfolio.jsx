import React, { useState } from 'react';
import './portfolio.css';
import Standard from '../../assets/portfolio/portfolio.svg';
import rtv1 from '../../assets/portfolio/Pattern (3).svg';
import rtv2 from '../../assets/portfolio/Pattern (5).svg';
import rtv3 from '../../assets/portfolio/Pattern (6).svg';
import image1 from '../../assets/portfolio/port1.png'
import image2 from '../../assets/portfolio/port2.png'
import image3 from '../../assets/portfolio/port3.png'
import image4 from '../../assets/portfolio/port4.png'
import image5 from '../../assets/portfolio/port5.png'
import image6 from '../../assets/portfolio/port6.png'
import { Link } from 'react-router-dom';
function Portfolio() {

  return (
    <div className='portfolio'>
      <div className="portfolio1">
        <img src={rtv1} className='rtv1' />
        <img src={rtv2} className='rtv2' />
        <img src={rtv3} className='rtv3' />
        <h1 className='rtv4'>Portfolio Standard</h1>
        <img src={Standard} className='St' />
      </div>
      <div className="portfolio2">
        <Link onClick={() => window.scrollTo(0, 0)} to="/pcard1">
        <div className="cardt">
            <img src={image1} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Fruits </i>
            <h1 className="cardt-description">Green & Tasty Lemon</h1>
          </div>
        </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/pcard2">
          <div className="cardt">
            <img src={image2} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Farmer </i>
            <h1 className="cardt-description">Organic Carrot</h1>
          </div>
        </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/pcard3">
          <div className="cardt">
            <img src={image3} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Leaf </i>
            <h1 className="cardt-description">Organic Betel Leaf</h1>
          </div>
        </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/pcard4">
          <div className="cardt">
            <img src={image4} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Fruits </i>
            <h1 className="cardt-description">Natural Tommato </h1>
          </div>
        </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/pcard5">
          <div className="cardt">
            <img src={image5} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Farmer </i>
            <h1 className="cardt-description">Black Raspberry</h1>
          </div>
        </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/pcard6">
          <div className="cardt">
            <img src={image6} className="cardt-image" />
            <div>.</div>
            <i className="cardt-title"> Farmer </i>
            <h1 className="cardt-description">Honey Orange</h1>
          </div>
        </Link>
      </div>
      <h1 className='x'>.</h1>
    </div>
  );
}

export default Portfolio;
