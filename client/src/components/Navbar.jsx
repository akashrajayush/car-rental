import React from 'react'
import {assets} from '../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <img src={assets.logo} alt="logo" className='h-8'/>
        </Link>
        <div>
            {menuLinks.map((link, index)=>(
                <Link to={link.path} key={index}></Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar