import React from 'react';
import './components.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  useNavigate,
} from 'react-router-dom';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({}) => ({
  ':hover': {
    color: '#e1bee7',
  },
}));

function NavBar () {
  const navigate = useNavigate();

  return <>
    <Box component="nav">
      <AppBar position="fixed" elevation={0} color="transparent" background-color="transparent">
        <Toolbar>
          <div class="nav-bar">
            <Typography variant="h6" color="white">
              &nbsp;Kelly's Corner of the Internet
            </Typography>
            <div>
              <StyledButton variant='text' color='primary' onClick={() => { navigate('/home'); }}>Home</StyledButton>
              <StyledButton variant='text' color='primary' onClick={() => { navigate('/projects'); }}>Projects</StyledButton>
              <StyledButton variant='text' color='primary' onClick={() => { navigate('/about'); }}>About</StyledButton>
              <StyledButton variant='text' color='primary' onClick={() => { navigate('/contact'); }}>Contact</StyledButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
}

export default NavBar;
