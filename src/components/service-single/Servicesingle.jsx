import React from 'react'
import './servicesingle.css'
import surot1 from '../../assets/Servicesingle/Banner(2).svg'
import surot2 from '../../assets/Servicesingle/Image(2).svg'
import surot3 from '../../assets/Servicesingle/2(2).svg'
import surot4 from '../../assets/Servicesingle/1(1).svg'
import surot5 from '../../assets/Servicesingle/1(2).svg'

function Servicesingle() {
  return (
    <div className='container'>
      <img src={surot1} className='img1' />
      <div className="block1">
        <img src={surot2}  className='img2' />
          <h1 className='h1'>Organic Store Services</h1>
          <p className='p1'>t is a long established fact that a reader will be distracted by the readable content of a  <br />
           page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
           using 'Content here, content here', making it look like readable English</p>
          <p className='p2'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br />
           and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

           <img src={surot3} className='img3' />
           <h3 className='h3'>We farm your land</h3>
           <p className='p3'>t is a long established fact that a reader will be distracted by the readable content of a  <br />
           page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
           using 'Content here, content here', making it look like readable English</p>
          <div className='card'>
                 <div className='card1'>
                  <img src={surot4} />
                  <h4>Best quality Products</h4>
                 </div>
                 <div className='card2'>
                  <img src={surot5} />
                  <h4>Money back guarantee</h4>
                 </div>
            </div>
      </div>
      
    </div>
  )
}

export default Servicesingle
