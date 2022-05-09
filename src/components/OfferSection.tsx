import { Box, Container, Typography, Grid, ImageList, ImageListItem, ImageListItemBar, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({

    color: 'black',
    backgroundColor: 'white',
    borderRadius: 0,
    padding: '10px 35px',

    '&:hover': {
        
        color: 'white',
        backgroundColor: '#C39738',
    },
}));

function OfferSection() {

    const imgCards = [

        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-5-660x660.jpg',
            title: 'GOLD RIBBON',
            subtitle: 'Home',
            price: '$10.00'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-6-660x660.jpg',
            title: 'BLUE SOFA',
            subtitle: 'Home',
            price: '$120.00'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-7-660x660.jpg',
            title: 'AIR FRESHENER',
            subtitle: 'Home',
            price: '$40.00'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-8-660x660.jpg',
            title: 'RED CHAIR',
            subtitle: 'Home',
            price: '$190.00'
        },
    ]

    return(

        <Container>

            <Box
                component = 'section'
                sx = {{ position: 'relative', bottom: 20}}
            > 

                <Typography sx = {{ color: '#C39738', letterSpacing: 2, fontSize: 16, fontWeight: 600 }}>
                    ALL FOR HOME
                </Typography>

                <Typography component = 'h1' sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#505050', fontSize: 35, fontWeight: 500, fontStyle: 'italic' }}>

                    What We Offer
                    <hr style={{width: '100px'}}/>
                </Typography>

                <Typography sx = {{paddingTop: '5px', marginLeft: 'auto', marginRight: 'auto', color: '#A2A2A2', fontSize: 19, fontWeight: 300, width: '60%' }}>
                    
                    Lorem Ipsn gravida nibh vel velit auc tor aliquet. Aenean sollicitudin lorem quis 
                    bibendum auci elit. Meies malis minim partem.
                </Typography>

                <Grid 
                    container 
                    sx = {{ justifyContent: 'center', paddingTop: '45px'}}
                >

                    <ImageList sx={{ width: 1100, height: 400 }} cols = {4}>

                        {imgCards.map((item) => (

                            

                            <ImageListItem key = {item.imgPath}>
                            <img
                                src={`${item.imgPath}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.imgPath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={
                                    <p style = {{color: '#C39738', fontSize: 14, fontStyle: 'italic', cursor: 'pointer'}}>
                                        {item.subtitle} 
                                        <p style = {{color: 'black', cursor: 'auto'}}>{item.price}</p> 
                                    </p> 
                                }
                                position="below"
                                sx = {{

                                    ".MuiImageListItemBar-title": {

                                        letterSpacing: '2px',
                                        fontWeight: 600
                                    },

                                    ".MuiImageListItemBar-title:hover": {

                                        color: '#C39738',
                                        cursor: 'pointer',
                                        
                                    }
                                }}
                            />

                            <Box
                                sx = {{
                                    position: 'absolute',
                                    top: -12,
                                    opacity: 0,
                                    width: '270px',
                                    height: '300px',
                                    overflow: 'hidden',                                
                                    margin: 'auto 0',
                                    "&:hover": {
                                        backgroundColor: 'rgba(189, 184, 184, 0.445)',
                                        opacity: '100%',   
                                        transition: '0.4s',
                                        cusror: 'pointer'
                                    }
                                }}
                            >
                                <ColorButton 
                                    variant="contained"
                                    sx = {{
                                        textAlign: 'center',
                                        marginTop: '140px'
                                    }}
                                >
                                    ADD TO CARD
                                </ColorButton>
                                

                            </Box>
                            </ImageListItem>

                            
                        ))}
                    </ImageList>
                  
                        
                </Grid>


            </Box>

        </Container>
    )
}


export default OfferSection;