import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className='bg-blue-500 py-20 flex flex-col md:flex-row-reverse md:items-center text-white font-semibold'>
      <div className='md:w-4/5 p-3'>
        <h1 className='text-4xl font-bold mb-4'>Cleaning Services in USA</h1>
        <p className='text-lg mb-8'>
          Hire [company Name] , the best cleaning company offering exceptional
          cleaning services in USA to people,businesses, orgsnizations.
        </p>
        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl'>
            Our Cleaning services deliver high-performing results:
          </h2>
          <span className='border-0 border-b-2 w-fit   m-1 border-b-white'>
            Positive First Impressions
          </span>
          <span className='border-0 border-b-2 w-fit   m-1 border-b-white'>
            Increased Productivity
          </span>
          <span className='border-0 border-b-2 w-fit   m-1 border-b-white'>
            Extended Lifespan of Assets
          </span>
        </div>

        <div className='flex flex-col justify-between p-2'>
          <button className='bg-gray-200 w-fit my-2 h-fit p-2 rounded-md text-black'>
            REQUEST A FREE QUOTE
          </button>
          <button className='bg-red-600 w-fit my-2 h-fit p-2 rounded-md '>
            CALL US: +(123) 4567890
          </button>
        </div>

        <div>
          <h2 className='font-bold text-2xl'>Our Cleaning Services Include:</h2>
          <div>
            In busy cities like [any city] and any [city],where life moves at a
            fast pace, individuals and businesses seek efficient and reliable
            solutions to keep their homes and establishments brilliant.
          </div>
        </div>
      </div>
      <img
        src='/src/assets/woman-spraying-windows-posing-with-yellow-rubber-hands.png'
        alt='Image by cookie_studio on FreepikImage by cookie_studio on Freepik'
        className='hidden md:w-3/5 md:block'
      />
    </section>
  );
};

export default HeroSection;
