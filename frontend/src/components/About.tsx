import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col mx-3.5 sm:mx-7'>
            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 mb-8 text-gray-700'>TRẢI NGHIỆM KHÁCH HÀNG</p>

            <div>
                <div className='w-64 h-fit rounded-[12px] bg-gray-100 shadow-md p-7'>
                    <p className='text-5xl text-gray-700 font-semibold mb-3.5'>+ 50</p>
                    <p className='mb-10'>sản phẩm</p>
                    <p className='text-5xl text-gray-700 font-semibold mb-3.5'>+200</p>
                    <p>khách hàng tin dùng</p>
                </div>
            </div>
        </div>
    )
}

export default About
