import React from 'react';
import './components.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledButton = styled(ListItemButton)(() => ({
  ':hover': {
    color: '#e1bee7',
  },
}));

function NavCollapsedMenu () {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <StyledButton variant='text' color='primary' onClick={() => { navigate('/home'); }}>Home</StyledButton>
        <StyledButton variant='text' color='primary' onClick={() => { navigate('/projects'); }}>Projects</StyledButton>
        <StyledButton variant='text' color='primary' onClick={() => { navigate('/about'); }}>About</StyledButton>
        <StyledButton variant='text' color='primary' onClick={() => { navigate('/contact'); }}>Contact</StyledButton>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key='right'>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuRoundedIcon></MenuRoundedIcon>
        </Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default NavCollapsedMenu;