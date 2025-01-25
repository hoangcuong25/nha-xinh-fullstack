'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineReload } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

const Register = () => {

    const router = useRouter()

    const [isShow, setIsShow] = useState<boolean>(false)

    const [loadingLogin, setLoadingLogin] = useState<boolean>(false)

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [password_1, setPassword_1] = useState<string>('')
    const [password_2, setPassword_2] = useState<string>('')
    const [dob, setDob] = useState<string>('')

    // const register = async (e: React.FormEvent): Promise<void> => {
    //     setLoadingLogin(true)

    //     try {
    //         e.preventDefault()

    //         const payload = {
    //             firstName,
    //             lastName,
    //             email,
    //             phone,
    //             password_1,
    //             password_2,
    //             dob
    //         }

    //         const { data } = await axios.post(backendUrl + '/api/user/register', payload, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })

    //         if (data.success) {
    //             toast.success("Đăng Ký Thành Công")
    //             localStorage.setItem('token', data.token)
    //             setToken(data.token)
    //             navigate('/')
    //             scrollTo(0, 0)
    //         } else {
    //             toast.error(data.message)
    //         }
    //     } catch (error: any) {
    //         toast.error(error.response?.data?.message || "Something went wrong")
    //     }

    //     setLoadingLogin(false)
    // }

    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='flex flex-col items-center p-7 gap-5 mt-3 mb-10 md:mt-5 w-fit h-fit border border-gray-300 rounded-xl'>
                <Image
                    src='/logo-nhaxinh-25nam-final.png'
                    className='min-w-[150px] cursor-pointer'
                    width='150'
                    height='100'
                    alt="logo"
                    onClick={() => router.push('/')}
                />

                <div className='text-center'>
                    <p className='font-medium'>Đăng Ký</p>
                    <p className='text-gray-600 text-sm'>Bạn là thành viên mới? Ưu đãi và quà tặng độc đáo đang chờ bạn</p>
                </div>

                <form className='flex flex-col gap-3.5 text-sm'>
                    <div className='flex gap-3'>
                        <div className='w-1/2'>
                            <p>Họ*:</p>
                            <input
                                type="text"
                                className='border-b border-gray-500 focus:outline-none mt-2'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='w-1/2'>
                            <p>Tên*:</p>
                            <input
                                type="text"
                                className='border-b border-gray-500 focus:outline-none mt-2'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <p>Email*:</p>
                        <input
                            type="text"
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <p>Phone*:</p>
                        <input
                            type="number"
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className='relative'>
                        <p>Mật Khẩu*:</p>
                        <input
                            type={`${isShow ? 'text' : 'password'}`}
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={password_1}
                            onChange={(e) => setPassword_1(e.target.value)}
                        />

                        {isShow ?
                            <FaRegEye onClick={() => setIsShow(false)} className='absolute top-8 right-0 cursor-pointer' />
                            : <FaRegEyeSlash onClick={() => setIsShow(true)} className='absolute top-8 right-0 cursor-pointer' />
                        }
                    </div>

                    <div className='relative'>
                        <p>Nhập Lại Mật Khẩu*:</p>
                        <input
                            type={`${isShow ? 'text' : 'password'}`}
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={password_2}
                            onChange={(e) => setPassword_2(e.target.value)}
                        />

                        {isShow ?
                            <FaRegEye onClick={() => setIsShow(false)} className='absolute top-8 right-0 cursor-pointer' />
                            : <FaRegEyeSlash onClick={() => setIsShow(true)} className='absolute top-8 right-0 cursor-pointer' />
                        }
                    </div>

                    <div>
                        <p>Ngày Sinh*:</p>
                        <input
                            type="date"
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>

                    {loadingLogin ?
                        <button type='submit' className='flex justify-center bg-gray-300 mt-3.5 rounded-[13px]  py-1 '>
                            <AiOutlineReload className='animate-spin text-green-500 text-xl text-center' />
                        </button>
                        : <button type='submit' className='bg-red-500 text-white mt-3.5 rounded-[13px] px-24 py-3 '>Đăng Ký</button>
                    }

                    <div className='text-xs'>
                        <p>Khi đăng ký, bạn đã đồng ý với <span className='font-bold'>điều khoản sử dụng</span> và nội quy diễn</p>
                        <p>đàn, nhận email thông báo từ diễn đàn và <span className='font-bold'>Nhà Xinh</span></p>
                    </div>
                </form>

                <div className='flex flex-col items-center justify-center text-gray-700 text-sm mt-3.5  '>
                    <p className=''>Đã là thành viên?</p>
                    <p>Đăng nhập để truy cập vào tài khoản của bạn</p>
                    <Link href='/dang-nhap' className='text-blue-500 hover:text-blue-700 underline underline-offset-2'>Đăng Nhập</Link>
                </div>
            </div>
        </div>
    )
}

export default Register