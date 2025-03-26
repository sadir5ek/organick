import React from 'react'
import './fotcard.css'
import ftf from '../../assets/homeee/Group2.svg'
import ftv from '../../assets/homeee/Group4.svg'

function Fotcard5() {
  return (
    <div className='fotcard1'>
     <div className="fcard1">
       <img src={ftf} />
       <h1>Changelog</h1>
       <img src={ftv} />
        </div>  
        <div className="ftexd">
        <div className="Text">
            <h2>Icon & Graphics</h2>
        </div>
        <div className="text11">
         <p>Icons and Graphics are   by the VictorFlow Templates team. You may download <br />
          these and edit them to fit your  without asking for permission or providing credit.
       </p>
       <p className='pppp'>
Upon purchasing Software UI Kit Template our team grants you a , worldwide <br />

 copyright license to download, copy, modify, and use the icons.</p>
        </div>
    </div>
    <div className="Paragraphi">
        <h2>Photography</h2>
        <div>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy <br />
         text ever since the 1500s, when an unknown printer took a galley.established fact that a reader will be distracted by the <br />
          readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less <br />
         normal distribution of letters, as opposed.</p>

         <p className='un'>Unsplash</p>
         <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, <br />
          Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, <br />
          Image 21, Image 22, Image 23, Image 24, Image 25,</p>
          <p className='un'>Pixcel </p>
          <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image <br />
           11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, </p>

        </div>

    </div> 
    <div className="ftxd">
        <div className="Text">
            <h2>Font</h2>
        </div>
        <div className="text1">
         <p> Organick template uses free licensed Google Fonts. Please check Roboto, Yellowtail
         and Open Sans.  </p>
        </div>
    </div>
    </div>
  )
}

export default Fotcard5
