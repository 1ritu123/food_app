import React from 'react'
import Layout from '../components/layout'
import {MenuList} from  '../Data/Data'
import {Link} from 'react-router-dom'
import { Card, CardActionArea, CardMedia,Box, CardContent, Typography, } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:'flex',flexWrap:'wrap' ,justifyContent:'center'}}
          >
           {
            MenuList.map(menu=>(
              <Card sx={{maxWidth:'300px',display:'flex' ,m:3,borderRadius:'50px',transition: "transform 0.15s ease-in-out","&:hover": { transform: "scale3d(1.02, 1.02, 1)" }}}
              >
                <CardActionArea >
                  <CardMedia 
                  sx={{minHeight:'300px'}} 
                  component={'img'} 
                  src={menu.Image} 
                  alt={menu.Name}
                  >
                  
                  </CardMedia>
                  <CardContent>
                    <Typography variant='h5' gutterBottom  component={'div'}>
                      {menu.Name}
                    </Typography>
                    <Typography variant='body2'  component={'div'}>
                      {menu.Description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
           }
        </Box>
    </Layout>
  )
}

export default Menu