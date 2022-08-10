import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Sidebar from 'layout/sidebar';
import UserMenu from 'layout/user-menu';
import Bunny from '../public/bunny.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary" variant="elevation">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() => setIsOpen(true)}
            sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Box display="flex" alignItems="center">
            <Box width={40} height={40} position="relative" display="flex">
              <Image src={Bunny} alt="Clipboard Health logo" layout="fill" />
            </Box>
            <Typography variant="h5" sx={{ ml: 2 }}>
              MACT
            </Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default Header;
