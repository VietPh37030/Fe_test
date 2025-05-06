import React from 'react'
import logo from '../../public/img/logo2.png'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center px-4 bg-gray-900 text-white z-50'>
      <div className='flex items-center'>
        <img src={logo} alt="logo" className='w-10 h-' />
        <span className='font-bold text-lg'>envanto</span>
        <span className='ml-1 text-lg'>market</span>
      </div>
      <button
        style={{ backgroundColor: '#82b440' }}
        className="hover:brightness-110 text-white font-bold py-1 px-4 rounded transition duration-200"
      >
        Buy now
      </button>
    </div>
  )
}

export default Header
