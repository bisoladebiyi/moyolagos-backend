import React from 'react'
import { Link } from "react-router-dom"

interface NavProps {
  currentPage: string
}
const Navbar: React.FC<NavProps> = ({ currentPage }) => {
  return (
    <div className='flex bg-blue-100 px-16 py-3 justify-between'>
        <p className='text-xl text-blue-500 font-bold'>moyo<span className='text-white'>lagos</span></p>
        <div className='flex space-x-4 text-base font-medium'>
        <Link to="/"><p className={`cursor-pointer hover:text-blue-500 transition-colors ${currentPage.toLowerCase() === "all posts" ? 'text-blue-500' : 'text-gray-700'}`}>All Posts</p></Link>
        <Link to="/new-post"><p className={`cursor-pointer hover:text-blue-500 transition-colors ${currentPage.toLowerCase() === "new post" ? 'text-blue-500' : 'text-gray-700'}`}>New Post</p></Link>
        </div>
    </div>
  )
}

export default Navbar