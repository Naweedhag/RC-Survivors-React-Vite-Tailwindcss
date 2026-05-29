// Header.jsx - Fixed version
import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePerson } from "react-icons/md";

function Header() {
  return (
    <div className='flex justify-between items-center text-gray-900 p-4'>
      <ul className='flex justify-between items-center text-gray-900 text-xl gap-5'>
        <li><Link to='/'>Home /</Link></li>      
        <li><Link to='/About'>About /</Link></li>  {/* Fixed: Link inside li */}
        <li><Link to='/Contact'>Contact /</Link></li> {/* Fixed: Link inside li */}
      </ul>
      
      <div className='flex justify-center gap-5 p-2 bg-none text-2xl text-blue-600 items-center'>
        <MdOutlinePerson />
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/Signup'><button>Signup</button></Link> 
      </div>
    </div>
  )
}

export default Header