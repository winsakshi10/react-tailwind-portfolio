import React , {useState} from 'react'
import logo from '../assets/logo.png'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const[nav,setNav]=useState(false)

    const handleClick =() => setNav(!nav)



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="Logo" className=' h-24 w-24 py-4'/>
        </div>
        {/* menus */}
        <div className=''>
            <ul className='hidden md:flex px-4 gap-8 cursor-pointer'>
                <li>
                <Link to="home" smooth={true} offset={50} duration={500}>
          Home
        </Link>
                </li>
                <li>
                <Link to="about" smooth={true} offset={50} duration={500}>
          About
        </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} offset={50} duration={500}>
         Skills
        </Link>
                </li>
                <li>
                <Link to="work" smooth={true} offset={50} duration={500}>
          Work
        </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} offset={50} duration={500}>
          Contact
        </Link>
                </li>
            </ul>
        </div>
        {/* Hamburger  */}
        <div className='md:hidden z-10 ' onClick={handleClick}>
            {!nav?<FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav?'hidden':' flex flex-col w-full h-screen absolute top-0 left-0 bg-[#0a192f] justify-center items-center  '}>
            <li className='text-4xl py-6 ' >
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
          Home
        </Link>
                </li>
                <li className='text-4xl py-6 ' >
                <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
          About
        </Link>
                </li>
                <li  className='text-4xl py-6 '>
                <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
          Skills
        </Link>
                </li>
                <li className='text-4xl py-6 ' >
                <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
         Work
        </Link>
                </li>
                <li className='text-4xl py-6 '>
                <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
          Contact
        </Link>
                </li>
        </ul>

        {/* Social */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='flex justify-between items-center px-2 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className="flex justify-between items-center text-gray-300 w-full px-2" href="/" >
                    LinkedIn
                    <FaLinkedin size={30} /> 
                    </a>
                </li>
                <li className='flex justify-between items-center px-2 gap-3 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-500'>
                    <a className="flex justify-between items-center text-gray-300 w-full px-2" href="/" >
                    Github
                    <FaGithub size={30} /> 
                    </a>
                </li>

                <li className='flex justify-between items-center px-2 gap-3 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300  bg-red-400'>
                    <a className="flex justify-between items-center text-gray-300 w-full px-2" href="/" >
                    Email
                    <HiOutlineMail size={30} /> 
                    </a>
                </li>

                <li className='flex justify-between items-center px-2 gap-3 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-600'>
                    <a className="flex justify-between items-center text-gray-300 w-full px-2" href="/" >
                    Resume
                    <BsFillPersonLinesFill size={30} /> 
                    </a>
                </li>
                
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar