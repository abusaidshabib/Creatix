import Image from "next/image";
import brand from  "../../assets/about/about.jpg";
import icon1 from "../../assets/about/icon1.jpg";
import icon2 from "../../assets/about/icon2.jpg";
import dp from "../../assets/about/dp.jpg";

 
function About() {
    return (
 


      <div className="relative flex flex-col px-4 py-16 gap-20 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md: sm:max-w-xl md:max-w-full bg-slate-50">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">

          <Image
          
            src={brand}
            className="object-left w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className=" flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-secondary-300 uppercase rounded-full bg-teal-accent-400 underline">
                 About Creatix
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Building Brands with
                <br className="hidden md:block" />
               Purpose and Passion{' '}
                {/* <span className="inline-block text-deep-purple-accent-400">
                  online
                </span> */}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row">
                
                <div>
                  <Image  src={icon1} alt="" className='h-12 w-12' />
                  <h2 className='font-bold text-lg text-black '>Dedicated Team</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, blanditiis. </p>
                </div>
                <div>
                <Image src={icon2} alt="" className='h-12 w-12' />
                  <h2 className='font-bold text-lg text-black '>Brand Solution</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, blanditiis. </p>
                </div>
                
              </div>
              
              <div className="flex items-center mt-4 space-x-4">
								<Image src={dp} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-bold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CEO of Creatix</p>
								</div>
							</div>

            </form>
          </div>
        </div>
      </div>
    );
  };


export default About;