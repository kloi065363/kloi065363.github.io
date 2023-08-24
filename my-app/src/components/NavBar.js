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

function NavBar () {
  const navigate = useNavigate();

  return <>
    <Box component="nav">
      <AppBar position="fixed" elevation={0} color="transparent" background-color="transparent">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Kelly's Corner of the Internet
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
}

export default NavBar;
