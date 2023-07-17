import React from 'react'
import "./successstory.css";
import Successcard1 from './successcard';
import Successcard2 from './successcard1';
import Successcard3 from './successcard2';
import {Link} from "react-router-dom"

function Success() {
  return (
    <div className='successentire'>
      <div className='successhead'>
        SUCCESS STORIES
      </div>
    <div className='successback'>
          <div className='successrow1'>
            <Successcard1/>
          </div>
          <div className='successrow2'>
            <Successcard2/>
          </div>
          <div className='successrow3'>
            <Successcard3/>
          </div>
          <div className='successbutton'>
             <a href="#" class="btn btn-warning" style={{color:'white'}}><Link to="/landing">Go Back</Link></a>
          </div>
    </div>
    </div>
  )
}

export default Success;