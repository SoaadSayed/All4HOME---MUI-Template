import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({

    color: 'white',
    backgroundColor: '#C39738',
    padding: '10px 50px',
    border: 'solid 1px #C39738',
    marginTop: '40px',
    position: 'relative',
    right: '490px',
    borderRadius: 0,
    
    '&:hover': {
        
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 0,
        border: '1px solid #C39738'
    },
}));

const ColorButtonTwo = styled(Button)<ButtonProps>(({ theme }) => ({

    color: 'black',
    borderRadius: 0,
    padding: '10px 40px',
    border: 'solid 1px #C39738',
    marginTop: '70px',
    marginLeft: '400px',
    '&:hover': {
        
        color: 'white',
        backgroundColor: '#C39738',
        border: '#C39738'
    },
}));

function WhatWeDo() {


    return(

        <>
        
            <Box
                
                sx = {{

                    backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-img-7.jpg?id=7068'})`,
                    backgroundSize: "112%",
                    height: 500,
                }}
            >

                <Container>

                    <Box
                        component = 'section'
                        sx = {{ position: 'relative', top: 100}}
                    > 

                        <Typography sx = {{ color: '#C39738', letterSpacing: 2, fontSize: 16, fontWeight: 600, textAlign: 'left' }}>
                            ALL FOR HOME
                        </Typography>

                        <Typography component = 'h1' sx = {{ paddingTop: '5px', fontFamily: 'Cursive', color: '#505050', fontSize: 35, fontWeight: 500, fontStyle: 'italic', textAlign: 'left' }}>

                            What We Offer
                            <hr style={{width: '100px', marginLeft: 0}}/>
                        </Typography>

                        <Typography sx = {{paddingTop: '5px', color: '#A2A2A2', fontSize: 15, fontWeight: 300, width: '60%', textAlign: 'left' }}>
                            
                            Lorem Ipsn gravida nibh vel velit auc tor aliquet. Aenean sollicitudin lorem quis 
                            bibendum auci elit. Meies malis minim partem.
                        </Typography>

                        <Typography sx = {{paddingTop: '35px', color: '#A2A2A2', fontSize: 15, fontWeight: 300, width: '60%', textAlign: 'left' }}>
                            
                            Psum velit nam nec tellus a odio tincidunt auctor a ornare odio. 
                            Lorem ipsn gravida nibh. 
                            Sed ut perspiciatis unde omnis iste natus error sit voluptate error sit voluptate maccusantiu. 
                            Mei es malis minim partem.

                        </Typography>

                        <ColorButton variant = 'outlined'> READ ALL </ColorButton>

                    </Box>
                </Container>

                <Box
                
                sx = {{

                    backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-beckground-img-6.jpg?id=4641'})`,
                    height: 150,
                    position: 'relative',
                    top: '143px'
                }}
                >

                    <Container>

                        <Grid container rowSpacing = {1} columnSpacing = {{xs: 1, sm: 2, md: 3}}>

                            <Grid item xs = {6} lg = {6}>

                                <Typography 
                                    component = 'h1' 
                                    sx = {{ 
                                        paddingTop: '55px', 
                                        // position: 'relative',
                                        // left: '200px', 
                                        fontFamily: 'Cursive', 
                                        color: '#505050', 
                                        fontSize: 35, 
                                        fontWeight: 500, 
                                        fontStyle: 'italic', 
                                        textAlign: 'left' ,

                                    }}
                                >
                                    Let everyone know who you are
                                </Typography>

                        
                            
                            </Grid>

                                <Box
                                    sx = {{

                                        // position: 'relative',
                                        // bottom: '95px',
                                        // left: '50px'
                                    }}
                                >

                                    <ColorButtonTwo>VIEW OFFER</ColorButtonTwo>
                                </Box>


                            <Grid item xs = {6} lg = {6}>

                            
                            </Grid>

                            
                        </Grid>

                    </Container>



                </Box>
                

            </Box>
            
        </>
    );


}

export default WhatWeDo;