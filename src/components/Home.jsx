import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>Home
    {/* // Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Sakshi Saroj</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I am a Frontend/UI Developer</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>I am a Frontend Developer specializing in building exceptional digital experiences. Currently,I am focused on building responsive applications.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/></span>
            </button>

        </div>

    </div>
    </div>
  )
}

export default Home