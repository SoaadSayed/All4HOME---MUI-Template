import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import { Paper } from '@mui/material';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const char = [
  {
    label: 'Fascinating',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    name: 'Lucy Fleming',
    job: 'Designer'
  },
  {
    label: 'Best Offer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    name: 'Alice Evans',
    job: 'Photographer'
  },
  {
    label: 'Powerful',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    name: 'Nicola Alexis',
    job: 'Designer'
  },
  
];

function Characteristics() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = char.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (

    <Box
      sx = {{

        backgroundColor: '#EC6784',
        height: '400px'

      }}
    >

      <Box 
        sx={{ 
          maxWidth: 1150, 
          flexGrow: 1,  
          position: 'relative',
          top: '55px',
          bottom: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'white',
          height: 300
        }}
        >
        
          <Box 
            sx={{ 
              maxWidth: 400, 
              width: '100%', 
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto', 
              fontSize: 40,
              fontFamily: 'Cursive',
              fontStyle: 'italic'
            }}
          >

            <Typography 
              component = "span"
              sx = {{
                fontSize: 70,
                verticalAlign: 'textTop',
              }}
            >
              “
            </Typography>
            
            {char[activeStep].label}

            <Typography 
              component = "span"
              sx = {{
                fontSize: 70,
                verticalAlign: 'textTop',
              }}
            >
              ”
            </Typography>
          </Box>

          <Box 
            sx={{ 
              maxWidth: 680, 
              width: '100%', 
              p: 2,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: '40px',
              color: '#a7a9ac'
            }}
          >
            
            {char[activeStep].description}
          </Box>


          <Box 
            sx={{ 
              maxWidth: 680, 
              width: '100%', 
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: '40px',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              fontWeight: 600
            }}
          >
            
            {char[activeStep].name}
          </Box>

          <Box 
            sx={{ 
              maxWidth: 680, 
              width: '100%', 
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: '30px',
              fontFamily: 'Cursive',
              fontStyle: 'italic',
              color: '#C39738'
            }}
          >
            
            {char[activeStep].job}
          </Box>

          <MobileStepper

            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx = {{ 
                  position: 'relative',
                  top: '-150px', 
                  color: 'black'
                }}

              >
                
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button 
              
                size="small" 
                onClick={handleBack} 
                disabled={activeStep === 0}
                sx = {{ 
                  position: 'relative',
                  top: '-150px', 
                  bottom: 0,
                  fontSize: 80, 
                  color: 'black'
                }}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                
              </Button>
            }

            sx = {{

              ".MuiMobileStepper-dots": {

                position: 'relative',
                top: '-10px',
              },
              ".MuiMobileStepper-root": {

                display: 'none'
              }
            }}
          />
      </Box>

    </Box>
  );
}

export default Characteristics;
