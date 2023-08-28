import React from 'react';
import './components.css';
import dino from './images/dino.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectsPage () {

  return (
    <>
      <div className='section-container'>
        <Typography className='section-header' variant='h5'>
          Projects
        </Typography>
        <br/>
        <div className='section-body'>
          <div className='project-title'>
            <Typography className='section-header' variant='h6'>
              <b>Personal Website</b>
            </Typography>
            <Button href='https://github.com/kloi065363/kloi065363.github.io'>
              <GitHubIcon fontSize='large'/>
            </Button>
          </div>
          This website was developed in 2023 after completing a web front-end programming course and a human computer interaction course at university. These content from these
          courses guided the process of developing the website with elements of the code being taken from assignments completed for the aforementioned courses. This was my first
          time developing something without the guidance of a specification provided by my manager or lecturer which made for an interesting experience. 
        </div>
      </div>
      <div classname='footer'>
        <img src={dino} className='footer-image' alt=''/>
      </div>
    </>
  )
}

export default ProjectsPage;