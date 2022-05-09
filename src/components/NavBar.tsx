import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const pages = ['HOME', 'PAGES', 'PORTOFOLIO', 'BLOG', 'SHOP', 'ELEMENTS'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // DROPDOWN MENU
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar position="fixed" sx = {{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ 
                            mr: 2, 
                            display: { xs: 'none', md: 'flex' }, 
                            color: '#9B6E10', 
                            fontFamily: 'Times New Roman',
                            fontSize: 30
                        }}
                    >
                        All4HOME
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx = {{ color: "black" }}
                        >
                        <MenuIcon /> 
                        <Typography sx = {{ letterSpacing: 2, fontSize: 14, fontWeight: 500 }}> MENU </Typography>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (

                            <MenuItem key={page} onClick={handleCloseNavMenu} sx = {{ width: '900px', marginBottom: '15px' }}>
                            <Typography textAlign="center" sx = {{ fontSize: 14 }}> {page} </Typography>
                            <ArrowRightAltIcon 
                                sx = {{ 
                                    textAlign: 'right', 
                                    position: 'sticky', 
                                    left: '800px', 
                                    fontSize: 18,
                                    color: '#9B6E10'
                                }} 
                            >

                            </ArrowRightAltIcon>

                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'flex', md: 'none' },
                            color: '#9B6E10', 
                            fontFamily: 'Times New Roman',
                            fontSize: 30
                        }}
                    >
                        All4HOME
                    </Typography>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            HOME
                        </Button>

                        <Menu        
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onMouseLeave={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                           
                        >

                            <MenuItem onClick={handleClose}  sx = {{ fontSize: 14, fontWeight: 'bold' }}>
                                <ArrowRightAltIcon sx = {{ color: '#9B6E10',}}></ArrowRightAltIcon>
                                Main Home
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14, }}>Blog Home</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14, }}>Shop Home</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14, }}>Prtofolio Home</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14, }}>Landing</MenuItem>


                        </Menu>

                        <Button
                            id="page-button"
                            aria-controls={open ? 'page-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            PAGES
                        </Button>

                        {/* <Menu        
                            id="page-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'page-button',
                            }}
                           
                        >

                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14 }}>About Us</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14 }}>Contact Us</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14 }}>Our Team</MenuItem>
                            <MenuItem onClick={handleClose} sx = {{ fontSize: 14 }}>FAQ</MenuItem>

                        </Menu> */}

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            PORTOFOLIO
                        </Button>

                        
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            BLOG
                        </Button>

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            SHOP
                        </Button>

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ 
                                my: 2, 
                                color: 'black', 
                                display: 'block', 
                                marginLeft: '10px', 
                                fontSize: 14, 
                                marginTop: 2
                            }}
                        >
                            ELEMENTS
                        </Button>

                        
                        {/* {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block', marginLeft: '10px', fontSize: 12}}
                        >
                            {page}
                        </Button>
                        ))} */}

                    </Box>

                    <Box

                        sx = {{
                            color: 'black',
                            marginRight: '10px'
                        }}
                    >
                        <SearchOutlinedIcon/>
                    </Box>

                    <Box

                        sx = {{
                            color: 'black',
                            marginRight: '10px'
                        }}
                    >
                        <ShoppingCartOutlinedIcon/>
                    </Box>

                    

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'} }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuIcon />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
