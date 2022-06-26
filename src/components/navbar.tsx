import React from 'react'
import { Link } from "react-router-dom"

interface NavProps {
  currentPage: string 
}
const Navbar: React.FC<NavProps> = ({ currentPage }) => {
  return (
    <div className='flex bg-blue-100 px-3 sm:px-16 py-4 items-center justify-between'>
        <p className='text-lg sm:text-xl text-blue-500 font-bold'>moyo<span className='text-white'>lagos</span></p>
        <div className='flex space-x-4 text-sm sm:text-base font-medium'>
        <Link to="/"><p className={`cursor-pointer hover:text-blue-500 transition-colors ${currentPage.toLowerCase() === "all posts" ? 'text-blue-500' : 'text-gray-700'}`}>All Posts</p></Link>
        <Link to="/new-post"><p className={`cursor-pointer hover:text-blue-500 transition-colors ${currentPage.toLowerCase() === "new post" ? 'text-blue-500' : 'text-gray-700'}`}>New Post</p></Link>
        </div>
    </div>
  )
}

export default Navbar