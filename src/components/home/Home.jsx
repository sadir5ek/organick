import React from 'react'
import './home.css'
import foto1 from '../../assets/homeee/Imaggee.png'
import group from '../../assets/homeee/Group.svg'
import group5 from '../../assets/homeee/Group5.svg'
import group2 from '../../assets/homeee/Group2.svg'
import group3 from '../../assets/homeee/Group3.svg'
import group4 from '../../assets/homeee/Group4.svg'
import group6 from '../../assets/homeee/Group6.svg'
import group7 from '../../assets/homeee/Group7.svg'
import group8 from '../../assets/homeee/Group8.svg'
import cart1 from '../../assets/homeee/garden.png'
import cart2 from '../../assets/homeee/vegetables.jpg'
import surot from '../../assets/homeee/Photo.svg'
import foods from '../../assets/homeee/Icon.svg'
import pochta from '../../assets/homeee/Icon (1).svg'
import { HiArrowSmRight } from "react-icons/hi";
import Product from '../product/Product';
import { Data } from '../data/Data';
import NewProduct from '../product/NewProduct';
import { NewData } from '../data/NewData';
import { Link } from 'react-router-dom';
import block1 from '../../assets/homeee/Background.svg'
import { FaArrowCircleRight } from "react-icons/fa"
import { IoPersonSharp } from "react-icons/io5";
import block7 from '../../assets/homeee/Image.svg'
import juice from '../../assets/homeee/Photo.jpg'
import food from '../../assets/homeee/Photo (1).jpg'
import cookis from '../../assets/homeee/Photo (2).jpg'
import blok1 from '../../assets/Photo91.png'
import blok2 from '../../assets/Photo (1).png'

