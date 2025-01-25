import Image from "next/image"
import { CiCreditCard1, CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { products } from "@/assets/assets"
import collect_1 from '../../public/collect-1.jpg'
import collect_2 from '../../public/collect-2.jpg'
import collect_3 from '../../public/collect-3.jpg'
import collect_4 from '../../public/collect-4.jpg'
import collect_5 from '../../public/collect-5.jpg'
import collect_6 from '../../public/collect-6.jpeg'

import goc_cam_hung_1 from '../../public/noi-that-can-ho-cao-cap-1200x800.jpg'
import goc_cam_hung_2 from '../../public/ghe-sofa-cho-phong-khach-nho-gon.jpg'
import goc_cam_hung_3 from '../../public/khong-gian-nha-xinh-thao-dien-4-3-1200x800.jpg'

import cua_hang from '../../public/cua-hang-nha-xinh-191121-1400x690.jpg'

import DisplayListProduct from "./DisplayListProduct";
import FormContact from "./FormContact";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className='mt-8 mx-3.5 sm:mx-7'>
            <DisplayListProduct tittle='SẢN PHẨM NỔI BẬT' products={products} />
            <DisplayListProduct tittle='NỘI THẤT PHÒNG NGỦ' products={products} />
            <DisplayListProduct tittle='NỘI THẤT PHÒNG KHÁCH' products={products} />
            <DisplayListProduct tittle='NỘI THẤT PHÒNG LÀM VIỆC' products={products} />
            <DisplayListProduct tittle='NỘI THẤT PHÒNG ĂN' products={products} />
            <DisplayListProduct tittle='PHỤ KIỆN TRANG TRÍ' products={products} />

            <p className='text-xl sm:text-2xl font-medium text-center underline underline-offset-8 mt-16 mb-8 text-gray-700'>BỘ SƯU TẬP</p>

            <div className='flex flex-wrap justify-center gap-3.5 md:gap-5 lg:gap-10'>
                <Image src={collect_1} alt='collection' className='bo-suu-tap' />
                <Image src={collect_2} alt='collection' className='bo-suu-tap' />
                <div className='relative'>
                    <Image src={collect_5} alt='collection' className='bo-suu-tap opacity-80' />
                    <div className='absolute top-2 lg:top-10 left-1.5 lg:left-3.5 text-xs lg:text-base text-gray-900'>
                        <p className='font-semibold text-base lg:text-3xl'>Thiết kế</p>
                        <p className='my-1 lg:my-2.5 text-stone-600 text-sm lg:text-lg font-medium'>Sang trọng và giản dị </p>
                        <p className='sm:block hidden'>Nơi phong cách tối giản gặp gỡ sự tinh tế hiện đại,
                            mỗi sản phẩm đều được chọn lọc kỹ lưỡng với mục tiêu tối ưu hóa không gian sống,
                            đồng thời phản ánh một phong cách sống đẳng cấp.
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={collect_6} alt='collection' className='bo-suu-tap opacity-80' />
                    <div className='absolute top-2 lg:top-10 left-1.5 lg:left-3.5 text-xs lg:text-base text-gray-900 '>
                        <p className='font-semibold text-base lg:text-3xl'>Chất lượng</p>
                        <p className='my-1 lg:my-2.5 text-stone-600 text-sm lg:text-lg font-medium'>Được chọn lọc kỹ lưỡng</p>
                        <p className='sm:block hidden'>Không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đáp ứng các tiêu chuẩn về sự thoải mái và tiện nghi.
                        </p>
                    </div>
                </div>
                <Image src={collect_3} alt='collection' className='bo-suu-tap' />
                <Image src={collect_4} alt='collection' className='bo-suu-tap' />
            </div>

            <p className='text-xl sm:text-2xl font-medium text-center underline underline-offset-8 mt-16 mb-8 text-gray-700'>GÓC CẢM HỨNG</p>

            <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-3'>
                <div className='flex flex-col items-center gap-5 w-[300px] xl:w-[400px]'>
                    <Image src={goc_cam_hung_1} alt='collection' className='goc-cam-hung' />
                    <p className='lg:text-lg text-base text-gray-800 font-semibold text-center w-[300px] xl:w-[400px] md:px-3.5 px-0'>Ghế sofa cho không gian nhỏ</p>
                    <p className='md:px-3.5 px-0'>
                        Ghế sofa là thực sự cần thiết cho không gian phòng khách ...
                    </p>
                </div>

                <div className='flex flex-col items-center gap-5 w-[300px] xl:w-[400px]'>
                    <Image src={goc_cam_hung_2} alt='collection' className='goc-cam-hung' />
                    <p className='lg:text-lg text-base text-gray-800 font-semibold text-center w-[300px] xl:w-[400px] md:px-3.5 px-0'>
                        Nội thất của căn hộ mang nét đẹp nghệ thuật hài hòa giữa truyền thống và hiện đại
                    </p>
                    <p className='md:px-3.5 px-0'>
                        Với nội thất được thiết kế chỉnh chu, căn hộ thuộc sở hữu ...
                    </p>
                </div>

                <div className='flex flex-col items-center gap-5 w-[300px] xl:w-[400px]'>
                    <Image src={goc_cam_hung_3} alt='collection' className='goc-cam-hung' />
                    <p className='lg:text-lg text-base text-gray-800 font-semibold text-center w-[300px] xl:w-[400px] md:px-3.5 px-0'>
                        Khám Phá Không Gian Nhà Xinh Thảo Điền
                    </p>
                    <p className='md:px-3.5 px-0'>
                        Nhà Xinh Thảo Điền mang đến một không gian sống hiện đại ...
                    </p>
                </div>
            </div>

            <FormContact />

            <div className='mt-16 relative text-white h-fit'>
                <Image alt="banner" src={cua_hang} className='w-full' />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className='absolute top-0 flex flex-col items-center justify-center h-full w-full text-white text-center'>
                    <p className='text-3xl font-bold mb-4'>Xem, chạm và cảm nhận</p>
                    <button className='bg-none border-2 border-white px-5 py-2 font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300'>Tìm cửa hàng</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
