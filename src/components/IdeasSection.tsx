import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({

    color: 'black',
    borderRadius: 0,
    padding: '10px 40px',
    border: 'solid 1px #C39738',
    marginTop: '50px',

    '&:hover': {
        
        color: 'white',
        backgroundColor: '#C39738',
        border: '#C39738'
    },
}));

function IdeasSection() {


    const imgCards = [

        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/Blog-img-1-a.jpg',
            title: 'SHARING THE KNOWLEDGE',
            subtitle: 'Lorem ipsum dolor sit amet, consec tetuer adipi scing elit. Aenean comm odo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibu...',
            
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/Blog-img-2.jpg',
            title: 'UNLEASH THE CREATIVITY',
            subtitle: 'Lorem ipsum dolor sit amet, consec tetuer adipi scing elit. Aenean comm odo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibu...',
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/Blog-img-3.jpg',
            title: 'ALL ON DISPLAY',
            subtitle: 'Lorem ipsum dolor sit amet, consec tetuer adipi scing elit. Aenean comm odo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibu...',
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

                        Interior Design Ideas
                        <hr style={{width: '100px'}}/>
                    </Typography>

                    <Typography sx = {{paddingTop: '5px', marginLeft: 'auto', marginRight: 'auto', color: '#A2A2A2', fontSize: 19, fontWeight: 300, width: '60%' }}>
                        
                        Lorem Ipsn gravida nibh vel velit auc tor aliquet. Aenean sollicitudin lorem quis 
                        bibendum auci elit. Meies malis minim partem.
                    </Typography>

                    <ColorButton variant = 'outlined'> BUY NOW </ColorButton>


                </Box>
            
            </Container>

            <Box sx = {{backgroundColor: '#F3F2F0', marginTop: '80px', marginBottom: '80px'}}>

                <Grid 
                    container 
                    sx = {{ justifyContent: 'center', paddingTop: '125px', paddingBottom: '125px', gap: 4}}
                >

                    {imgCards.map((item) => (

                                    
                        <Card key = {item.imgPath} sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.imgPath}
                                alt="green iguana"
                                sx = {{

                                    "&:hover": {

                                        transform: 'scale(1.05)',
                                        transition: '0.9s',
                                        cursor: 'pointer'
                                    }
                                }}
                            />
                                        
                            <CardContent 
                                sx = {{ 
                                    marginTop: '5px', 
                                    textAlign: 'left', 
                                    color: '#C39738',
                                    fontFamily: '"Libre Baskerville",serif',
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    "&:hover": {

                                        cursor: 'pointer'
                                    }
                                }}
                            >
                            
                                <Typography
                                    component = 'span' 
                                    gutterBottom 
                                    sx = {{

                                        marginRight: '2px',
                                        "&:hover": {

                                            color: 'black',
                                            
                                        }
                                    }}    
                                >
                                    March 8, 2017  

                                </Typography>
                                    
                                <Typography 
                                    component = 'span'
                                    sx = {{

                                        marginRight: '2px',
                                    }} 
                                > 
                                
                                    / 
                                
                                </Typography> 
                                
                                <Typography 
                                    component = 'span'
                                    sx = {{

                                        marginRight: '2px',
                                        "&:hover": {
    
                                            color: 'black',
                                            
                                        }
                                    }} 
                                > 
                                
                                    Decoration
                                
                                </Typography>

                                <Typography 
                                    
                                    sx = {{

                                        marginRight: '2px',
                                        color: '#252525',
                                        fontStyle: 'normal',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        letterSpacing: '3px',
                                        marginBottom: '20px'
                                    }} 
                                > 
                                
                                    {item.title}
                                
                                </Typography>

                                <hr style={{width: '15%', marginLeft: 0}}/>

                                <Typography 
                                    sx = {{

                                        fontStyle: 'normal',
                                        color: '#A2A2A2',
                                        fontWeight: 200,
                                        fontSize: 16,
                                        "&:hover": {

                                            cursor: 'auto'
                                        }
                                    }}
                                >
                                   {item.subtitle}
                                </Typography>

                            </CardContent>

                            <CardActions

                                sx = {{

                                    marginLeft: '15px'

                                }}
                            >
                                
                                <Button 
                                    size="small"
                                    sx = {{

                                        color: '#C39738',
                                        textTransform: 'capitalize',
                                        fontSize: 14,
                                        fontStyle: 'italic',
                                        fontWeight: 400,
                                        "&:hover": {

                                            backgroundColor: 'transparent',
                                            color: 'black'
                                        }
                                    }}
                                >Read More</Button>
                            </CardActions>
                        </Card>

                    ))}

                        
                                
                </Grid>

            </Box>
        </>
    );

}

export default IdeasSection;