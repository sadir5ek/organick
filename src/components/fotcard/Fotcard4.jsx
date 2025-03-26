import React from 'react'
import './fotcard.css'
import ftf from '../../assets/homeee/Group2.svg'
import ftv from '../../assets/homeee/Group4.svg'
import svg from '../../assets/Photo (8).svg'

function Fotcard4() {
  return (
    <div className='fotcard1'>
     <div className="fcard1">
                   <img src={ftf} />
                   <h1>Changelog</h1>
                   <img src={ftv} />
      </div>
      <div className="fcard4">
      <img src={svg}/>
      <h3>V.1</h3>
      <p>Initial Organick Webflow Template Release</p>
      </div>
      <h1 className='ff'></h1>
    </div>
  )
}

export default Fotcard4
