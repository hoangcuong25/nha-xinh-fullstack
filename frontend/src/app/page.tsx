import About from "@/components/About"
import Carousel from "@/components/Carousel"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <div className='my-5 '>
      <Carousel />
      <Hero />
      <About />
    </div>
  )
}

export default page
