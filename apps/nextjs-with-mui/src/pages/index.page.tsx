import Header from 'layout/header';
import type { NextPage } from 'next';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { TableFilter, UrgentShiftTable } from 'modules/urgent-shifts';

const Home: NextPage = () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <Header />
    <Box p={3} flex={1} display="flex" flexDirection="column">
      <Box
        sx={{ display: { sm: 'flex' } }}
        justifyContent="space-between"
        alignItems="center"
        mb={3}>
        Test
        <Box>
          <Typography variant="h5">Urgent shifts</Typography>
        </Box>
        <Box ml="auto" mr={{ xs: 0, sm: 2 }}>
          <TableFilter />
        </Box>
        <Button variant="contained" color="primary">
          Create Urgent Shift
        </Button>
      </Box>
      <Box flex={1} display="flex" flexDirection="column">
        <UrgentShiftTable />
      </Box>
    </Box>
  </Box>
);

export default Home;
