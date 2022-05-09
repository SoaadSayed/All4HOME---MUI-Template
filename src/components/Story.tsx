import { Box, Typography, Grid, SxProps, Theme, Container } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TelegramIcon from '@mui/icons-material/Telegram';
import EngineeringIcon from '@mui/icons-material/Engineering';

function GreatStory() {

    const allStorys = [
        {
            title: "DISCOVER OPTIONS",
            subtitle:
                "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Meies malis iem.",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <ConstructionIcon {...props} />
            ),
        }, 
        {
            title: "ALWAYS ON TIME",
            subtitle:
                "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Meies malis iem.",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <AccessAlarmIcon {...props} />
            ),
        },
        {
            title: "SEE OUR WORK",
            subtitle:
            "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Meies malis iem.",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <EngineeringIcon {...props} />
            ),
        },
        {
            title: "CONTACT US",
            subtitle:
            "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. Meies malis iem.",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <TelegramIcon {...props} />
            ),
        },
    ];
      

    return(

        <Container>

            <Box

                component = 'section'
                sx = {{ position: 'relative', bottom: 200}}
            >

                <Typography sx = {{ color: '#C39738', letterSpacing: 2, fontSize: 16, fontWeight: 600 }}>
                    ALL FOR HOME
                </Typography>

                <Typography component = 'h1' sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#505050', fontSize: 35, fontWeight: 500, fontStyle: 'italic' }}>

                    Our Great Story
                    <hr style={{width: '100px'}}/>
                </Typography>

                <Typography sx = {{paddingTop: '5px', marginLeft: 'auto', marginRight: 'auto', color: '#A2A2A2', fontSize: 19, fontWeight: 300, width: '60%' }}>
                    
                    Lorem Ipsn gravida nibh vel velit auc tor aliquet. Aenean sollicitudin lorem quis 
                    bibendum auci elit. Meies malis minim partem.
                </Typography>

                <Grid 
                    container 
                    sx = {{ justifyContent: 'center', paddingTop: '45px', gap: 30 }}
                >

                    {allStorys.map(({ title, subtitle, IconComponent }) => (

                        <Grid key = {title} item xs={12} md={2} lg={1}> 
                        
                            <IconComponent

                                sx = {{

                                    fontSize: 65,
                                    color: '#C39738',
                                    "&:hover": {

                                        cursor: 'pointer',
                                        transform: "translateY(-6px)",
                                        transition: '0.9s'
                                    }
                                
                                }}
                            />

                            <Typography

                                sx = {{

                                    fontSize: 14,
                                    width: '180px',
                                    marginRight: '15px',
                                    letterSpacing: '3px',
                                    marginLeft: '-45px',
                                    fontWeight: 600,
                                    paddingTop: '15px',
                                    "&:hover": {

                                        color: '#C39738',
                                        cursor: 'pointer'
                                    }
                                }}
                            > 
                                {title} 

                                <hr style={{width: '45px', marginTop: '25px'}}/>

                            </Typography>

                            <Typography

                                sx = {{

                                    width: '270px',
                                    marginLeft: '-85px',
                                    color: '#A2A2A2',
                                    fontSize: 16,
                                    fontWeight: 300,
                                    paddingTop: '10px'
                                }}
                            >

                                {subtitle}

                            </Typography>

                        </Grid>

                    ))}
                        
                </Grid>

            </Box>

        </Container>
    );

}


export default GreatStory;