import React from 'react'
import Navbar from '../homepage/nav';
import "./contact.css";
import ContactFoot from './contactfooter';

function Contact() {
  return (
    <div className="contactfull">
    <div className='contactnav'>
        <Navbar/>
    </div>
    <div className='contactmain'>
        <h1 className='contacthead1'>CONTACT US:</h1>
        <p className='contacttext1'>For queries related to your partner search, please call 0-814-477-8866 or contact 24x7 Help.</p>
        <p className='contacttext2'>Email ID: Elitelovematrimony@community.com</p>
        <p className='contacttext3'>For payment related queries,</p>
        <h1 className='contacttext4'>Call: +91 9538666777.</h1>
        <p className='contacttext5'>You may call us or walk into any of our office to make payments or for any other assistance related to your partner search.</p>
    </div>
    <div className='contactfooter1'>
      <ContactFoot/>
    </div>
    <div className='contactfooter2'>
         <p className='contactfoottext1'>Copyright © 2023. All rights reserved.</p>
         <p className='contactfoottext2'>This website is strictly for matrimonial purpose only and not a dating website.</p>
    </div>
    </div>
  )
}

export default Contact;