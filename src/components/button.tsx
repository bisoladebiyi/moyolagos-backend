import React from 'react'
import { TailSpin} from  'react-loader-spinner'

interface BtnProps {
    text:string 
    type?: "outline" | "fill"
    onClick?: () => void
    loading?: boolean
    className?: string
}

const Button:React.FC<BtnProps> = ({ text, type, onClick, loading, className}) => {
  return (
    <button onClick={onClick} className={`py-2 px-5 text-sm ${type === 'outline' ? 'text-blue-400 bg-white border border-blue-400 hover:bg-blue-50' : 'text-white bg-blue-400 '} rounded-sm hover:bg-opacity-95 ${className}`}>{loading ? <TailSpin color={type ==="outline" ? "rgb(96 165 250)" : "#fff"} width={20} height={20} /> : text}</button>
  )
}

export default Button