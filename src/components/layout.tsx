import React from 'react'
import Navbar from './navbar'

interface Props {
    children: JSX.Element,
    currentPage: string
};  
const Layout:React.FC<Props> = ({ children, currentPage }) => {
  return (
    <>
    <Navbar currentPage={currentPage} />
    <div className='px-5 sm:px-16 pb-20'>
    {children}
    </div>
   
    </>
  )
}

export default Layout