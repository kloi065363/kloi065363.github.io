import React from 'react';
import banner from './images/about-banner.jpeg';
import './components.css';
import dino from './images/dino.png';
import Typography from '@mui/material/Typography';

function AboutPage () {

  return (
    <>
      <div className='about-banner'>
        <img src={banner} className='about-banner-image' alt=''/>
        <div className='about-banner-text'>
          Hi! I am Kelly
        </div>
      </div>
      <div className='section-container'>
        <Typography className='section-header' variant='h5'>
          <b>About Me</b>
        </Typography>
        <div className='section-body'>
          <br/>
          My name is Kelly and I am a current student at UNSW studying a Bachelor of Commerce (Information Systems) and Computer Science graduating in December 2023.
          I made this web page to showcase projects that I work on outside of university. Over the 4 years of my degree, I have completed
          a variety of courses exposing me to backend development, databases, frontend development and human computer interaction. Whilst 
          I am a full-stack engineer, I have a preference for backend development and enjoy working with databases.
          <br/><br/>
          Outside of university, I have completed 3 different internships, 2 summer internships and 1 part-time during my final year of university. I have also started
          working on personal projects, starting with this website, exploring my interests as well as applying content that I have learned throughout my university career
          in different contexts. 
        </div>
      </div>
      <div className='section-container'>
        <Typography className='section-header' variant='h5'>
          My Work Experience
        </Typography>
        <div className='section-body'>
          <br/>
          My first internship experience was at Google over the 2021/2022 Summer as a STEP Intern in Netsoft. I worked with a fellow intern on a visualisation system 
          to transform raw data into meaningful charts for analysis. On this project, I worked primarily on the backend components and with databases. This was also my
          first time working with C++ and JavaScript. Throughout the Summer, I learned more about development processes and how products are designed to meet the requirements
          of prospective users.
          <br/><br/>
          I returned to Google the next Summer as a SWE Intern on ChromeOS Platform as part of the Storage team. This time, I was working on a full-stack project with no experience
          with frontend development. I was presented with the challenge of only having a final goal product without the detailed specifications that I had been provided with at 
          university. As part of the project, I developed a pipeline as well as the backend and frontend components of the final product. I learned how to leverage internal 
          documentation to aid in the development and learning process, and how to approach problems, breaking down a project into individual requirements and milestones. 
          <br/><br/>
          Following my SWE Internship at Google, I started my final year of university and my first role outside of the technology industry, as an intern at ASIC. I was working
          on a casual basis while maintaining a full-time study load at univeristy. In this internship, I had the opportunity to interact with a low-code platform which encouraged
          me to work on my problem-solving skills as I was not as focused on the technical details of coding anymore. This was an interesting experience where I learned more about
          how products and services are developed outside of the technology industry and the differing styles of development in the industry.
        </div>
      </div>
      <div classname='footer'>
        <img src={dino} className='footer-image' alt=''/>
      </div>
    </>
  )
}

export default AboutPage;