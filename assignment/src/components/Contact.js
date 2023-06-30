import React from 'react'

function Contact() {
    return (
        <div className='mx-3'>
            <h2 className='text-center text-3xl mt-4 uppercase font-semibold'>Contact Us</h2>

            <div className='mt-20 flex'>
                <form className='w-3/5'>
                    <div className='flex justify-between mb-8'>
                        <input type="text" placeholder='Full Name' className='bg-transparent border-2 border-gray-300 w-1/2 outline-none py-4 rounded-full placeholder:text-black pl-3' />
                        <input type="text" placeholder='Email address' className='bg-transparent border-2 border-gray-300 w-[45%] outline-none py-4 rounded-full placeholder:text-black pl-3' />
                    </div>

                    <textarea id="" cols="77" rows="7" placeholder='Message' className='bg-transparent border-2 border-gray-300 outline-none rounded-lg placeholder:text-black pl-4'></textarea>
                    <button className='bg-[#F2CC8F] w-full text-white py-2 text-lg rounded-xl mt-6 font-medium'>Submit Form</button>
                </form>
                <div className='w-2/5 relative'>
                    <img src="/images/WorldMap.svg" alt="world" className='w-full mt-8' />
                    <div className='absolute top-[20%] w-[80%] flex flex-col left-[10%]'>
                        <div className='bg-[#3D405B] rounded-t-lg text-gray-300 flex flex-col  items-center py-4'>
                            <p>London, United Kingdom</p>
                            <p>(020) 010-020-0340</p>
                            <p>info@company.com</p>
                        </div>
                        <p className='bg-[#E07A5F] rounded-b-lg text-center py-2'>Directions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact