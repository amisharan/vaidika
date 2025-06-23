import React, { useState } from 'react';
import axios from 'axios';

import { FaMailBulk } from 'react-icons/fa';
import { FaLocationCrosshairs, FaPhone } from 'react-icons/fa6';

const Login = () => {
    const data = { name: "", email: "", phone: "", address: "", message: "" };
    const [inputData, setInputData] = useState(data);

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const submitForm = async () => {
        const payload = {
            name: inputData.name,
            email: inputData.email,
            number: inputData.phone, // key must be "number" for the API
            address: inputData.address,
            message: inputData.message,
        };

        try {
            const response = await axios.post(
                'https://jc7y6rhhae.execute-api.ap-south-1.amazonaws.com/puja_app/puja_store_contactUs',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setInputData(data); // Clear the form
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('API error:', error);
            alert('Error submitting form: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <>
            <div className='container flex flex-col sm:flex-row justify-between bg-white sm:bg-yellow p-4 sm:p-8 lg:p-16 mt-8'>
                <div className='flex-1 mb-4 sm:mb-0 py-8'>
                    <h1 className='text-3xl font-bold mb-6'>Send Us Your Query</h1>

                    <form className='p-4 sm:p-6 md:p-8 lg:p-10' onSubmit={(e) => e.preventDefault()}>
                        <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                            <input type="text" placeholder='Name*' name="name" className='rounded border p-2 flex-1' required value={inputData.name} onChange={handleData} />
                            <input type="email" placeholder='Email*' name="email" className='rounded border p-2 flex-1' required value={inputData.email} onChange={handleData} />
                        </div>

                        <div className='mb-4'>
                            <input type="tel" placeholder='Phone Number*' name="phone" className='rounded border p-2 w-full' required value={inputData.phone} onChange={handleData} />
                        </div>

                        <div className='mb-4'>
                            <input type="text" placeholder='Address*' name="address" className='rounded border p-2 w-full' required value={inputData.address} onChange={handleData} />
                        </div>

                        <div className='mb-4'>
                            <textarea name="message" placeholder='Message*' className='rounded border p-2 w-full' required value={inputData.message} onChange={handleData} />
                        </div>

                        <div className='flex justify-start'>
                            <button
                                type="button"
                                onClick={submitForm}
                                className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>

                <div className='flex-1 px-4 sm:px-8 md:px-10 lg:px-12'>
                    <h3 className='text-2xl font-bold sm:text-3xl mb-6'>Get Here</h3>
                    <div className='mb-4'>
                        <a href="#" className='text-blue-500 flex items-center'>
                            <FaLocationCrosshairs className='mr-2' />
                            New Adarsh Nagar, Hatwar, Ranchi, Jharkhand 834001
                        </a>
                    </div>
                    <div>
                        <a href="#" className='text-blue-500 flex items-center'>
                            <FaPhone className='mr-2' />
                            +91 9471352463
                        </a>
                    </div>
                    <div>
                        <a href='#' className='text-blue-500 flex items-center'>
                            <FaMailBulk className='mr-2' />
                            reply.vaidikaapp@gmail.com
                        </a>
                    </div>

                    <div className='relative overflow-hidden mt-6'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3662.304689142315!2d85.3574275!3d23.3771923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3d962fa464b%3A0x16767e6573f86e61!2sKokar%20Chowk%2C%20New%20Adarsh%20Nagar%2C%20Hatwar%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1745059810278!5m2!1sen!2sin"
                            width="800"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
