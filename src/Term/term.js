import React from 'react'


function Term() {
    return (
        <div className='py-20 px-4 sm:px-6 md:px-8 lg:px-12 '>
            <div className='text-bold flex items-center justify-center '>
                <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl text-red-900'><span className='underline underline-offset-3'>Please check the Term and Condition</span></h1>
            </div>
            <div>
                <p className='text-base sm:text-lg lg:text-xl leading-realxed'>
                    A Terms and Conditions agreement acts as a legal contract between you (the company) and the user. It's where you maintain your rights to exclude users from your app in the event that they abuse your website/app, set out the rules for using your service and note other important details and disclaimers.

                    Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).

                    Your Terms and Conditions agreement will be uniquely yours. While some clauses are standard and commonly seen in pretty much every Terms and Conditions agreement, it's up to you to set the rules and guidelines that the user must agree to.

                    Terms and Conditions agreements are also known as Terms of Service or Terms of Use agreements. These terms are interchangeable, practically speaking. More rarely, it may be called something like an End User Services Agreement (EUSA).
                </p>
            </div>
        </div>
    )
}

export default Term