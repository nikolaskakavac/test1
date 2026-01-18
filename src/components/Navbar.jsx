import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-blue-500 sticky top-0 z-50 shadow-md'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            
            <Link to="/">
                <h1 className='text-4xl font-bold text-white cursor-pointer hover:opacity-90 transition-opacity'>
                    Jobzee
                </h1>
            </Link>
            
            <ul className='flex'>
                <li className='p-4 text-xl font-medium hover:text-blue-200 cursor-pointer transition-colors'>
                    <Link to="/">Početna</Link>
                </li>
                <li className='p-4 text-xl font-medium hover:text-blue-200 cursor-pointer transition-colors'>
                    <Link to="/ponuda">Ponuda</Link>
                </li>
                <li className='p-4 text-xl font-medium hover:text-blue-200 cursor-pointer transition-colors'>
                    <Link to="/kompanije">Za kompanije</Link>
                </li>
                
                <li className='p-4 text-xl font-medium hover:text-blue-200 cursor-pointer transition-colors'>
                    <Link to="/blog">Blog</Link>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar;