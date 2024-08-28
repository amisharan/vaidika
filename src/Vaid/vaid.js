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
                    <h1 className='text-2xl font-bold flex justify-center items-center'>Lorem lpsum


                    </h1>

                    <p className='mt-4 text-sm md:text-base lg:text-lg leading-relaxed'>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className='flex item-center justify-center mt-3'>
                        <button className="bg-white text-red-800 font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto ">
                            Download Now
                        </button>
                    </div>  </div>
                <div className='flex items-center justify-center'>
                    <img src={image} alt='sample' className='w-full object-cover' />

                </div>
            </div>




        </div>
    )
}

export default vaid