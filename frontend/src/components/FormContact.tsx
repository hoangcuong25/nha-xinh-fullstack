import React from 'react'
import form_contact from '../../public/banner-nha-xinh-khong-gian-tu-van.jpg'
import Image from 'next/image'

const FormContact = () => {
    return (
        <div className='mt-16 flex flex-col md:flex-row'>
            <div className='md:w-1/2 w-full'>
                <div className="md:p-6 p-2.5 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
                    <div className="bg-white md:p-8 p-3.5 shadow-md rounded-md w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-4">Bạn cần hỗ trợ?</h2>
                        <p className="text-gray-600 mb-6">
                            Xin vui lòng để lại yêu cầu hỗ trợ của bạn.
                        </p>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="Họ tên"
                                    className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <input
                                    type="tel"
                                    placeholder="+(84) 0123 456"
                                    className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                            />
                            <textarea
                                placeholder="Nội dung liên hệ"
                                className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring focus:ring-blue-300"
                            ></textarea>
                            <div className="flex items-center space-x-4">
                                <label className="cursor-pointer">
                                    <input type="file" className="hidden" />
                                    <span className="border border-gray-300 rounded-md p-2 text-gray-500 hover:bg-gray-100">
                                        Chọn tệp
                                    </span>
                                </label>
                                <span className="text-gray-500 sm:block hidden lg:text-base text-sm">Chưa có tệp nào được chọn</span>
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                            >
                                Gửi Yêu Cầu
                            </button>
                        </form>
                    </div>
                    <div className="mt-4">
                        <span className="text-sm font-semibold text-gray-600">HOTLINE:</span>
                        <span className="text-sm font-semibold text-brown-600 ml-2">
                            1800 7200
                        </span>
                    </div>
                </div>
            </div>

            <Image alt='contact' src={form_contact} className='md:w-1/2 w-full' />
        </div>
    )
}

export default FormContact
