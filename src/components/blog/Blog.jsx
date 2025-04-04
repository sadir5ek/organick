import React from 'react'
import './blog.css'
import Blogg from '../../assets/blog/blog.png'
import b1 from '../../assets/blog/b1.svg'
import b2 from '../../assets/blog/b2.svg'
import b3 from '../../assets/blog/b3.svg'
import b4 from '../../assets/blog/b4.svg'
import { FaArrowCircleRight } from "react-icons/fa"
import { IoPersonSharp } from "react-icons/io5";
import blok1 from '../../assets/Photo91.png'
import blok2 from '../../assets/Photo (1).png'
import blok3 from '../../assets/blog/card5.png'
import blok4 from '../../assets/blog/grean-tea.jpeg'
import blok5 from '../../assets/blog/Health-Benefits-of-Carrots1.webp'
import blok6 from '../../assets/blog/product.jpg'
import { Link } from 'react-router-dom'
function Blog() {
  return (
    <div className='blog'>
    <div className="blog1">
      <img src={b1} className='b1'/>
      <img src={b2} className='b2'/>
      <img src={b3} className='b3'/>
      <img src={b4} className='b4'/>
      <h1 className='b5'>Recent News</h1>
      <img src={Blogg} />
    </div>
    <div className="blokk9">
            <div className="blokk9-cards">
              <div className="nov">
              <h3>14</h3>
              <p>Feb</p>
              </div>
              <div className="noww">
              <h3>14</h3>
              <p>Feb</p>
              <div className="novss">
              <h3>16</h3>
              <p>Nov</p>
              </div>
              </div>



              <div className="kardd">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Kristina Castlle</p>
                </div>
                <h3>Everything You Need to Know  Organik</h3>
                <p>Organic farming is the only way that you still  <br 
                /> experience the real world.</p>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/blogcard/:id">
                  <button className='readd'>
                   <h3>View More</h3>
                   <FaArrowCircleRight />
                 </button>
                  </Link>
              </div>
              <div className="blokk9-card1">
              <img src={blok1} />
              </div>

      
              <div className="kartd">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Kristina Castle</p>
                </div>
                <h3>Benefits of Orgnic Green Tea</h3>
                <p>They believe our organick and we are success <br /> ful in  fulfilling 
                 their beliefs.</p>
                 <Link onClick={() => window.scrollTo(0, 0)} to="/bloccard/:id">
                 <button className='redd'>
                  <h3>View More</h3>
                  <FaArrowCircleRight />
                </button>
                 </Link>
              </div>
              <div className="blokk9-card2">
              <img src={blok4} />
                </div> 


                <div className="kartt">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Alex Louis</p>
                </div>
                <h3>Orgnic Fruits: Surprising Benefits  Facts</h3>
                <p>The world of nature has grown on the principles <br /> of health, 
                 ecology, and care.</p>
                  <Link onClick={() => window.scrollTo(0, 0)} to="/blockcard/:id">
                  <button className='readt'>
                   <h3>View More</h3>
                   <FaArrowCircleRight />
                 </button>
                  </Link>
              </div>
              <div className="blokk9-card2">
              <img src={blok2} />
                </div> 
            </div>
            <div className="blokk9-cardss">
              <div className="nov">
              <h3>25</h3>
              <p>Nov</p>
              </div>
              <div className="noww">
              <h3>25</h3>
              <p>Nov</p>
              </div>
              <div className="nowws">
              <h3>16</h3>
              <p>Nov</p>
              </div>
              <div className="karrdd">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Christina John</p>
                </div>
                <h3>Health Benefits of Wild Carrots</h3>
                <p>This is the place where you need to choose the <br /> natural 
                 product need.</p>
                 <Link onClick={() => window.scrollTo(0, 0)} to="/blokcard/:id">
                 <button className='readd'>
                  <h3>View More</h3>
                  <FaArrowCircleRight />
                </button>
                 </Link>
              </div>
              <div className="blokk9-card1">
              <img src={blok3} />
              </div>
              <div className="kartd">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Christina John</p>
                </div>
                <h3>SuperFood You Should EatFreshly</h3>
                <p>No use of any chemicals you will end up with <br /> fresh and 
                 organic vegetables.</p>
                 <Link onClick={() => window.scrollTo(0, 0)} to="/blokkard/:id">
                 <button className='readd'>
                  <h3>View More</h3>
                  <FaArrowCircleRight />
                </button>
                 </Link>
              </div>
              <div className="blokk9-card2">
              <img src={blok6} />
                </div> 

                <div className="kardd">
                <div className="richh">
                <IoPersonSharp className='ikon'/>
                  <p>Alex Louis</p>
                </div>
                <h3>Work Process of Organic Farming</h3>
                <p>All the fruits are grown without the use of any pesticides 
                 and other chemicals.</p>
                 <Link onClick={() => window.scrollTo(0, 0)} to="/blokard/:id">
                 <button className='readd'>
                  <h3>View More</h3>
                  <FaArrowCircleRight />
                </button>
                 </Link>  
              </div>
              <div className="blokk9-card1">
              <img src={blok5} />
              </div>
            </div>
            <div className='fff'>ff</div>
          </div>
    </div>
  )
}

export default Blog
