import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';


function SmallGallry() {

    var settings = {

        
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return(

        <Box 
            sx = {{

                marginTop: '150px',
                height: 300,
                marginLeft: '45px'
            }}
        >
            <Typography 
                sx = {{

                    paddingTop: '90px',
                    fontSize: 20,
                    textAlign: 'left',
                    fontFamily: 'cursive'
                }}
            >

                Our Gallery
                        
            </Typography>

            <Typography 
                sx = {{

                    fontSize: 14,
                    textAlign: 'left',
                    fontFamily: 'cursive',
                    paddingTop: '25px',
                    color: '#999',
                    width: '290px'
                }}
            >

                Sed ut perspiciatis unde omnis iste na uiers error sit  
                voluptate maccus ntiu dolo remque lauda ntium. Sed perspic atis unde.
                    
            </Typography>

            <Typography 
                sx = {{

                    fontSize: 14,
                    textAlign: 'left',
                    fontFamily: 'cursive',
                    paddingTop: '35px',
                    color: '#C39738',
                    width: '290px',
                    fontStyle: 'italic',
                    "&:hover": {

                        cursor: 'pointer',
                        color: 'black'
                    }
                }}
            >

                View all works
                        
            </Typography>

            <Box

                sx= {{

                    width: '70%', 
                    position: 'relative',
                    bottom: '271px',
                    left: '350px',
                    top: '-272px'

                }}
            >
                        
                <Slider {...settings} >
                    <Box

                        sx = {{

                            backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-gallery-img-2.jpg'})`,
                            backgroundSize: 'cover',
                            height: 300,
                            "&:hover": {

                                transform: 'scale(1.05)',
                                transition: '0.4s',
                                cursor: 'pointer'
                            }
                        }}
                    >
                                
                    </Box>
                    <Box

                        sx = {{

                            backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-gallery-img-3-1.jpg'})`,
                            backgroundSize: 'cover',
                            height: 300,
                            "&:hover": {

                                transform: 'scale(1.05)',
                                transition: '0.4s',
                                cursor: 'pointer'
                            }
                             
                        }}
                    >
                                
                    </Box>
                    <Box

                        sx = {{

                            backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-gallery-img-4-1.jpg'})`,
                            backgroundSize: 'cover',
                            height: 300,
                            "&:hover": {

                                transform: 'scale(1.05)',
                                transition: '0.4s',
                                cursor: 'pointer'
                            }
                            
                        }}
                    >
                                
                    </Box>
                    <Box

                        sx = {{

                            backgroundImage: `url(${'https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/h-1-gallery-img-1.jpg'})`,
                            backgroundSize: 'cover',
                            height: 300,
                            "&:hover": {

                                transform: 'scale(1.05)',
                                transition: '0.4s',
                                cursor: 'pointer'
                            }
                             
                        }}
                    >
                                
                    </Box>
                            

                            
                          
                </Slider>
            </Box>

    </Box>
    );

}

export default SmallGallry;