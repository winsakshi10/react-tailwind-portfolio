import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form action="https://getform.io/f/bbe4b26a-399a-4386-a83b-a16dd83e59fb" method="post" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 p-4'>Submit the form below to contact me.</p>
            </div>
            <input type='text' placeholder='Name' name="name" className=' p-2 bg-[#ccd6f6]' />
            <input type='email' placeholder='Email' name="email" className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea placeholder='Message' name="message" rows="10" className=' p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 mx-auto items-center flex my-4'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact