import React from 'react'
import './fotcard.css'
import ftf from '../../assets/homeee/Group2.svg'
import ftv from '../../assets/homeee/Group4.svg'
import { HiArrowSmRight } from "react-icons/hi";



function Fotcard2() {
  return (
    <div className='fotcard1'>
     <div className="fcard1">
        <img src={ftf} />
        <h1>Style Guide</h1>
        <img src={ftv} />
     </div>
     <div className="fcard2">
    <h2>Color</h2>
    <div className='bgcolor'>
    <div className="bgcard1">
        <div></div>
        <h3> #274c5b</h3>
    </div>
    <div className="bgcard2">
        <div></div>
        <h3> #7eb693</h3>
    </div>
    <div className="bgcard3">
        <div></div>
        <h3> #efd372</h3>
    </div>
    <div className="bgcard4">
        <div></div>
        <h3> #d4d4d4</h3>
    </div>
    <div className="bgcard5">
        <div></div>
        <h3> #f9f8f8</h3>
    </div>
    <div className="bgcard6">
        <div></div>
        <h3> #eff6f1</h3>
    </div>
    <div className="bgcard7">
        <div></div>
        <h3> #525c60</h3>
    </div>
    </div>
    </div>
    <div className="ftext">
        <div className="Text">
            <h1 >Text Styles</h1>
        </div>
        <div className="text1">
            <h1>Display H1 Text</h1>
            <h2>Heading H2 Text</h2>
            <h3>Heading H3 Text</h3>
            <h4>Heading H4 Text</h4>
            <h5>Heading H5 Text</h5>
            <h6>Heading H6 Text</h6>
        </div>
    </div>
    <div className="Paragraph">
        <h2>Paragraph</h2>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy <br />
         text ever since the 1500s, when an unknown printer took a galley.established fact that a reader will be distracted by the <br />
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less <br />
         normal distribution of letters, as opposed.</p>
    </div>
    <div className="Quoter">
        <h2>Quotes</h2>
        <div className="Quotescard">
            <p>“The first rule of any organic used in a business is that nature applied to an <br />
             efficient operation will magnify the efficiency. The second is that organic applied <br />
             to an inefficient operation will magnify the health.”</p>
        </div>
    </div>
    <div className="Button">
    <h2>Button</h2>
    <div className="Buttoncard">
        <button className='Default1'>
             <h3>Default Button</h3>
             <HiArrowSmRight/>
        </button>
        <button className='Default2'>
            <h3>Default Button</h3>
            <HiArrowSmRight/>
        </button>
        <button className='Default3'>
           <h3> Default Button</h3>
           <HiArrowSmRight/>
            </button>
        <button className='Pagination'>
           <h3> Pagination Button</h3>
           <HiArrowSmRight/>
            </button>
    </div>
    </div>
     </div>
  )
}

export default Fotcard2
