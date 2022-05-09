import { Box, Typography, Grid, SxProps, Theme, Container } from '@mui/material';
import CountUp from 'react-countup';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function CountupSection() {

    const icons = [

        {
            start: 1000,
            end: 9859,
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <KeyboardIcon {...props} />
            ),
        },
        {
            start: 800,
            end: 8196,
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <ChatBubbleOutlineIcon {...props} />
            ),
        },
        {
            start: 500,
            end: 1143,
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <HeadsetMicIcon {...props} />
            ),
        },
        {
            start: 500,
            end: 2194,
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <StarOutlineIcon {...props} />
            ),
        },
    ]

    return(

        <Box

            sx = {{

                backgroundColor: '#ec6784',
                width: '100%',
                height: '270px',
                margin: 'auto',
            }}
        >

            <Container>

                <Grid 
                    container 
                    sx = {{ justifyContent: 'center', paddingTop: '75px', gap: 20 }}
                >

                    {icons.map(({ start, end, IconComponent }) => (

                        <Grid key = {end} item xs={12} md={2} lg={1}> 
                            
                            <IconComponent

                                sx = {{

                                    fontSize: 50,
                                    color: 'white'
                                }}
                            />

                            <Typography

                                sx = {{

                                    fontSize: 40,
                                    fontFamily: 'Cursive',
                                    color: 'white',
                                    fontWeight: 500,
                                    fontStyle: 'italic',
                                    marginTop: '15px'
                                }}
                            >

                                <CountUp 
                                
                                    start={start} 
                                    end = {end}
                                
                                />
                            </Typography>



                            

                        </Grid>

                        ))}
                            
                </Grid>

            </Container>


        </Box>
    )

}

export default CountupSection;