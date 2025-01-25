import Carousel from "@/components/Carousel"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div className='my-5 '>
      <Header />
      <Navbar />
      <Carousel />
      <Hero />
    </div>
  )
}

export default page
