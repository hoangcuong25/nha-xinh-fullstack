import Image from 'next/image'
import React from 'react'
import banner from '@/assets/slideshow_5.jpg'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import DisplayListProduct from '@/components/DisplayListProduct'
import { products } from '@/assets/assets'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { CiHeart } from 'react-icons/ci'

const page = () => {
    return (
        <div>
            <Image alt='banner' src={banner} />

            <div className='flex flex-col mt-5 mx-3.5 sm:mx-7'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-3.5'>
                    <div className='flex flex-col gap-1'>
                        <p>Giá</p>
                        <Select>
                            <SelectTrigger className="w-60">
                                <SelectValue placeholder="Lọc sản phẩm theo giá" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Theo giá: Thấp đến cao">
                                    Theo giá: Thấp đến cao
                                </SelectItem>
                                <SelectItem value="Theo giá: cao đến thấp">
                                    Theo giá: cao đến thấp
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p>Chất liệu</p>
                        <Select>
                            <SelectTrigger className="w-60">
                                <SelectValue placeholder="Tất cả" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Ceramic">
                                    Ceramic
                                </SelectItem>
                                <SelectItem value="Gỗ">
                                    Gỗ
                                </SelectItem>
                                <SelectItem value="Kim loại">
                                    Kim loại
                                </SelectItem>
                                <SelectItem value="Đá">
                                    Đá
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button>ÁP DỤNG</Button>
                </div>

                <div className='mt-8 flex flex-wrap gap-5 justify-center'>
                    {products?.map((product: any, index: number) => (
                        <div className='group relative mt-5' key={index}>
                            <div className='flex flex-col items-center justify-between h-[460px] mt-5 mx-3.5 lg:mx-7 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                                <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                                <p className='w-full text-start font-semibold mt-2 text-[13px] sm:text-base text-gray-800'>{product.name}</p>
                                <div className='flex flex-col sm:flex-row sm:gap-3 text-start w-full text-[13px] sm:text-base'>
                                    <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                    <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                                </div>

                                <div className='flex flex-col sm:flex-row justify-end sm:justify-between w-full mt-2 sm:gap-3 transition-all duration-300 group-hover:-translate-y-5'>
                                    <Button
                                        className='mt-3 bg-yellow-500 rounded-[8px] text-[13px] lg:text-base '
                                    >
                                        Thêm vào giỏ
                                    </Button>

                                    <Button
                                        className='mt-3 bg-white hover:text-white text-black border border-black rounded-[8px] text-[13px] lg:text-base'
                                    >
                                        Xem nhanh
                                    </Button>
                                </div>
                            </div>

                            <div className='w-full flex justify-between px-3.5 lg:px-7 absolute top-7 right-0 cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                                <div className='px-3 py-1.5 bg-yellow-400 rounded-[12px] text-white text-xs'>
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
            </div>
        </div>
    )
}

export default page
