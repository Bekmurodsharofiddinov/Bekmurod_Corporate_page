import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'

const pages = ['Home', "About", 'We offer', 'Portfolio', 'Recent Work', 'Contact', 'Pages'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [click, setClick] = useState(false)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 66) {
      setColor(true)
    } else {
      setColor(false)
    }

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.addEventListener("scroll", changeColor)


  return (
    <AppBar >
      <Toolbar sx={{backgroundColor:"none"}} className={color ? "header header-bg" : "header"} >
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Cursive',
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              position: 'absolute'
            }}
          >
            Corporate
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: '50%' }}>
            {pages.map((page) => (
              <div className={click ? "nav-menu active" : "nav-menu"}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', ":hover": { color: '#FFC800', background: 'none' } }}
                >
                  {page}
                </Button>
              </div>
            ))}
          </Box>


          {/* xs end */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Cursive',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Corporate
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: '70%' }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>



        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;

