import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

function Gallary() {

    const gallary = [

        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-1.jpg',
            title: 'CUP OF TEA',
            section: 'Home',
            subsection: 'Innovation'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-2.jpg',
            title: 'PRINCESS',
            section: 'Business',
            subsection: 'Home'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-3.jpg',
            title: 'NOTEBOOK',
            section: 'Home',
            subsection: 'Vision'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-4.jpg',
            title: 'HOME DESIGN',
            section: 'Home',
            subsection: 'Innovation'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-5.jpg',
            title: 'GIFT CARDS',
            section: 'Business',
            subsection: 'Home'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-6.jpg',
            title: 'BREAKFAST',
            section: 'Home',
            subsection: 'Vision'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-7.jpg',
            title: 'PLANTS',
            section: 'Home',
            subsection: 'Innovation'
        },
        {
            imgPath: 'https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-8.jpg',
            title: 'FLOWERS',
            section: 'Business',
            subsection: 'Home'
        },
    ]

    return (

        <Box
            component = 'section'
            sx = {{ position: 'relative', bottom: 100}}
        > 

            <ImageList 
                sx = {{ 
                    width: 1349.2, 
                    height: 680,
                    "::-webkit-scrollbar": {

                        display: 'none'
                    },
                    "img:hover": {

                        transform: 'scale(1.05)',
                        transition: '0.9s'
                    }
                }} 
                cols={4}
            >
                {gallary.map((item) => (

                    <>
                    
                        <ImageListItem key = {item.title}>

                            <img
                                src={`${item.imgPath}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt = {item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar

                                title = {item.title}
                                subtitle = {`${item.section}/ ${item.subsection}`} 
                                sx = {{

                                    width: '100%',
                                    height: '100%',
                                    opacity: 0,
                                    "&:hover": {

                                        cursor: 'pointer',
                                        opacity: '100%',
    
                                    },
                                   
                                    ".MuiImageListItemBar-subtitle": {

                                        fontStyle: 'italic'
                                    },
                                    ".MuiImageListItemBar-subtitle:hover": {

                                        color: '#C39738'
                                    },
                                    ".MuiImageListItemBar-root": {

                                        opacity: '0',
                                        
                                    },
                                    ".MuiImageListItemBar-root:hover": {

                                        opacity: '5',
                                        
                                    }
                                }}
                                
                            />
                            
                        </ImageListItem>

                        {/* <Typography
                            sx = {{

                                fonstSize: 16,
                                fontWeight: 500,
                                letterSpacing: '2px',
                                "&:hover": {

                                    cursor: 'pointer'
                                }
                            }}
                        >

                            {item.title}

                        </Typography>

                        <Typography
                            component='span'
                            sx = {{

                                fonstSize: 16,
                                fontWeight: 500,
                                fontFamily: 'Cursive',
                                letterSpacing: '-0.5px',
                                fontStyle: 'italic',
                                "&:hover": {

                                    cursor: 'pointer',
                                    color: '#C39738'
                                }
                            }}
                        >

                            {item.section}/

                        </Typography>

                        <Typography
                            component='span'
                            sx = {{

                                fonstSize: 16,
                                fontWeight: 500,
                                fontFamily: 'Cursive',
                                letterSpacing: '-0.5px',
                                fontStyle: 'italic',
                                marginRight: '400px',
                                marginLeft: '230px',
                                "&:hover": {

                                    cursor: 'pointer',
                                    color: '#C39738'
                                }
                            }}
                        >

                            {item.subsection}

                        </Typography> */}
                    </>

                ))}
            </ImageList>

        </Box>



    )


}

export default Gallary;