function Home() {
  return (
    <div className='home'>
      <div className="blockk1">
        <>
          <img src={group} className='group' />
          <img src={group5} className='group5' />
          <img src={group2} className='group2' />
          <img src={group3} className='group3' />
          <img src={group4} className='group4' />
          <img src={group6} className='group6' />
          <img src={group7} className='group7' />
          <img src={group8} className='group8' />
        </>
        <div className="cart1">
          <i className='p11'>100% Natural Food</i>
          <h1 className='h11'>
            Choose the best <br />
          healthier way <br />
          of life</h1> 
           
          
          <Link to="about" className='battun'>
            <button className='button1'>
              <h4 className='nows'>Explore Now</h4>
              <HiArrowSmRight className='icon1' />
            </button>
          </Link>
        </div>
        <img src={foto1} className='foto1' />
      </div>
      <div className="block2">
        <div className="carrd1">
          <i className='natural'>Natural!!</i>
          <h2 className='get'>Get Garden <br /> Fresh Fruits</h2>
        </div>
        <div className="carrd2">
          <i className='offer'>Offer!!</i>
          <h2 className='ged'>Get 10% off <br />
            on Vegetables</h2>
        </div>
        <img src={cart1} className='caard1' />
        <img src={cart2} className='caard2' />
      </div>
      <div className="blockk3">
        <div className="surott">
          <img src={surot} />
        </div>
        <div className="about-us">
          <i className='italic'>About Us</i>
          <h1>We Believe in Working <br />
            Accredited Farmers</h1>
          <p>Simply dummy text of the printing and typesetting industry. Lorem had  <br />
            ceased to been the industry's standard dummy text ever since the 1500s, <br /> when an unknown  printer took a galley.</p>
          <div className="foods">
            <div>
              <img src={foods} />
            </div>
            <div className="foods1">
              <h3>Organic Foods Only</h3>
              <p>Simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum</p>
            </div>
          </div>
          <div className="quality">
            <div>
              <img src={pochta} />
            </div>
            <div className="foods1">
              <h3>Quality Standards</h3>
              <p>Simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum</p>
            </div>
          </div>
          <Link to="shop">
          <button className='shop-now'>
            <h4>Shop Now</h4>
            <HiArrowSmRight className='ctrelca' />
          </button>
          </Link>
         
        </div>
      </div>
      <div className="block4">
        <i>Categories </i>
        <h2>Our Products</h2>
        <div className="blokks">
          <div>
            <div className="flowers">
              {Data.slice(0,8).map((item, index) => (
                <Product key={index} products={item} />
              ))}
            </div>
            <Link to="shop">
            <button className='load'>
              <h3>Load More </h3>
              <FaArrowCircleRight />
            </button></Link>
          </div>
        </div>
      </div>
      <div className="block5">
        <div className="block5-center">
          <i>Testimonial</i>
          <h1>What Our Customer Saying?</h1>
          <div class="carousel-container">
  <div class="carousel">
    <div class="item active">
      <img src="https://bit.ly/34xczKy" alt="Image 1" />
      <p class="caption">Caption for Image 1</p>
    </div>
    <div class="item">
      <img src="https://bit.ly/3lkp5DW" alt="Image 2" />
      <p class="caption">Caption for Image 2</p>
    </div>
    <div class="item">
      <img src="https://bit.ly/3iMHuI1" alt="Image 3" />
      <p class="caption">Caption for Image 3</p>
    </div>
  </div>
  <button class="btn prev">Prev</button>
  <button class="btn next">Next</button>
  <div class="dots"></div>
  </div>
        </div>
        <div className="block5-left">
          <img src={block1} className='block11' />
        </div>
      </div>
      <div className="block6">
        <div className="Offers">
          <div className='offers1'>
            <i>Offer</i>
            <h1>We Offer Organic For You</h1>
          </div>
          <div className='wiew'>
            <Link to="shop">
            <button className='View'>
              <h3>View All Product</h3>
              <FaArrowCircleRight />
            </button></Link>
          </div>
        </div>
        <div className="flovers">
          {NewData.map((item, index) => (
            <NewProduct key={index} products={item} />
          ))}
        </div>
      </div>
      <div className="block7">
        <div className="block7-card">
          <div>.</div>
          <i>Eco Friendly</i>
          <h1>Econis is a Friendly <br />
          Organic Store</h1>
          <h3>Start with Our Company First</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
        <h3>Learn How to Grow Yourself</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
         <h3>Farming Strategies of Today</h3>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
        </div>
        
        <div className="block7-left">
            <img src={block7} />
        </div>
        <div className="block7-right">
            
        </div>
      </div>
      <div className="block8">
        <div className="block8-card1">
          <Link to="shop">
          <button>Organic Juice</button>
          </Link>
          <img src={juice} />
        </div>
        <div className="block8-card2">
          <Link to="shop">
          <button>Organic Food</button>
          </Link>
        <img src={food} />
        </div>
        <div className="block8-card3">
          <Link to="shop">
          <button>Nuts Cookis</button>
          </Link>
        <img src={cookis} />
        <h1>.</h1>
        </div>
      </div>
      <div className="block9">
        <div className="New">
          <div className="News">
            <i>News</i>
            <h1>Discover weekly content about <br />
              organic food, & more</h1>
          </div>
          <Link to="blog">
          <div className="more">
            <h3>More News</h3>
            <FaArrowCircleRight />
          </div>
          </Link>
        
        </div>
        <div className="block9-cards">
          <div className="nov">
          <h3>25</h3>
          <p>Nov</p>
          </div>
          <div className="now">
          <h3>25</h3>
          <p>Nov</p>
          </div>
          <div className="kard">
            <div className="rich">
            <IoPersonSharp className='ikon'/>
              <p>By Rachi Card</p>
            </div>
            <h3>The Benefits of D & How to Get It</h3>
            <p>Simply dummy  of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
             <Link to="/blogcard/:id">
             <button className='read'>
              <h3>Read More</h3>
              <FaArrowCircleRight />
            </button>
             </Link>
          </div>
          <div className="block9-card1">
          <img src={blok1} />
          </div>
          <div className="kart">
            <div className="rich">
            <IoPersonSharp className='ikon'/>
              <p>By Rachi Card</p>
            </div>
            <h3>The Benefits of D & How to Get It</h3>
            <p>Simply dummy  of the printing and typesetting <br />
             industry. Lorem Ipsum</p>
             <Link to="/blockcard/:id">
             <button className='read'>
              <h3>Read More</h3>
              <FaArrowCircleRight />
            </button>
             </Link>
          </div>
          <div className="block9-card2">
          <img src={blok2} />
            </div> 
        </div>
        <div className='ff'>ff</div>
      </div>
    </div>
  )
}

export default Home
