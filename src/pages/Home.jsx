import React from 'react'
import Layout from '../components/layout'
import {Link} from 'react-router-dom'
import Banner from '../Images/banner.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headercontainer'>
            <h1>Food Website</h1>
            <p>Best Food In India</p>
            <Link to='/menu'>
            <button>
              order now
            </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home