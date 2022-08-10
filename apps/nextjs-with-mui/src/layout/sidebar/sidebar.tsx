import { Box, MenuList, Typography } from '@mui/material';
import { Business, BusinessCenter, Event, Home } from '@mui/icons-material';
import React from 'react';
import SidebarItem from 'layout/sidebar/sidebar-item';

const Sidebar = () => (
  <MenuList sx={{ py: 2, width: 240 }}>
    <SidebarItem Icon={Home}>Home</SidebarItem>
    <Box px={2} my={2}>
      <Typography
        variant="body2"
        fontWeight="500"
        sx={{ color: 'secondary.main' }}>
        SHIFT MANAGEMENT
      </Typography>
    </Box>
    <SidebarItem Icon={Event}>Shifts</SidebarItem>
    <Box px={2} my={2}>
      <Typography
        variant="body2"
        fontWeight="500"
        sx={{ color: 'secondary.main' }}>
        STAFFING
      </Typography>
    </Box>
    <SidebarItem Icon={BusinessCenter}>Workers</SidebarItem>
    <SidebarItem Icon={Business}>Agencies</SidebarItem>
  </MenuList>
);

export default Sidebar;
