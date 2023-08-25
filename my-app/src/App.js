import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Toolbar from '@mui/material/Toolbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Divider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#d1c4e9',
    },
  },
  typography: {
    fontFamily: "monaco, monospace"
  },
});

function Root () {
  return (
    <>
      <NavBar/>
      <Toolbar/>
      <Divider/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
