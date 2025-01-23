"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "@/assets/assets";
import Image from "next/image";

const Carousel = () => {

    const setting1 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    return (
        <div>
            <Slider {...setting1}>
                {banner.map((banner: any, index: number) => {
                    return (
                        <div key={index} className='!important flex justify-center'>
                            <Image src={banner} alt="banner" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
