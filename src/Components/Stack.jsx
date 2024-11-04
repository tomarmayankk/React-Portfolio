import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'

const Stack = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen">
        <div><h1 className="text-4xl font-bold mb-20">My Tech Stack</h1></div>
        <div className=''>
        <ul className='text-white text-8xl flex items-center justify-center gap-6'>
            <li className='text-blue-600'><GrReactjs/></li>
            <li className='text-green-800' ><DiMongodb/></li>
            <li  ><RiNextjsFill/></li>
            <li className='text-yellow-500'><FaNodeJs/></li>
            <li><SiExpress/></li>        
            <li className='text-cyan-500'><RiTailwindCssFill/></li>        
        </ul>
        </div>

    </div>
  )
}
export default Stack