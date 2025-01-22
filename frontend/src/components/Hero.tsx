'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { products } from "@/assets/assets"
import collect_1 from '../../public/collect-1.jpg'
import collect_2 from '../../public/collect-2.jpg'
import collect_3 from '../../public/collect-3.jpg'
import collect_4 from '../../public/collect-4.jpg'
import collect_5 from '../../public/collect-5.jpg'
import collect_6 from '../../public/collect-6.jpeg'

const Hero = () => {
    return (
        <div className='mt-8 mx-3.5 sm:mx-7'>
            <p className='text-2xl font-medium text-center underline underline-offset-8 text-gray-700'>SẢN PHẨM NỔI BẬT</p>

            <div className='flex flex-wrap justify-between mt-5'>
                {products.map((product, index) => (
                    <div className='group relative' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2'>{product.name}</p>
                            <div className='flex gap-3 text-start w-full'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between transition-all duration-300 group-hover:-translate-y-5'>
                            <Button
                                className='mt-3 bg-yellow-500 rounded-[8px] '
                            >
                                Thêm vào giỏ
                            </Button>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiSearch className='text-xl' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Xem nhanh</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='w-full flex justify-between px-2 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <div className='px-2.5 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
                                -10%
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiHeart className='text-2xl text-gray-700' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Thêm vào yêu thích</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>NỘI THẤT PHÒNG NGỦ</p>

            <div className='flex flex-wrap justify-between mt-5'>
                {products.map((product, index) => (
                    <div className='group relative' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2'>{product.name}</p>
                            <div className='flex gap-3 text-start w-full'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between transition-all duration-300 group-hover:-translate-y-5'>
                            <Button
                                className='mt-3 bg-yellow-500 rounded-[8px] '
                            >
                                Thêm vào giỏ
                            </Button>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiSearch className='text-xl' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Xem nhanh</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='w-full flex justify-between px-2 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <div className='px-2.5 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
                                -10%
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiHeart className='text-2xl text-gray-700' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Thêm vào yêu thích</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>NỘI THẤT PHÒNG KHÁCH</p>

            <div className='flex flex-wrap justify-between mt-5'>
                {products.map((product, index) => (
                    <div className='group relative' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2'>{product.name}</p>
                            <div className='flex gap-3 text-start w-full'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between transition-all duration-300 group-hover:-translate-y-5'>
                            <Button
                                className='mt-3 bg-yellow-500 rounded-[8px] '
                            >
                                Thêm vào giỏ
                            </Button>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiSearch className='text-xl' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Xem nhanh</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='w-full flex justify-between px-2 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <div className='px-2.5 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
                                -10%
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiHeart className='text-2xl text-gray-700' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Thêm vào yêu thích</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>NỘI THẤT PHÒNG LÀM VIỆC</p>

            <div className='flex flex-wrap justify-between mt-5'>
                {products.map((product, index) => (
                    <div className='group relative' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2'>{product.name}</p>
                            <div className='flex gap-3 text-start w-full'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between transition-all duration-300 group-hover:-translate-y-5'>
                            <Button
                                className='mt-3 bg-yellow-500 rounded-[8px] '
                            >
                                Thêm vào giỏ
                            </Button>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiSearch className='text-xl' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Xem nhanh</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='w-full flex justify-between px-2 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <div className='px-2.5 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
                                -10%
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiHeart className='text-2xl text-gray-700' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Thêm vào yêu thích</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>PHỤ KIỆN TRANG TRÍ</p>

            <div className='flex flex-wrap justify-between mt-5'>
                {products.map((product, index) => (
                    <div className='group relative' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2'>{product.name}</p>
                            <div className='flex gap-3 text-start w-full'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between transition-all duration-300 group-hover:-translate-y-5'>
                            <Button
                                className='mt-3 bg-yellow-500 rounded-[8px] '
                            >
                                Thêm vào giỏ
                            </Button>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiSearch className='text-xl' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Xem nhanh</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <div className='w-full flex justify-between px-2 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <div className='px-2.5 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
                                -10%
                            </div>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CiHeart className='text-2xl text-gray-700' />
                                    </TooltipTrigger>
                                    <TooltipContent className='px-3.5 py-2 rounded-[7px]'>
                                        <p>Thêm vào yêu thích</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                ))}
            </div>

            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 mb-8 text-gray-700'>BỘ SƯU TẬP</p>

            <div className='flex flex-wrap justify-between gap-10'>
                <Image src={collect_1} alt='collection' className='size-[420px] rounded-[10px] object-cover' />
                <Image src={collect_2} alt='collection' className='size-[420px] rounded-[10px] object-cover' />
                <div className='relative'>
                    <Image src={collect_5} alt='collection' className='size-[420px] rounded-[10px] opacity-80 object-cover' />
                    <div className='absolute top-10 left-3.5 text-gray-900'>
                        <p className='font-semibold text-3xl'>Thiết kế</p>
                        <p className='my-2.5 text-stone-600 text-lg font-medium'>Sang trọng và giản dị </p>
                        <p>Nơi phong cách tối giản gặp gỡ sự tinh tế hiện đại,
                            mỗi sản phẩm đều được chọn lọc kỹ lưỡng với mục tiêu tối ưu hóa không gian sống,
                            đồng thời phản ánh một phong cách sống đẳng cấp.
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={collect_6} alt='collection' className='size-[420px] rounded-[10px] opacity-80 object-cover' />
                    <div className='absolute top-10 left-3.5 text-gray-900 '>
                        <p className='font-semibold text-3xl'>Chất lượng</p>
                        <p className='my-2.5 text-stone-600 text-lg font-medium'>Được chọn lọc kỹ lưỡng</p>
                        <p>Không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đáp ứng các tiêu chuẩn về sự thoải mái và tiện nghi.
                        </p>
                    </div>
                </div>
                <Image src={collect_3} alt='collection' className='size-[420px] rounded-[10px] object-cover' />
                <Image src={collect_4} alt='collection' className='size-[420px] rounded-[10px] object-cover' />
            </div>
        </div>
    )
}

export default Hero
