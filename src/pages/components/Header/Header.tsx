import Image from 'next/image';
import Logo from '../../../assets/logo/C.png';
import { FiFacebook } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return <section>
    <div>
      <div className='flex justify-between items-center container mx-auto py-4'>
          <p className='text-5xl font-sans text-[#F53760] font- font-semibold '>Creatix</p>
          <div className='flex justify-around items-center gap-4'>
            <Link className='text-xl hover:text-[#F53760]'  href="/">Home</Link>
            <Link className='text-xl hover:text-[#F53760]' href="/services">Services</Link>
            <Link className='text-xl hover:text-[#F53760]' href="/login">login</Link>
            <Link className='text-xl hover:text-[#F53760]' href="/signup">signup</Link>
          </div>
          <div className='flex justify-around items-center gap-2'>
              <FiFacebook className='text-xl text-[#F53760] hover:text-black'/>
              <GrTwitter  className='text-xl text-[#F53760] hover:text-black'/>
              <BsLinkedin  className='text-xl text-[#F53760] hover:text-black'/>
          </div>
          <button className='h-14 bg-gradient-to-r from-[#F6395F] to-[#F97E35] px-6 text-xl text-white font-bold rounded btn'>Free Quote</button>
      </div>
    </div>
  </section>;
}
