import React from 'react'
import image from "../Images/phone.jpg";

function vaid() {
    return (
        <div className="bg-gradient-to-b from-red-300 to-red-50 h-screen flex flex-col">

            <div className='flex items-center justify-center py-8'>

                <h1 className='font-bold text-2xl md:text-2xl lg:text-3xl text-red-900'><span className='underline underline-offset-4'>VAIDIKA APP</span></h1>
            </div>
            <div className='flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16'>
                <div className='flex flex-col justify-center p-4'>
                    <h1 className='text-2xl font-bold flex justify-center items-center'>Video Streaming


                    </h1>

                    <p className='mt-4 text-sm md:text-base lg:text-lg leading-relaxed'>Vaidika offers live Aarti from different Temples where devotees can take the benefit of getting connected from different Temples.</p>

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
                <div className='flex items-center justify-center'>
                    <img src={image} alt='sample' className='w-full object-cover' />

                </div>
            </div>




        </div>
    )
}

export default vaid