import React from 'react'
import Layout from '../components/layout'
import { Typography, Box } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:10,textAlign:'center' ,p:4, 
      "& h5":{
        fontWeight:'bold',
        my:2,
        fontSize:'2rem',
      },
      "& p":{
        textAlign:'justify'
      },
      "@media (max-width:600px)":{
         mt:0,
        " & h5":{
          fontSize:'1.5rem'
        }
      }
      }}>
        <Typography variant='h5'>Welcome to My Restaurant</Typography>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa beatae maxime eveniet porro possimus, animi natus officia doloremque facilis cupiditate molestiae. Facere ab ut veniam magni at dolor nulla cupiditate laboriosam itaque sit ipsum dicta nostrum, architecto aliquid neque? Nisi consectetur debitis harum aut consequuntur voluptatum aspernatur quaerat officia amet, necessitatibus eum repudiandae aperiam esse totam maxime eaque recusandae fuga reprehenderit facere optio vero enim eligendi corrupti! Incidunt impedit sequi inventore veniam quae repellendus adipisci dolorem maxime laborum eveniet obcaecati iure mollitia suscipit debitis, illo molestias laudantium tenetur nisi corporis! Quae iusto suscipit pariatur incidunt quidem ea nobis unde.
          </p>
          <br></br>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laborum eaque debitis itaque quas! Soluta excepturi vitae sequi numquam vero illo. Dicta quibusdam magni ipsam nulla, quas odit iure fugiat ullam cumque error. Atque similique voluptas recusandae tempora. Obcaecati officia ab nemo nobis. Ab quaerat praesentium consequatur doloremque obcaecati corrupti incidunt, esse est, necessitatibus impedit eveniet facere, libero porro laudantium! Ipsum harum, vero eius minus recusandae minima dicta earum expedita inventore officiis dolorum consequatur tempora architecto libero iusto repudiandae at labore explicabo aut officia provident dignissimos excepturi! Possimus vel dolore, officiis odio tempora alias perferendis molestias quisquam? Non, consectetur fugit.
          </p>
        
      </Box>
    </Layout>
  )
}

export default About