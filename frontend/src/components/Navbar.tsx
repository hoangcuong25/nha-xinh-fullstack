'use client'

import Image from "next/image";
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { phong_khach, phong_an, phong_ngu, phong_lam_viec, hang_trang_tri, danh_muc } from "@/assets/assets";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Navbar = () => {

    const router = useRouter()

    return (
        <div className='flex justify-between items-center mx-3.5 sm:mx-7 mt-5 border-b border-gray-200 pb-3.5'>
            <div className='flex gap-5 w-full'>
                <div className='flex items-center justify-between w-full md:w-fit gap-3 '>
                    <Sheet>
                        <SheetTrigger>
                            <IoMenu
                                className={`text-4xl text-gray-700 block md:hidden cursor-pointer`}
                            />
                        </SheetTrigger>
                        <SheetContent side={"left"} className="w-[320px] overflow-y-scroll">
                            <SheetTitle></SheetTitle>
                            <SheetHeader>
                                <div className='flex flex-col gap-1.5 p-2 pt-5 text-gray-600 text-left text-nowrap'>
                                    <Link href={'/'} className='border-b border-gray-200 pb-3 hover:underline underline-offset-4'>Sản phẩm</Link>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className='text-base underline-offset-4' >Sofa và Armchair</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Sofa
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Sofa góc
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Armchair
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Ghế thư giãn
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Ghế dài và đôn
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-2">
                                            <AccordionTrigger className='text-base underline-offset-4'>Bàn</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Bàn ăn
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Bàn nước
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Bàn bên
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Bàn làm việc
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 '>
                                                Bàn trang điểm
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-3">
                                            <AccordionTrigger className='text-base underline-offset-4'>Ghế</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Ghế ăn
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Ghế bar
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Ghế làm việc
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-4">
                                            <AccordionTrigger className='text-base underline-offset-4'>Giường ngủ</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Giường
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Bàn đầu giường
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Nệm
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-5">
                                            <AccordionTrigger className='text-base underline-offset-4'>Tủ và kệ</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Tủ tivi
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Tủ giầy
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Tủ áo
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-6">
                                            <AccordionTrigger className='text-base underline-offset-4'>Bếp</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Tủ bếp
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Phụ kiến bếp
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Đảo bếp
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-6">
                                            <AccordionTrigger className='text-base underline-offset-4'>Hàng trang trí</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Đèn hàng trang trí
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Thảm
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Đồng hồ
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-7">
                                            <AccordionTrigger className='text-base underline-offset-4'>Phòng</AccordionTrigger>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2 pt-0'>
                                                Phòng khách
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Phòng ăn
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Phòng ngủ
                                            </AccordionContent>
                                            <AccordionContent className='hover:text-gray-900 cursor-pointer p-2'>
                                                Phòng làm việc
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <Link href={'/'} className='border-b border-gray-200 py-3 hover:underline underline-offset-4'>Bộ sưu tập</Link>
                                    <Link href={'/'} className='border-b border-gray-200 py-3 hover:underline underline-offset-4'>Thiết kế nội thất</Link>
                                    <Link href={'/'} className='border-b border-gray-200 py-3 hover:underline underline-offset-4'>Cửa hàng 360 độ</Link>
                                    <Link href={'/'} className='border-b border-gray-200 py-3 hover:underline underline-offset-4'>Góc cảm hứng</Link>

                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Image
                        src='/logo-nhaxinh-25nam-final.png'
                        className='min-w-[150px]'
                        width='150'
                        height='100'
                        alt="logo"
                        onClick={() => router.push('/')}
                    />
                </div>

                <div className='hidden md:flex flex-wrap items-center text-sm text-nowrap relative'>
                    <div className='group '>
                        <div className='flex items-center gap-2 p-2.5 group-hover:text-yellow-400 group-hover:bg-gray-50 rounded-md'>
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

                    <div className='group relative'>
                        <div className='flex items-center gap-2 p-2.5 group-hover:text-yellow-400 group-ghover:bg-gray-50 rounded-md'>
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
                        className='text-sm p-2.5 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        BỘ SƯU TẬP
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-2.5 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        THIẾT KẾ NỘI THẤT
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-2.5 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        CỬA HÀNG 360 ĐỘ
                    </Link>
                    <Link
                        href={'/bo-suu-tap'}
                        className='text-sm p-2.5 hover:text-yellow-400 hover:bg-gray-50 rounded-md'
                    >
                        GÓC CẢM HỨNG
                    </Link>
                </div>
            </div >
            <div className='relative items-center hidden xl:flex'>
                <input type="text" placeholder="Tìm sản phẩm" className='w-60 h-11 pl-3 pr-9 border border-gray-300 bg-gray-100 rounded-3xl focus:outline-none' />
                <CiSearch className='text-2xl absolute top-2.5 right-2' />
            </div>
        </div >
    )
}

export default Navbar
