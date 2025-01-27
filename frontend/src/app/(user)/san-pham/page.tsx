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

const page = () => {
    return (
        <div>
            <Image alt='banner' src={banner} />

            <div className='mt-5 mx-3.5 sm:mx-7'>
                <div className='flex items-center justify-between'>
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
            </div>
        </div>
    )
}

export default page
