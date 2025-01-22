"use client"

import Image from "next/image";
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { phong_khach, phong_an, phong_ngu, phong_lam_viec, hang_trang_tri, danh_muc } from "@/assets/assets";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-3.5 sm:mx-7 mt-5  border-b border-gray-200 pb-3.5 overflow-x-scroll '>
            <div className='flex gap-7 w-full'>
                <div className='flex items-center justify-between w-full md:w-fit gap-3.5'>
                    <IoMenu className='text-4xl text-gray-700 block sm:hidden' />
                    <Image src='/logo-nhaxinh-25nam-final.png' className='min-w-[150px]' width='150' height='100' alt="logo" />
                </div>

                <div className='hidden sm:flex items-center text-sm text-nowrap relative '>
                    <div className='md:group '>
                        <div className='flex items-center gap-2 p-3 group-hover:text-yellow-400 group-hover:bg-gray-50 rounded-md'>
                            <p className=''>SẢN PHẨM</p>
                            <IoIosArrowUp className='group-hover:rotate-180 transition-all duration-500' />
                        </div>

                        <div className='absolute z-50 top-10 text-[16px] hidden group-hover:flex bg-white border border-gray-200 w-[1000px]'>
                            <div className='flex flex-col gap-5 p-7 text-nowrap '>
                                {phong_an.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>

                            <div className='flex flex-col gap-5 p-7 text-nowrap'>
                                {phong_khach.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>

                            <div className='flex flex-col gap-5 p-7 text-nowrap'>
                                {phong_ngu.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>

                            <div className='flex flex-col gap-5 p-7 text-nowrap'>
                                {phong_lam_viec.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>

                            <div className='flex flex-col gap-5 p-7 text-nowrap'>
                                {hang_trang_tri.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>


                            <div className='p-7'>
                                <Image src='/nha-xinh-phong-khach-hien-dai-poppy-1-1200x800.jpg' width='300' height='300' alt="banner" />
                            </div>
                        </div>
                    </div>

                    <div className='md:group relative'>
                        <div className='flex items-center gap-2 p-3 group-hover:text-yellow-400 group-ghover:bg-gray-50 rounded-md'>
                            <p>PHÒNG</p>
                            <IoIosArrowUp className='group-hover:rotate-180 transition-all duration-500' />
                        </div>

                        <div className='absolute z-50 top-10 left-0 text-[16px] hidden group-hover:flex bg-white border border-gray-200 w-fit'>
                            <div className='flex flex-col gap-5 p-7 text-nowrap'>
                                {danh_muc.map((i) => (
                                    <Link className='flex gap-2 items-center'
                                        key={i.title}
                                        title={i.title}
                                        href={i.href}
                                    >
                                        <p className='text-gray-500 hover:text-gray-900'>{i.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-3 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        BỘ SƯU TẬP
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-3 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        THIẾT KẾ NỘI THẤT
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-3 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        CỬA HÀNG 360 ĐỘ
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-3 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        GÓC CẢM HỨNG
                    </Link>
                </div>
            </div >
            <div className='relative items-center hidden md:flex'>
                <input type="text" placeholder="Tìm sản phẩm" className='w-60 h-11 pl-3 pr-9 border border-gray-300 bg-gray-100 rounded-3xl focus:outline-none' />
                <CiSearch className='text-2xl absolute top-2.5 right-2' />
            </div>
        </div >
    )
}

export default Navbar
