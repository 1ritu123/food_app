import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link ,NavLink} from 'react-router-dom';
import '../styles/HeaderStyles.css'
import Logo from '../Images/logo.svg'

const Header = () => {

    const [mobileOpen ,setMobileOpen] = useState(false)

    const handleDrawerToggler = ()=>{
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggler} sx={{textAlign:'center'}}>
           <Typography variant='h6' component='div' sx={{flexGrow:1,my: 2}} color={'goldenrod'}>
           <img src={Logo} alt='logo' height='70' width='200'></img>
            </Typography>
            <Divider/>
            
              <ul className='mobile-navigation'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
               
              </ul>
        </Box>
       
    )
  return (
    <>
   <Box>
     <AppBar component={'nav'} sx={{bgcolor:'black'}}>  
        <Toolbar>
        <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggler}
              >
                
                <MenuIcon/>
              </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} color={'goldenrod'}>
                <img src={Logo} alt='logo' height='70' width='250'></img>
            </Typography>
            <Box sx={{display:{xs:'none' ,sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                    <NavLink  activeclassname='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </li>
               
              </ul>
        </Box>
        </Toolbar>
     </AppBar>
     <Box component='nav'>
        <Drawer variant='temporary' 
        open={mobileOpen} 
        onClose={handleDrawerToggler} 
        sx={{display:{xs:'block' ,sm:'none',"& .MuiDrawer-paper":{
            width: '240px',
            boxSizing: 'border-box'
        }}}}

       
        >
            {drawer}
        </Drawer>
     </Box>
     <Box >
       <Toolbar/>
     </Box>
     
      
   </Box>
   
   
    </>
  )
}

export default Header