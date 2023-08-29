import React from 'react';
import './components.css';
import dino from './images/dino.png';
import banner from './images/home-banner.jpg';
import Typography from '@mui/material/Typography';

function HomePage () {

  return (
    <>
      <div className='home-banner'>
        <img src={banner} className='home-banner-image' alt=''/>
        <div className='home-banner-text'>
          Welcome
        </div>
      </div>
      <div className='section-container'>
        <Typography className='section-header' variant='h5'>
          About this site
        </Typography>
        <br/>
        <div className='section-body'>
          This site serves as a portfolio of work as I learn more about the field of software engineering, with a focus on areas of interest. Currently, I am working on 
          developing and updating this website.
        </div>
      </div>
      <div classname='footer'>
        <img src={dino} className='footer-image' alt=''/>
      </div>
    </>
  )
}

export default HomePage;