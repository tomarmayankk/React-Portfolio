import { Code, Github, Linkedin } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-opacity-40 mb-20 p-5 flex items-center justify-between'>
        <div className='flex items-center'><span className='text-xl font-semibold text-white '>LOGO</span></div>
        <div className='flex items-center'>
            <ul className='flex items-center justify-between p-5'>
                <li className='text-white p-3'><a href="/"><Github/></a></li>
                <li className='text-white p-3'><a href="/"><Linkedin/></a></li>
                <li className='text-white p-3'><a href="/"><Code/></a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar