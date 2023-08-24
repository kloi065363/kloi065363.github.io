import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Toolbar from '@mui/material/Toolbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9fa8da',
    },
    secondary: {
      main: '#d1c4e9',
    },
  },
});


function Root () {
  return (
    <>
      <NavBar/>
      <Toolbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
