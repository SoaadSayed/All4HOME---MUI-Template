import { Box, Container, Grid, SxProps, Theme, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

function InfoSection() {

    const Information = [
        {
            title: "ELATED SETTINGS",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                    
                <HomeOutlinedIcon {...props} />
            ),
        }, 
        {
            title: "ICON COLLECTIONS",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <LaptopMacOutlinedIcon {...props} />
            ),
        },
        {
            title: "SIMPLE DEMO IMPORT",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <StarBorderOutlinedIcon {...props} />
            ),
        },
        {
            title: "WELCOME TO ELATED",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <FavoriteBorderOutlinedIcon {...props} />
            ),
        },
        {
            title: "AMAZING LAYOUTS",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <FolderCopyOutlinedIcon {...props} />
            ),
        },
        {
            title: "ELATED DESIGN",
            IconComponent: (props: { sx: SxProps<Theme> }) => (
                
                <KeyOutlinedIcon {...props} />
            ),
        },
    ];

    return(

        <Container>

            <Box>
                <Grid 
                    container 
                    sx = {{ justifyContent: 'center', paddingTop: '70px', paddingBottom: '70px', gap: 17 }}
                >

                    {Information.map(({ title, IconComponent }) => (

                        <Grid key = {title} item xs={12} md={2} lg={3}> 
                            
                            <IconComponent

                                sx = {{

                                    fontSize: 35,
                                    color: '#C39738',
                                    position: 'relative',
                                    top: "10px",
                                    "&:hover": {

                                        cursor: 'pointer',
                                        transform: "translateY(-6px)",
                                        transition: '0.9s'
                                    }
                                    
                                }}
                            />

                            <Typography

                                component='span'

                                sx = {{

                                    fontSize: 15,
                                    width: '350px',
                                    letterSpacing: '3px',
                                    fontWeight: 600,
                                    marginLeft: '10px',
                                    "&:hover": {

                                        color: '#C39738',
                                        cursor: 'pointer'
                                    }
                                }}
                            > 
                                {title} 

                            </Typography>

                                <Typography

                                    sx = {{

                                        width: '250px',
                                        color: '#A2A2A2',
                                        fontSize: 16,
                                        fontWeight: 300,
                                        paddingTop: '10px',
                                        textAlign: 'left',
                                        position: 'relative',
                                        left: "75px",
                                        padingBottom: '-100px'

                                    }}
                                >

                                    Sed ut perspiciatis unde omnis natus errorsit voluptatem accusantium natus error sit voluptatem accusantium.
                                

                                </Typography>

                        </Grid>

                    ))}
                            
                    </Grid>
            </Box>

        </Container>
    );
}

export default InfoSection;