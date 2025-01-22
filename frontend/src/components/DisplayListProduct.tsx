'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CiHeart, CiSearch } from "react-icons/ci";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface IProps {
    tittle: string,
    products: {}
}

const DisplayListProduct: React.FC<IProps> = ({ tittle, products }) => {
    return (
        <div>
            <p className='text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>{tittle}</p>

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
        </div>
    )
}

export default DisplayListProduct
