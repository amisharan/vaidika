import React from 'react'
import image from "../Images/phone.jpg";

function vaidi() {
    return (

        <div className='bg-gradient-to-b from-red-50 to-red-300  min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 py-8'>

            <div className='flex justify-center items-center'>
                <img src={image} alt='sample' className='w-full  object-cover rounded-lg shadow-md' />


            </div>
            <div className='flex flex-col justify-center p-4 '>

                <h1 className='text-2xl font-bold flex justify-center items-center md:text-2xl lg:text-3xl mb-4'>Event Notifications


                </h1>

                <p className=' mt-4 text-sm md:text-base lg:text-lg leading-relaxed mb-4'>Be alerted about upcoming spiritual events, or festivals, so you can participate.</p>
                <div className="flex items-center justify-center mt-3">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.vaidika.puja_store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-white text-red-800 font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto transition duration-300 ease-in-out hover:bg-red-800 hover:text-white hover:scale-105">
                            Download Now
                        </button>
                    </a>
                </div>
            </div>


        </div>





    )
}

export default vaidi