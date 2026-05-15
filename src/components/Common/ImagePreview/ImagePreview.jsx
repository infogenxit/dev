import { Modal, Backdrop, Fade, Box, IconButton, Tooltip, Stack, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState, useEffect } from 'react';

/**
 * Reusable Image Preview Component using Material UI
 * @param {boolean} open - Controls visibility
 * @param {string} image - URL of the image to display
 * @param {function} onClose - Function to handle closing
 */
const ImagePreview = ({ open, image, onClose }) => {
  const [scale, setScale] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!open) {
      setScale(1); // Reset scale when closed
    }
  }, [open]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setScale(1);

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    boxShadow: 24,
    p: 0,
    maxWidth: '95vw',
    maxHeight: '95vh',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
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
              position: 'fixed',
              top: { xs: 15, sm: 30 },
              right: { xs: 15, sm: 30 },
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: { xs: 45, sm: 50 },
              height: { xs: 45, sm: 50 },
              '&:hover': { 
                bgcolor: 'rgba(255, 255, 255, 0.25)',
                transform: 'rotate(90deg) scale(1.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              },
              zIndex: 11001
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 26, sm: 32 } }} />
          </IconButton>

          <Stack
            direction="row"
            spacing={{ xs: 0.5, sm: 1 }}
            sx={{
              position: 'fixed',
              bottom: { xs: 20, sm: 40 },
              left: '50%',
              transform: 'translateX(-50%)',
              bgcolor: 'rgba(0, 18, 60, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: { xs: '4px 10px', sm: '8px 16px' },
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 11001,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              width: 'auto',
              minWidth: { xs: '200px', sm: 'auto' },
              justifyContent: 'center'
            }}
          >
            <Tooltip title="Zoom Out">
              <IconButton onClick={handleZoomOut} sx={{ color: 'white', p: { xs: 1, sm: 1.5 } }}>
                <RemoveIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reset Zoom">
              <IconButton onClick={handleReset} sx={{ color: 'white', p: { xs: 1, sm: 1.5 } }}>
                <RestartAltIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Zoom In">
              <IconButton onClick={handleZoomIn} sx={{ color: 'white', p: { xs: 1, sm: 1.5 } }}>
                <AddIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Tooltip>
            <Box sx={{ 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              px: 1, 
              fontSize: { xs: '12px', sm: '14px' }, 
              fontWeight: 600, 
              minWidth: { xs: '35px', sm: '45px' }, 
              justifyContent: 'center' 
            }}>
              {Math.round(scale * 100)}%
            </Box>
          </Stack>
          
          <Box
            onWheel={handleWheel}
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
              cursor: scale > 1 ? 'grab' : 'default',
              '&::-webkit-scrollbar': {
                width: '6px',
                height: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
              }
            }}
          >
            <img
              src={image}
              alt="Project Preview"
              style={{
                maxWidth: scale === 1 ? '100%' : 'none',
                maxHeight: scale === 1 ? '90vh' : 'none',
                width: scale > 1 ? `${100 * scale}%` : 'auto',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s ease',
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                borderRadius: '8px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                display: 'block'
              }}
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ImagePreview;
