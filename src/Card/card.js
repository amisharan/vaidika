import React from 'react'
import image from "../Images/ram.avif"
import image1 from "../Images/ram.avif"
import image3 from "../Images/g.avif"
import image4 from "../Images/4img.jpg"

function card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            <div className="py-2 px-4">
                <div className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                    <img src={image} alt="Sample" className="w-full h-auto mr-4" />
                    <div className='p-4'>
                        <h2 className='text-gray-500'>1M+ Live</h2>
                        <h3 className='font-bold'>Ram Mandir Live Sho...</h3>
                    </div>
                    <div className='flex items-center justify-center mb-2'>
                        <button className="bg-white text-red-800  font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-2 px-4">
                <div className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                    <img src={image1} alt="Sample" className="w-full h-auto" />
                    <div className='p-4'>
                        <h2 className='text-gray-500'>1M+ Live</h2>
                        <h3 className='font-bold'>Ram Mandir Live Sho...</h3>

                    </div>
                    <div className='flex items-center justify-center mb-2'>
                        <button className="bg-white text-red-800  font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-2 px-4">
                <div className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                    <img src={image3} alt="Sample" className="w-full h-auto" />
                    <div className='p-4'>
                        <h2 className='text-gray-500'>1M+ Live</h2>
                        <h3 className='font-bold'>Ram Mandir Live Sho...</h3>
                    </div>
                    <div className='flex items-center justify-center mb-2'>
                        <button className="bg-white text-red-800  font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-2 px-4">
                <div className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                    <img src={image4} alt="images" className="w-full h-auto" />
                    <div className='p-4'>
                        <h2 className='text-gray-500'>1M+ Live</h2>
                        <h3 className='font-bold'>Ram Mandir Live Sho...</h3>
                    </div>
                    <div className='flex items-center justify-center mb-2'>
                        <button className="bg-white text-red-800  font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card