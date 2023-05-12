import React from 'react'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300 h-screen w-full'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="javascript logo" />
                    <p className='my-4'>JavaScript</p>

                </div>
                
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="react logo" />
                    <p className='my-4'>React</p>

                </div>
                
    
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwindlogo" />
                    <p className='my-4'>Tailwind</p>

                </div>
                
    
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongo} alt="mongo logo" />
                    <p className='my-4'>MongoDB</p>

                </div>
                
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="github logo" />
                    <p className='my-4'>Githubt</p>

                </div>
                
           
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="node logo" />
                    <p className='my-4'>Node JS</p>

                </div>
                </div>
                
        </div>
        
        </div>
  )
}

export default Skills