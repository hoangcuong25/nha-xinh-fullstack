/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { useContext, useState } from 'react'
import empty from '@/assets/empty.png'
import { AppContext } from '@/context/AppContext'
import { FaRegWindowClose, FaShoppingBasket } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineMenu, AiOutlineReload } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean
}

const Cart: React.FC<Props> = ({ show, setShow }) => {

    const {
        cart,
        formatMoney,
        backendUrl,
        token,
        loadUserProfileData,
        totalPrice,
    } = useContext(AppContext)

    const [loading, setLoading] = useState<boolean>(false)
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false)

    const removeFromCart = async (productId: string): Promise<void> => {
        setLoadingDelete(true)

        try {
            const { data } = await axios.post(backendUrl + '/api/user/remove-from-cart', { productId }, { headers: { token } })

            if (data.success) {
                toast.success('Xóa khỏi giỏ hàng thành công')
                loadUserProfileData()
            }
        }
        catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

        setLoadingDelete(false)
    }

    const increaseQuantity = async (productId: string): Promise<void> => {
        setLoading(true)

        try {
            const { data } = await axios.post(backendUrl + '/api/user/increase-quantity', { productId }, { headers: { token } })

            if (data.success) {
                loadUserProfileData()
            }
        }
        catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

        setLoading(false)
    }

    const decreaseQuantity = async (productId: string): Promise<void> => {
        setLoading(true)

        try {
            const { data } = await axios.post(backendUrl + '/api/user/decrease-quantity', { productId }, { headers: { token } })

            if (data.success) {
                loadUserProfileData()
            }
        }
        catch (error: any) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }

        setLoading(false)
    }

    return (
        <div className='flex flex-col w-full bg-gray-100 shadow-md px-3 py-3'>
            <div
                className='flex md:hidden items-center gap-3 mb-3 cursor-pointer'
                onClick={() => setShow(!show)}
            >
                {show ?
                    <FaRegWindowClose className='text-gray-700' />
                    : <AiOutlineMenu className='text-gray-700' />
                }
                <p>Menu</p>
            </div>
            {cart.length != 0 ?
                <div className=' mt-3 flex flex-col gap-1.5'>
                    <div className='flex gap-3.5 items-center'>
                        <FaShoppingBasket className='text-3xl text-gray-600' />
                        <p className='text-xl font-semibold'>Giỏ hàng của bạn</p>
                    </div>
                    <div className='mt-3.5 flex lg:grid lg:grid-cols-[50%_13%_17%_13%_7%] lg:justify-center bg-gray-200 shadow-md px-3 py-2'>
                        <p className='text-lg font-semibold'>Tất cả ({cart.length} sản phẩm)</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Giá</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Số lượng</p>
                        <p className='text-lg font-semibold text-center hidden lg:block'>Thành tiền</p>
                    </div>
                    {cart.map((i: any, index: number) => (
                        <div key={index} className='mt-3.5 flex lg:grid items-center text-center lg:grid-cols-[50%_13%_17%_13%_7%] px-3 py-2'>
                            <div className='flex gap-5 items-center'>
                                <img src={i.product.image} className='w-28  ' alt="" />
                                <p className='lg:block hidden'>{i.product.name}</p>
                                <div className='lg:hidden flex flex-col gap-2 text-[13px]'>
                                    <p className='text-start'>{i.product.name}</p>
                                    <div className='flex justify-start items-center gap-3.5'>
                                        <p
                                            className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'
                                            onClick={() => decreaseQuantity(i.product._id)}
                                        >
                                            -
                                        </p>
                                        <p className='px-5 py-2 text-center font-semibold bg-gray-100 rounded-md  shadow-md'>
                                            {loading ?
                                                <AiOutlineReload className='animate-spin text-green-500 text-xl text-center' />
                                                : i.quantity
                                            }
                                        </p>
                                        <p
                                            className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'
                                            onClick={() => increaseQuantity(i.product._id)}
                                        >
                                            +
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className=''>{formatMoney(i.product.newPrice * i.quantity)} vnđ</p>

                                        {loadingDelete ?
                                            <AiOutlineReload className='animate-spin text-green-500 text-xl text-center' />
                                            : <MdDeleteForever
                                                className='text-gray-700 text-2xl cursor-pointer'
                                                onClick={() => removeFromCart(i.product._id)}
                                            />
                                        }
                                    </div>
                                </div>
                            </div>
                            <p className='lg:block hidden'>{formatMoney(i.product.newPrice)} vnđ</p>
                            <div className='lg:flex hidden justify-center items-center gap-3.5'>
                                <p
                                    className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'
                                    onClick={() => decreaseQuantity(i.product._id)}
                                >
                                    -
                                </p>
                                <p className='px-5 py-2 text-center font-semibold bg-gray-100 rounded-md  shadow-md'>
                                    {loading ?
                                        <AiOutlineReload className='animate-spin text-green-500 text-xl text-center' />
                                        : i.quantity
                                    }
                                </p>
                                <p
                                    className='text-xl cursor-pointer py-0.5 w-7 rounded-full bg-gray-100 shadow-md'
                                    onClick={() => increaseQuantity(i.product._id)}
                                >
                                    +
                                </p>
                            </div>
                            <p className='lg:block hidden'>{formatMoney(i.product.newPrice * i.quantity)} vnđ</p>

                            {loadingDelete ?
                                <AiOutlineReload className='animate-spin text-green-500 text-xl text-center lg:block hidden' />
                                : <MdDeleteForever
                                    className='text-gray-700 text-2xl cursor-pointer lg:block hidden'
                                    onClick={() => removeFromCart(i.product._id)}
                                />
                            }
                        </div>
                    ))}

                    <div className='mt-3.5 flex items-center gap-5 place-self-start lg:place-self-end'>
                        <p className='text-lg font-semibold'>Tổng: {formatMoney(totalPrice())} vnđ</p>
                        <Link href='/thanh-toan' className='bg-red-500 text-white w-52 text-center py-3 rounded-md mr-10 hover:bg-red-600 cursor-pointer'>
                            Thanh toán ngay
                        </Link>
                    </div>
                </div>
                : <div className=' mt-3 flex md:flex-row flex-col gap-3.5'>
                    <Image src={empty} className='size-72' alt="" />

                    <div className='flex flex-col'>
                        <p className='text-2xl font-bold mb-3.5'>Giỏ hàng của bạn đang rỗng!</p>
                        <p>Thật tiếc! Chúng tôi biết bạn đang muốn mua món đồ gì đó.</p>
                        <p>Nhưng trước tiên bạn cần thêm món đồ đó vào giỏ hàng của mình.</p>
                        <p>Nhấn <Link onClick={() => scrollTo(0, 0)} href='/' className='font-bold hover:underline'>vào đây</Link> để tiếp tục mua sắm.</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart