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
    <div className='px-16'>
    {children}
    </div>
   
    </>
  )
}

export default Layout