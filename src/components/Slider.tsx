import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Slider 1',
    imgPath:
      'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-slider-img-2.jpg',
  },
  {
    label: 'Slider 2',
    imgPath:
      'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-slider-img-3-1.jpg',
  },
  {
    label: 'Slider 3',
    imgPath:
      'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-slider-img-1-N.jpg',
  },
  
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 2200, flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style = {{ width: '100%'}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        sx = {{ position: 'relative', bottom: 50, backgroundColor: 'transparent', volor: 'black' }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx = {{ position: 'relative', bottom: 300, color: 'black' }}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} 
            sx = {{ position: 'relative', bottom: 300, fontSize: 40, color: 'black' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />

        <Box 

            sx = {{ 

                width: '500px',
                height: '300px',
                backgroundColor: 'white',
                position: 'relative',
                bottom: 515,
                left: 450
            }}
        >

            <Typography sx = {{ paddingTop: '65px', color: '#C39738', letterSpacing: 2, fontSize: 14, fontWeight: 600 }}>

                ALL FOR HOME SWEET HOME
            </Typography>

            <Typography sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#505050', fontSize: 40, fontWeight: 500, fontStyle: 'italic' }}>

                Simply Delightful
                <hr style={{width: '100px'}}/>
            </Typography>

            <Typography sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#A2A2A2', }}>
                
                All4Home is a charming theme designed for all interior decoration and handcraft businesses
            </Typography>

        
        </Box>

    </Box>
  );
}

export default SwipeableTextMobileStepper;
