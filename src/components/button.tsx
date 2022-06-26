import React from 'react'

interface BtnProps {
    text:string 
    type?: "outline" | "fill"
    onClick?: () => void
}

const Button:React.FC<BtnProps> = ({ text, type, onClick}) => {
  return (
    <button onClick={onClick} className={`py-2 px-5 text-sm ${type === 'outline' ? 'text-blue-400 bg-white border border-blue-400 hover:bg-blue-50' : 'text-white bg-blue-400 '} rounded-sm hover:bg-opacity-95`}>{text}</button>
  )
}

export default Button