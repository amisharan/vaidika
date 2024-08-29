import React from 'react'
import image from "../Images/pandit2.jpg";

function menu() {
    return (
        <div className="relative h-screen">
            <img src={image} alt="pandit" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4 md:p-8 lg:p-12">
                <div className="text-left text-white max-w-lg">
                    <h1 className="font-Poppins">THIS FESTIVAL SEASON</h1>
                    <h1 className="text-3xl font-Poppins sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        HIRE PANDIT'S ON VAIDIKA
                    </h1>
                    <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
                        Experience the spiritual ambiance of the Ganga Aarti live from the
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 ml-20">
                        <button className="bg-white text-red-800 px-4 font-bold sm:px-6 py-2 sm:py-3 rounded-full border border-red-900 w-full sm:w-auto  ">
                            Hire Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default menu