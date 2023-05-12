import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'

const Work = () => {

  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f]' name="work">
        <div className='max-w-1000px w-full mx-auro p-4 flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Work
                </p>
                <p className='py-6'> Check out some of my recent Works</p>
            </div>
            {/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${workImg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{backgroundImage:`url(${realestate})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{backgroundImage:`url(${workImg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{backgroundImage:`url(${workImg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{backgroundImage:`url(${workImg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={{backgroundImage:`url(${workImg})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Demo</button></a>
                            <a href="/"><button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg mx-2'>Code</button></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work