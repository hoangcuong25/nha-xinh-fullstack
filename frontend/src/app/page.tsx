import { products } from "@/assets/assets"
import Carousel from "@/components/Carousel"
import Image from "next/image"

const page = () => {
  return (
    <div className='mt-5 '>
      <Carousel />

      <div className='mt-8 mx-3.5 sm:mx-7'>
        <div>
          <p className='text-2xl font-medium text-center underline underline-offset-8'>SẢN PHẨM NỔI BẬT</p>

          {products.map((product, index) => (
            <div key={index} className='flex flex-col items-center mt-5'>
              <Image src={product.image} alt={product.name} className='w-48 h-48 object-cover' />
              <p className='text-center mt-2 text-lg'>{product.oldPrice}</p>
              <p className='text-center mt-2 text-lg '>{product.newPrice}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default page
