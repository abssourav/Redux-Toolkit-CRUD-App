import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='mb-10 bg-slate-100 p-5 flex justify-around' >
     <NavLink to='/' className='font-extrabold '>Home</NavLink>
     <NavLink to='/show-books' className='font-extrabold '>Show-Books</NavLink>
     <NavLink to='/add-book' className='font-extrabold '>Add-Book</NavLink>
    </div>
  )
}

export default Nav
