'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineReload } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '@/context/AppContext';
import GoogleLogin from '@/components/GoogleLogin';

const Login = () => {

    const { setToken } = useContext(AppContext)

    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false)

    const [isShow, setIsShow] = useState<boolean>(false)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        setLoading(true)

        try {
            const { data } = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/user/login', { email, password })

            if (data.success) {
                toast.success("Đăng Nhập Thành Công")
                localStorage.setItem('token', data.token)
                setToken(data.token)
                router.push('/')
                scrollTo(0, 0)
            } else {
                toast.error(data.message)
            }

        } catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

        setLoading(false)
    }

    return (
        <div className='flex justify-center items-center mt-5'>
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
                    <p className='font-medium'>Đăng Nhập</p>
                </div>

                <form onSubmit={login} className='flex flex-col gap-3.5 text-sm mt-3.5'>
                    <div>
                        <p>Email*:</p>
                        <input
                            type="text"
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='relative'>
                        <p>Mật Khẩu*:</p>
                        <input
                            type={`${isShow ? 'text' : 'password'}`}
                            className='border-b border-gray-500 focus:outline-none w-full mt-2'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {isShow ?
                            <FaRegEye onClick={() => setIsShow(false)} className='absolute top-8 right-0 cursor-pointer' />
                            : <FaRegEyeSlash onClick={() => setIsShow(true)} className='absolute top-8 right-0 cursor-pointer' />
                        }
                    </div>

                    <div className='flex gap-2'>
                        <input type="checkbox" />
                        <p className='text-gray-500 text-xs'>Lưu thông tin đăng nhập</p>
                    </div>

                    <Link className='text-[13px] text-blue-400 text-center mt-3' href='/reset-password'>Quên mật khẩu</Link>

                    {loading ?
                        <button type='submit' className='flex justify-center bg-gray-300 text-white  rounded-[13px] w-[264px] text-center py-3 '>
                            <AiOutlineReload className='animate-spin text-green-500 text-xl text-center' />
                        </button>
                        : <button type='submit' className='bg-red-500 text-white  rounded-[13px] px-24 py-3'>Đăng Nhập</button>
                    }

                    <p className='mt-3 text-center font-medium'>Đăng nhập với</p>

                    <GoogleLogin />

                </form>

                <div className='flex flex-col items-center justify-center text-gray-700 text-sm mt-3.5'>
                    <p className=''>Thành viên mới?</p>
                    <p>Trở thành thành viên của namperfume</p>
                    <p>Để nhận những ưu đãi và dịch vụ bất ngờ</p>
                    <Link href='/dang-ky' className='text-blue-500 hover:text-blue-700 underline underline-offset-2'>Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}

export default Login