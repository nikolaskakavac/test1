import React from 'react'

const Navbar = () => {
  return (

    <div className='w-full border-b border-grey-200 bg-blue-500'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='text-4xl font-bold text-white'>Jobzee</h1>
            <ul className='flex'>
            <li className='p-4 text-xl'>Početna</li>
            <li className='p-4 text-xl'>Ponuda</li>
            <li className='p-4 text-xl'>Za kompanije</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar