import React from 'react';
import './components.css';
import dino from './images/dino.png';

function HomePage () {

  return (
    <>
      <div classname='footer'>
        <img src={dino} className='footer-image' alt=''/>
      </div>
    </>
  )
}

export default HomePage;