import React from 'react'
import Image from 'next/image'
import person from '../../../assets/testimonial/p1.jpg'
import person1 from '../../../assets/testimonial/p3.jpg'
import colon from '../../../assets/testimonial/quote.svg'
function Testimonial() {
  return (
    <div >
    <div className='text-center mt-8'>
      <h2 className='text-xl font-bold text-black'>Best Testimonial</h2>
      <h2 className='lg:text-4xl text-xl md:text-2xl  font-bold text-black'>Customer Valuable feedback About Company</h2>
    </div>
    <div className='relative md:p-32  py-32 px-5' >
    <div className="absolute inset-0  bg-white opacity-80"></div>
    <div className='max-w-screen-xl mx-auto'>
    <div className='grid lg:grid-cols-2 gap-12'>
    <div className='border-8 m-auto md:p-20 p-12 relative '>
        <Image  src={colon} alt=" " className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
    
       <p className='text-start font-serif leading-8 uppercase'>
       I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
       </p>
       <div className='flex gap-5 mt-5'>
        <Image src={person} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
        <div className='self-center text-start'>
            <h2 className='text-[#c5a47e]'>MICHLE JOHN</h2>
            <p className='font-semibold'>Envato Customer</p>
        </div>
       </div>
    </div>
    {/* 2// */}
    <div className='border-8 m-auto md:p-20 p-12 relative lg:mt-0 mt-16'>
        <Image src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
       <p className='text-start font-serif leading-8 uppercase'>
       I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
       </p>
       <div className='flex gap-5 mt-5'>
        <Image src={person1} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
        <div className='self-center text-start'>
            <h2 className='text-[#c5a47e]'>ALEX PHI</h2>
            <p className='font-semibold'>Envato Customer</p>
        </div>
       </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default Testimonial
