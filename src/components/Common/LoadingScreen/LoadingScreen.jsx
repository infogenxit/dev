import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import logo from '../../../assets/images/logo.webp';

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#ffffff',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 4
        }}
      >
        <img 
          src={logo} 
          alt="Loading..." 
          style={{ 
            height: '40px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} 
        />
        <style>
          {`
            @keyframes pulse {
              0% { opacity: 0.6; transform: scale(0.98); }
              50% { opacity: 1; transform: scale(1.02); }
              100% { opacity: 0.6; transform: scale(0.98); }
            }
          `}
        </style>
      </Box>
      <CircularProgress 
        size={40} 
        thickness={4}
        sx={{ 
          color: '#ff6a00',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }} 
      />
    </Box>
  );
};

export default LoadingScreen;
