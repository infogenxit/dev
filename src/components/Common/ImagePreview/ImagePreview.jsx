import React from 'react';
import { Modal, Backdrop, Fade, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Reusable Image Preview Component using Material UI
 * @param {boolean} open - Controls visibility
 * @param {string} image - URL of the image to display
 * @param {function} onClose - Function to handle closing
 */
const ImagePreview = ({ open, image, onClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    boxShadow: 24,
    p: 0,
    maxWidth: '90vw',
    maxHeight: '90vh',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Modal
      aria-labelledby="image-preview-modal"
      aria-describedby="expand-project-image"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 18, 60, 0.9)', backdropFilter: 'blur(8px)' }
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: -40,
              right: -10,
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <img
            src={image}
            alt="Project Preview"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: '12px',
              display: 'block',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImagePreview;
