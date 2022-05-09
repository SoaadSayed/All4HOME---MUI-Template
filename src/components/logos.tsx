import { Box } from "@mui/material";
import Slider from "react-slick";

function LogoSlider() {

    const settings = {

        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };

    return(

        <>
        
            <Box sx = {{backgroundColor: '#FAFAFA'}}>

                <Box sx = {{paddingTop: '70px'}}>

                    <Slider {...settings}>

                        <Box

                            component='div'
                            sx = {{

                                backgroundImage: `url('https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/client-img-4.png')`
                            }}
                        >
                            
                        </Box>
                    </Slider>
                </Box>
                    
            </Box>
        </>
    );

}

export default LogoSlider;