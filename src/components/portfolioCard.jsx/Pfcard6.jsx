import React from 'react'
import './pfcard.css'
import pcard7 from '../../assets/portfolio/port6.png'
import pcard2 from '../../assets/blog/card3.png'

function Pfcard6() {
  return (
    <div className='pcard'>
     <div className="pcardd1">
        <div className="pcard1">
            <h1>Honey Orange</h1>
            <p>
            To live a better, healthier, and wholesome life by providing them with 100%  <br />
            certified, authentic organic food. Farming is carried out without the use of any  <br />
            chemicals like pesticides or fertilizers or any growth Harmon.
            </p>
        </div>
        <div className="pcard2">
            <div className='dsd'>
            <h3>Date:</h3>
            <p>February 14, 2022</p>
            </div>
            <div className="dsd">
                <h3>Client:</h3>
                <p>Fiona Dourif</p>
            </div>
            <div className="dsd">
                <h3>Category:</h3>
                <p>Nuts</p>
            </div>
            <div className="dsd">
                <h3>Service:</h3>
                <p>Farmer’s Markets</p>
            </div>
        </div>
     </div>
     <img src={pcard7} className='pk'/>
     <div className="pcardd2">
        <h2>About The Farm:</h2>
        <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and <br />
         enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly <br />
         communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
         <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators <br />
          offline to maximize the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive <br />
          convergence on cross-platform integration.</p>
          <img src={pcard2} />
          <h4>The Organic Products</h4>
          <h2>How To Farm:</h2>
          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base <br />
           benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Objectively innovate empowered <br />
            manufactured products whereas parallel platforms. Holistically predominate extensible testing procedures for reliable supply chains. <br />
           Dramatically engage top-line web services vis-à-vis cutting-edge deliverables.</p>
           <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and <br />
            enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly <br />
             communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
             <h3>Conclusion:</h3>
             <p>We make our products to reach a lot with marketing techniques. If you are not comfortable going to the nearby market place we also will <br />
              deliver your product to your doorstep. The Product that you ordered will be verified that we have or not if have we will start to move on <br />
               with the next step or else we will ask our farmers for the supply. Once your product is packed it will be delivered to your nearby locality <br />
              you can directly visit the to buy the product.</p>
     </div>
    </div>
  )
}

export default Pfcard6
