import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{

    return(
        <>
        <nav className='border-b-4 border-green-700 text-center fixed top-0
in        bg-green-600 font-blod w-full text-lg text-white'>
          <ul>
          <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8'>
                    Home 
                </Link>
            </li>
            
            <li className='inline-block py-4'>
                <Link to="/artical" className='pl-6 pr-8'>
                    About
                </Link>
                <li className='inline-block py-4'>
                <Link to="/artical-list" className='pl-6 pr-8'>
                    Artical List 
                </Link>
            </li>
            </li>
          </ul>
        </nav>
        </>
    )
}
export default Navbar