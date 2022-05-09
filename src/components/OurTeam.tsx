import { Box, Container, Typography, ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function OurTeam() {

    const teams = [

        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-team-img-1.jpg',
            name: 'NICOLA ALEXIS',
            job: 'Designer',
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-team-img-2.jpg',
            name: 'ALICE EVANS',
            job: 'Photographer',
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-team-img-3.jpg',
            name: 'LUCY FLEMING',
            job: 'Designer',
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-team-img-4.jpg',
            name: 'CLIFFORD ROSE',
            job: 'Photographer',            
        },
    ]

    return(


        <>
        
            <Container>

                <Box

                    component = 'section'
                    sx = {{ marginTop: '120px'}}
                >

                    <Typography sx = {{ color: '#C39738', letterSpacing: 2, fontSize: 16, fontWeight: 600 }}>
                    
                        ALL FOR HOME    
                    </Typography>

                    <Typography component = 'h1' sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#505050', fontSize: 35, fontWeight: 500, fontStyle: 'italic' }}>

                        Our amazing team
                        <hr style={{width: '100px'}}/>
                    </Typography>

                </Box>

            </Container>

            <ImageList 
                sx = {{ 
                    width: 1349.2, 
                    height: 380,
                    paddingTop: '55px',
                    "::-webkit-scrollbar": {

                        display: 'none'
                    }
                }} 
                cols={4}
            >
                {teams.map((item) => (

                    <>
                    
                        <ImageListItem key = {item.name}>

                            <img
                                src={`${item.imgPath}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt = {item.name}
                                loading="lazy"
                            />
                            <ImageListItemBar

                                title = {item.name}
                                subtitle = {item.job}
                                actionIcon={
                                    
                                    <IconButton

                                        sx={{ 
                                            color: 'white',
                                            fontSize: 'small',
                                            textAlign: 'center',
                                            position: 'relative',
                                            right: '110px',
                                            top: '80px',
                                            "&:hover": {

                                                color: '#C39738'
                                            }
                                        }}
                                        aria-label={`info about ${item.name}`}
                                        
                                    >

                                        <InstagramIcon/>
                                        <TwitterIcon/>
                                        <FacebookIcon/>

                                    </IconButton>
                                }
                                 
                                sx = {{

                                    width: '90%',
                                    height: '90%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '20px',
                                    opacity: 0,
                                    "&:hover": {

                                        opacity: '100%',
                                        
                                    },
                                    ".MuiImageListItemBar-subtitle": {
                                        
                                        fontStyle: 'italic',
                                        color: '#C39738',
                                        fontSize: 15,
                                        position: 'relative',
                                        left: '30px',
                                        top: '5px'
                                        
                                    },
                                    ".MuiImageListItemBar-title": {
                                        
                                        letterSpacing: '3px',
                                        fontSize: 14,
                                        fontWeight: '500',
                                        position: 'relative',
                                        left: '30px'
                                    },
                                    
                                }}
                                
                            />
                            
                        </ImageListItem>
                    </>

                ))}
            </ImageList>

        </>
    );
}

export default OurTeam;