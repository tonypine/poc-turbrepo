import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const options = ['Profile', 'Account', 'Dashboard', 'Logout'];

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  return (
    <div>
      <Tooltip title="Open settings">
        <IconButton
          onClick={(e) => setAnchorElUser(e.currentTarget)}
          sx={{ p: 0 }}>
          <Avatar
            alt="Tony Pine"
            src="/static/images/avatar/2.jpg"
            sx={{ bgcolor: 'white', color: 'secondary.main' }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElUser)}
        onClose={() => setAnchorElUser(null)}>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => setAnchorElUser(null)}>
            <Typography textAlign="center">{option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default UserMenu;
