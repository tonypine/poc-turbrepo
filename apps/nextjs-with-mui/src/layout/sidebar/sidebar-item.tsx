import { FC, PropsWithChildren } from 'react';
import { ListItemIcon, MenuItem, SvgIconProps } from '@mui/material';

type Props = PropsWithChildren<{
  Icon: FC<SvgIconProps>;
}>;

const SidebarItem: FC<Props> = ({ Icon, children }) => (
  <MenuItem sx={{ color: 'secondary.main' }}>
    <ListItemIcon>
      <Icon fontSize="small" color="secondary" />
    </ListItemIcon>
    {children}
  </MenuItem>
);

export default SidebarItem;
