import React from 'react'
import { useState } from 'react';

import { FaMailBulk } from 'react-icons/fa';
import { FaLocationCrosshairs, FaPhone } from 'react-icons/fa6';


const Login = () => {
    const data = { name: "", email: "", phone: "", address: "", message: "" };
    const [inputData, setInputData] = useState(data)
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });

        console.log(inputData)
    }

    return (
        <>
            <div className='container   flex flex-col sm:flex-row justify-between bg-white sm:bg-yellow p-4 sm:p-8 lg:p-16 mt-8'>


                <div className='flex-1 mb-4 sm:mb-0 py-8 item-center justify-center '>
                    <h1 className=' text-3xl font-bold   font-bold mb-6 '>Send Us Your Query</h1>


                    <form action="#" className=' p-4 sm:p-6 md:p-8 lg:p-10'>

                        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                            <input type="text" placeholder='Name*' name="name" className='rounded border p-2 flex-1' required="" value={inputData.name} onChange={handleData} />

                            <input type="text" placeholder='Email*' name="email" className='rounded border p-2 flex-1' required="" value={inputData.email} onChange={handleData} />
                        </div>

                        <div className='mb-4'>
                            <input type="tel" placeholder='Phone Number*' name="phone" className='rounded border p-2 w-full ' required="" value={inputData.phone} onChange={handleData} />
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder='Address*' name="address" className='rounded border p-2 w-full' required="" value={inputData.address} onChange={handleData} />
                        </div>

                        <div className='mb-4 '>
                            <textarea name="message" placeholder='Message*' className=' rounded border p-2 w-full ' required="" value={inputData.message} onChange={handleData} />
                        </div>

                        <div className=' flex justify-start'>
                            <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">SUBMIT</button>

                        </div>
                    </form>
                </div>
                <div className='flex-1 px-4 sm:px-8  md:px-10 lg:px-12'>
                    <h3 className='text-2xl font-bold sm:text-3xl mb-6'>Get Here</h3>
                    <div className='mb-4'>
                        <a href="#" className='text-blue-500 flex item-center'><FaLocationCrosshairs className='mr-2' />Budhwa (Old) Mahadeo Talaab, NawabGanj, Hazaribagh, Jharkhand 825301</a>
                    </div>
                    <div>
                        <a href="#" className='text-blue-500 flex item-center' ><FaPhone className='mr-2' />+91 1234567899</a>
                    </div>
                    <div>
                        <a href='#' className='text-blue-500 flex item-center'><FaMailBulk className='mr-2' /> info@gangaaarti.com</a>
                    </div>
                    <div className='relative overflow-hidden '>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9850637195177!2d85.35869487512316!3d23.996304528503387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f49c1be728aae9%3A0x9d5954565b95cde1!2sBudhwa%20(Old)%20Mahadeo%20Talaab!5e0!3m2!1sen!2sin!4v1723287453266!5m2!1sen!2sin"
                            width={800}
                            height={400}
                            allowFullScreen=""
                            Loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login