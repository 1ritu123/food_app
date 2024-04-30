import { Typography ,Box, AppBar} from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <>
       <Box sx={{bgcolor:'black' ,color:'white',textAlign:'center',p:3}}>
          <Box sx={{my:2, "& svg ":{
              fontSize:"60px",
              cursor:'pointer',
              mr:2,
          },
          "& svg:hover": {
            color:'goldenrod',
            transform:'translateX(5px)',
            transition: 'all 400ms'
          },
          }}>
              <InstagramIcon/>
              <TwitterIcon/>
              <WhatsAppIcon/>

            </Box>         
         <Typography variant='h6' sx={{"@media (max-width:600px)":{
            fontSize:'1rem'
         }}} >
            All right reserved &copy; my restaurant
        </Typography>
 
       </Box>
    </>
  )
}

export default Footer