import { SiInstagram } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Footer = () => {
    return (
        <div className='flex flex-col bg-[#333333] text-xs text-white py-3.5 px-3.5 md:px-7'>
            <div className='flex flex-col md:flex-row justify-between gap-3'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Nhà Xinh</p>
                    <p className='hover:underline'>Giới thiệu</p>
                    <p className='hover:underline'>tuyển dụng</p>
                    <p className='hover:underline'>Liên hệ</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Hỗ trợ</p>
                    <p className='hover:underline'>Các câu hỏi thường gặp</p>
                    <p className='hover:underline'>Cách thức mua hàng</p>
                    <p className='hover:underline'>Hướng dẫn đặt hàng</p>
                    <p className='hover:underline'>Phương thức vận chuyển</p>
                    <p className='hover:underline'>Phương thức thanh toán</p>
                    <p className='hover:underline'>Theo dõi đơn hàng</p>
                    <p className='hover:underline'>Chính sách giá cả</p>
                    <p className='hover:underline'>Chính sách đổi trả</p>
                    <p className='hover:underline'>Chính sách bảo mật</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Cảm hứng</p>
                    <p className='hover:underline'>Sản phẩm</p>
                    <p className='hover:underline'>Ý tưởng và cảm hứng</p>
                    <p className='hover:underline'>Bộ sưu tập</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <p className='font-bold mb-3.5 text-base'>Theo dõi chúng tôi</p>
                    <div className='flex items-center gap-1.5'>
                        <SiInstagram />
                        <p className='hover:underline'>Instagram</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <FiFacebook />
                        <p className='hover:underline'>Facebook</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <AiOutlineYoutube />
                        <p className='hover:underline'>Youtube</p>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <IoLogoTiktok />
                        <p className='hover:underline'>Tiktok</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-xl font-bold'>Nhà xinh luôn là <br /> bạn đồng hành</p>
                    <p className='font-bold'>Đăng ký thông báo và nhận tin</p>
                    <div className='flex gap-2'>
                        <input
                            type="text"
                            className='border bg-[#333333] px-1.5 py-0.5 rounded-sm focus:outline-none'
                            placeholder='Nhập email của bạn'
                        />
                        <button className='bg-white text-gray-700 px-2 py-0.5 rounded-sm'>Gửi</button>
                    </div>
                    <div className='flex gap-1 items-center text-[10px]'>
                        <p>GỌI ĐẶT MUA: </p>
                        <FaPhoneAlt />
                        <p className='hover:underline'>0906904114</p>
                    </div>
                </div>
            </div>

            <hr className='w-full my-3.5 bg-gray-300 self-center' />

            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col text-[10px] gap-0.5'>
                    <p>Copyright 2025-2025 © cuonghoang. All Rights Reserved.</p>
                    <p>Cty TNHH cuonghoang</p>
                    <p>GPKD: 0316901314. Ngày cấp: 09/06/2021. Nơi cấp: Sở KH&DT TP.HCM</p>
                    <p>Địa chỉ: Tầng 7, 19A Cộng Hòa, Tòa Nhà Scetpa, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh</p>
                </div>

                <div>
                    <TiTick className='text-6xl' />
                </div>
            </div>
        </div>
    )
}

export default Footer