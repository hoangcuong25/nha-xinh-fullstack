import { FaPhoneVolume } from "react-icons/fa6"
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <div className=' mt-3 text-sm  border-b border-gray-200 pb-3.5'>
            <div className='mx-3.5 sm:mx-7 flex justify-between'>
                <div className='flex gap-5 lg:gap-10 items-center'>
                    <div className='hidden md:block'>
                        <p className=''><span className='text-gray-400'>VN </span> EN</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-2 items-center'>
                            <FaPhoneVolume />
                            <p className=''>0906 904 114</p>
                        </div>
                        <p className='text-gray-400 hidden md:block'>Giới thiệu</p>
                        <p className='text-gray-400 hidden md:block'>Khuyến mãi</p>
                        <p className='text-red-500 hidden md:block'>Giảm giá đặc biệt</p>
                    </div>
                </div>

                <div className='flex gap-3.5 text-2xl text-gray-500'>
                    <div className='p-1 bg-gray-100 rounded-full block xl:hidden'>
                        <CiSearch />
                    </div>
                    <div className='p-1 bg-gray-100 rounded-full hidden md:block'>
                        <CiLocationOn />
                    </div>
                    <div className='p-1 bg-gray-100 rounded-full hidden md:block'>
                        <CiHeart />
                    </div>

                    <div className='p-1 bg-gray-100 rounded-full hidden md:block'>
                        <CiShoppingCart />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-sm'>Đăng nhập</p>
                        <FaUser className='text-base' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
