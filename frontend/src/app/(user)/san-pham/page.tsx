import Image from 'next/image'
import React from 'react'
import banner from '../../../assets/slideshow_5.jpg'

const page = () => {
    return (
        <div>
            <Image alt='banner' src={banner} />
        </div>
    )
}

export default page
