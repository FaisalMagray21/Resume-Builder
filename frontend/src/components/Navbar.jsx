import React, { use } from 'react'
import logo from '../assets/assets/logo.svg'
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
const user={name:"John"}
const navigate=useNavigate();
const logoutuser=()=>{
    navigate("/")
}
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800
         transition-all' >
    <Link to='/' className='flex items-center'>
        <img src={logo} alt="Logo" className='h-11 w-auto' />
    </Link>
    <div className='flex items-center gap-4 text-sm'>
        <p className='max-sm:hidden'>Hi {user?.name}</p>
        <button onClick={logoutuser} className='text-sm text-green-500 hover:underline'>Logout</button>
    </div>
        </nav>

    </div>
  )
}

export default Navbar