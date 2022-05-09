import { Box, Grid, Typography, Container, FormControl, OutlinedInput, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

    return(


        <Box 
            sx = {{

                backgroundColor: '#343434',
                height: 488
            }}
        >
            <Grid container rowSpacing = {1} columnSpacing = {{xs: 1, sm: 2, md: 3}}>

                <Grid item xs = {6} lg = {4}>

                    <Typography 
                        sx = {{
                            
                            paddingTop: '50px',
                            color: 'white',
                            fontSize: 25,

                        }}
                    >
                        All4HOME
                    </Typography>

                    <Typography 
                        sx = {{

                            textAlign: 'left',
                            color: '#999',
                            width: '45%',
                            fontSize: 15,
                            fontWeight: 300,
                            paddingLeft: '160px',
                            paddingTop: '10px'
                        }}
                    >

                        Pro inimicus sapientem an, ad cibo velit mollis mei, ne vim adhuc gubergren. 
                        Vis no intellegebat voluptatibus, vim an partem admodum copiosae,
                    </Typography>

                    <Typography 

                        sx = {{

                            paddingLeft: '155px',
                            paddingTop: '25px',
                            width: '48%',
                            color: '#C39738',
                            fontSize: 14
                        }}
                    >

                        <LanguageIcon/>

                        <Typography

                            component = 'span'

                            sx= {{

                                position: 'relative',
                                bottom: '5px',
                                left: '5px',
                                fontFamily: 'cursive',
                                color: '#999',
                                fontSize: 15,
                                fontWeight: 300,
                                fontStyle: 'italic',
                                textAlign: 'left',

                            }}
                        >

                            620 Eighth Avenue, New York,
                            New York, 10018.
                        </Typography>

                    </Typography>

                    <Typography 

                        sx = {{

                            paddingLeft: '150px',
                            paddingTop: '25px',
                            width: '48%',
                            color: '#C39738'
                        }}
                    >

                        <EmailOutlinedIcon/>

                        <Typography

                            component = 'span'

                            sx= {{

                                position: 'relative',
                                bottom: '5px',
                                left: '5px',
                                fontFamily: 'cursive',
                                color: '#999',
                                fontSize: 15,
                                fontWeight: 300,
                                fontStyle: 'italic',
                                textAlign: 'left'
                            }}
                        >

                            all4home@example.com
                        </Typography>

                    </Typography>
                    <Typography 

                        sx = {{

                            paddingLeft: '153px',
                            paddingTop: '25px',
                            width: '38%',
                            color: '#C39738'
                        }}
                    >

                        <PhoneIphoneOutlinedIcon/>

                        <Typography

                            component = 'span'

                            sx= {{

                                position: 'relative',
                                bottom: '5px',
                                left: '5px',
                                fontFamily: 'cursive',
                                color: '#999',
                                fontSize: 15,
                                fontWeight: 300,
                                fontStyle: 'italic',
                                textAlign: 'left'
                            }}
                        >

                            +(1) 212-556-3622
                        </Typography>

                    </Typography>

                </Grid>

                <Grid item xs = {6} lg = {4}>

                    <Typography 
                        sx = {{
                            
                            paddingTop: '50px',
                            color: 'white',
                            fontSize: 25,
                            fontFamily: 'cursive',
                            fontStyle: 'italic'

                        }}
                    >
                        Twitter feed
                    </Typography>

                    <Typography 

                        sx = {{

                            paddingLeft: '135px',
                            paddingTop: '25px',
                            width: '57%',
                            color: '#C39738',
                            fontSize: 14,
                            textAlign: 'left',
                        }}
                    >

                        <TwitterIcon/>

                        <Typography

                            component = 'span'

                            sx= {{

                                position: 'relative',
                                bottom: '5px',
                                left: '5px',
                                color: '#999',
                                fontSize: 15,
                                fontWeight: 300,
                                textAlign: 'left',

                            }}
                        >

                            @QuickPro5 @cssdesignawards Hey, please check your inbox for more details.
                            
                        </Typography>

                        <Typography

                            sx = {{

                                textAlign: 'left',
                                fontFamily: 'cursive',
                                fontStyle: 'italic',
                                color: '#676767'
                            }}
                        >

                            11 months ago
                        </Typography>

                    </Typography>
                    
                    <Typography 

                        sx = {{

                            paddingLeft: '135px',
                            paddingTop: '25px',
                            width: '57%',
                            color: '#C39738',
                            fontSize: 14,
                            textAlign: 'left',
                        }}
                    >

                        <TwitterIcon/>

                        <Typography

                            component = 'span'

                            sx= {{

                                position: 'relative',
                                bottom: '5px',
                                left: '5px',
                                color: '#999',
                                fontSize: 15,
                                fontWeight: 300,
                                textAlign: 'left',

                            }}
                        >

                        @GeorgiaAnneUK Poedit is a software and you can download it here https://t.co/slOtDps7jf. You can see how we use it… https://t.co/aeBTHGZYrA
                            
                        </Typography>

                        <Typography

                            sx = {{

                                textAlign: 'left',
                                fontFamily: 'cursive',
                                fontStyle: 'italic',
                                color: '#676767'
                            }}
                        >

                            1 year ago
                        </Typography>

                    </Typography>
                    

                </Grid>
                
               
                <Grid item xs = {6} lg = {4}>

                    <Typography 
                        sx = {{
                            
                            paddingTop: '50px',
                            color: 'white',
                            fontSize: 25,
                            fontFamily: 'cursive',
                            fontStyle: 'italic'

                        }}
                    >
                        Newsletter
                    </Typography>

                    <Typography 

                        sx = {{

                            paddingLeft: '150px',
                            paddingTop: '25px',
                            width: '57%',
                            color: '#999',
                            fontSize: 14,
                            textAlign: 'left',
                        }}
                    >


                        Set up your footer quickly using the footer widget areas. 
                        With the option of 1-4 footer columns, you can be sure that all relevant 
                        information will look gorgeous in your footer.

                    </Typography>
                    
                    <FormControl sx={{ width: '25ch', marginLeft: '148px', marginTop: '35px'}}>
                        <OutlinedInput size='small' placeholder="Please enter text" />
                        <Button variant="contained" color='inherit' startIcon={<SendIcon />}

                            sx = {{

                                
                                backgroundColor: '#C39738',
                                width: '15%',
                                textAlign: 'center',
                                position: 'relative',
                                bottom: '40px',
                                left: '190px',
                                paddingTop: '12px',
                                paddingbottom: '10px',
                                paddingRight: '0',
                                "&:hover": {
                                    
                                    backgroundColor: '#C39738',

                                }
                            }}
                        >
                            
                        </Button>
                    </FormControl>              

                    <Typography
                        component = "span"
                        sx = {{

                            fontFamily: 'cursive',
                            fontStyle: 'italic',
                            position: 'relative',
                            top: '120px',
                            right: '210px'
                        }}
                    >

                        Folow us:

                        <Typography 
                        
                            component = "span"
                            sx = {{

                                position: 'relative',
                                bottom: '114px',
                                left: '270px',
                                "&:hover": {

                                    color: '#C39738',
                                    cursor: 'pointer'

                                }
                            }}
                        >
                            <InstagramIcon/>
                        </Typography>
                        <Typography 
                        
                            component = "span"
                            sx = {{

                                position: 'relative',
                                bottom: '114px',
                                left: '270px',
                                "&:hover": {

                                    color: '#C39738',
                                    cursor: 'pointer'

                                }
                            }}
                        >
                            <TwitterIcon/>
                        </Typography>
                        <Typography 
                        
                            component = "span"
                            sx = {{

                                position: 'relative',
                                bottom: '114px',
                                left: '270px',
                                "&:hover": {

                                    color: '#C39738',
                                    cursor: 'pointer'

                                }
                            }}
                        >
                            <FacebookIcon/>
                        </Typography>
                    </Typography>


                </Grid>
                
               
                
            </Grid>
        </Box>
    );

}

export default Footer;