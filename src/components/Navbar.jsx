import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>MyPlanner</span>
        </div>
      <ul className="flex gap-8 mx-9">
      <li className='cursor-pointer hover:font-bold transition-all'>
          <a href="https://github.com/your-username/your-repository" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaGithub />
            Github
          </a>
        </li>
     
      </ul>
    </nav>
  )
}

export default Navbar
