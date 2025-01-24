"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CiHeart, CiSearch } from "react-icons/ci";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
    tittle: string,
    products: { image: any; name: string; oldPrice: number; newPrice: number; }[]
}

const DisplayListProduct: React.FC<IProps> = ({ tittle, products }) => {

    const setting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    speed: 1000,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    speed: 1000,
                    infinite: true,
                    autoplay: true,
                }
            }
        ]
    }


    return (
        <div>
            <p className='text-xl sm:text-2xl font-medium text-center underline underline-offset-8 mt-16 text-gray-700'>{tittle}</p>

            <Slider {...setting}>
                {products.slice(0, 5).map((product: any, index) => (
                    <div className='group relative mt-5 h-[460px]' key={index}>
                        <div className='flex flex-col items-center justify-start mt-5 mx-3.5 lg:mx-7 rounded-md cursor-pointer transition-all duration-300 group-hover:-translate-y-5'>
                            <Image src={product.image} alt={product.name} className='size-56 object-cover' />
                            <p className='w-full text-start font-semibold mt-2 text-[13px] sm:text-base text-gray-800'>{product.name}</p>
                            <div className='flex flex-col sm:flex-row sm:gap-3 text-start w-full text-[13px] sm:text-base'>
                                <p className='mt-2 font-thin text-gray-500 line-through'>{product.oldPrice} vnđ</p>
                                <p className='mt-2 font-semibold text-yellow-500'>{product.newPrice} vnđ</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row justify-end sm:justify-between px-1 lg:px-3.5 mx-3 mt-2 transition-all duration-300 group-hover:-translate-y-5'>
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
            </Slider>
        </div >
    )
}

export default DisplayListProduct
