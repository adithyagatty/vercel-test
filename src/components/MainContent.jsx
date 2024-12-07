import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

function MainContent() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100vh', textAlign: 'center' }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My App!
        </Typography>
        <Typography variant="body1" paragraph>
          This is a simple, clean, and responsive front page built with React and Material-UI.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default MainContent;
