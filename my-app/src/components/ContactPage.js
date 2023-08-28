import React from 'react';
import './components.css';
import banner from './images/contact-banner.jpg';
import dino from './images/dino.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import {
  useNavigate,
} from 'react-router-dom';

function ContactPage () {
  const navigate = useNavigate();
  
  return (
    <>
      <div className='contact-banner'>
        <img src={banner} className='contact-banner-image' alt=''/>
        <div className='contact-banner-text'>
          Get in Touch
        </div>
      </div>
      <div className='contact-info'>
        <div className='contact-block contact-description'>
          <b>Want to have a chat or explore my work?</b>
        </div>
        <div className='contact-block contact-details'>
          <div>
            <b>Contact Info</b>
          </div>
          <List>
            <ListItem>
              <ListItemButton href='https://www.linkedin.com/in/kelly-loi-1734a01a4/'>
                <ListItemIcon>
                  <LinkedInIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
              </ListItemButton>
              <ListItemButton href='mailto: kloi065363@gmail.com'>
                <ListItemIcon>
                  <MailOutlineRoundedIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className='contact-block work-links'>
          <div>
            <b>Explore</b>
          </div>
          <List>
            <ListItem>
              <ListItemButton href='https://github.com/kloi065363'>
                <ListItemIcon>
                  <GitHubIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary="Github" />
              </ListItemButton>
              <ListItemButton onClick={() => { navigate('/projects'); }}>
                <ListItemIcon>
                  <LanguageIcon fontSize='large'/>
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
      <div classname='footer'>
        <img src={dino} className='footer-image' alt=''/>
      </div>
    </>
  )
}

export default ContactPage;