import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, marginTop: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 My Awesome App. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
