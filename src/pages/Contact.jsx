import React from 'react'
import Layout from '../components/layout'
import { Box, Paper, TableCell, TableContainer, TableHead, TableRow, Typography,Table, TableBody } from '@mui/material'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:10 , ml:10 ,"& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact to My Restaurant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque optio impedit autem aspernatur laborum nulla, accusantium deleniti veniam cum expedita inventore sapiente vel corporis fuga quisquam saepe obcaecati quam quaerat.</p>
       </Box>
       <Box sx={{m:3 , width:'600px' ,ml:10 ,"@media (max-width:600px)":{width:'300px'}}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                 <TableCell sx={{background:'black' ,color:'white'}} align='center'>
                   Contact Details
                 </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                   <SupportAgentIcon sx={{pt:1,color:'red'}}/> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <MailIcon sx={{pt:1,color:'skyblue'}}/> myrestro@gmail.com 
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                   <LocalPhoneIcon sx={{pt:1,color:'green'}}/> 1234567890 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact