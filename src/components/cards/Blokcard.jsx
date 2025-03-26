import React from 'react'
import blok1 from '../../assets/blog/card3.png'
import './blogcard.css'
import Blogg from '../../assets/blog/blog.png'
import b1 from '../../assets/blog/b1.svg'
import b2 from '../../assets/blog/b2.svg'
import b3 from '../../assets/blog/b3.svg'
import b4 from '../../assets/blog/b4.svg'

function Blokcard() {
  return (
    <div className='blokcard'>
        <div className="karrdd">
            <div className="karrdd1">
                <div className="post">
                <h4>Posted On:</h4>
                <h5>November 25 , 2022</h5>
                </div>
                <h1>Health Benefits of Wild Carrots</h1>
            <p>Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override matrix <br />
             economically the digital. Efficiently on low-hanging fruit to identify a ballpark value added activity to beta test <br />
              matrix economically override the digital. Objectively on low-hanging fruit to identify a ballpark value added <br />
             activity to beta matrix economically.</p>
            </div>
            <img src={blok1} className='imgblock1'/>

            <p className='ppp'>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully <br />
             researched data and enterprise process improvements. Collaboratively expedite quality manufactured products <br />
              via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely <br />
             enable accurate supply chains rather than friction technology.</p>
             <h1 className='all'>Organic product for all peoples</h1>

             <p className='pp'>Appropriately empower dynamic leadership skills after business portals. Globally my coordinate interactive <br />
              supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound <br />
               value through cooperative technology. Competently parallel task fully researched data and enterprise process <br />
              improvements.</p>
              <ul>
                <li>Dynamically target high-payoff intellectual capital for customized</li>
                <li>Interactively procrastinate high-payoff content</li>
                <li>Interactively procrastinate high-payoff content</li>
              </ul>

              <div className="karrdd2">
                <h3>“The first rule of any organic used in a business is that nature <br />
                 applied to an efficient operation will magnify the efficiency. The <br />
                  second is that organic applied to an inefficient operation will <br />
                 magnify the health.”</h3>
              </div>
              <h2 className='alls'>Make perfect organic product with us</h2>
              <p className='pp'>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C <br />
               users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary <br />
               ROI.</p>
        </div>
        <ol>
            <li>It brings the right people together with all the right information and tools to get work done</li>
            <li>We provide operational efficiency, data security, and flexible scale</li>
            <li>Your best work, together in one package that works seamlessly from your computer</li>
            <li>Delivers the tools you need to save time Improve field performance always</li>
        </ol>
    </div>
  )
}

export default Blokcard
