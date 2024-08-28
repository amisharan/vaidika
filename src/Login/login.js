import React from 'react'
// import { Link } from "react-router-dom";

function login() {

    return (

        <div className='container   flex  justify-between bg-white sm:bg-yellow  '>


            <div>
                <h1 className=' text-2xl font-bold  text-red-500 '>CONTACT US</h1>

                <div className='p-3  '>
                    <h3 className='text-2xl font-serif font-bold:; '>For any inquiries, please contact us.</h3>
                </div>
                <form action="#">

                    <div className='flex gap-4 p-2 '>
                        <input type="text" placeholder='Name*' className='rounded border p-2' />

                        <input type="text" placeholder='Email*' className='rounded border p-2' />
                    </div>

                    <div className='mt-3'>
                        <input type="phone" placeholder='Phone Number*' className='rounded border p-2 w-full ' />
                    </div>
                    <div className='mt-3'>
                        <input type="address" placeholder='Address*' className='rounded border p-2 w-full' />
                    </div>

                    <div className='mt-3 '>
                        <textarea name="message" placeholder='Message*' className=' rounded border p-2 w-full ' />
                    </div>

                    <div className='gap-4 p-2'>
                        <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">SUBMIT</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default login