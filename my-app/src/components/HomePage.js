import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  useNavigate,
} from 'react-router-dom';

function HomePage () {
  const navigate = useNavigate();

  return (
    <>This is the home page</>
  )
}

export default HomePage;