import { useState } from "react";

type Props = {
  testimonial: any;
  about: any;
  cleaningProcess: any;
  pricing: any;
};
export function Header({
  testimonial,
  about,
  cleaningProcess,
  pricing,
}: Props) {
  const [isOpen, setIsopen] = useState(false);
  const scrollTotestimonial = () => {
    if (testimonial.current) {
      testimonial.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  const scrollAboutUs = () => {
    if (about.current) {
      about.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  const scrollCleaningProcess = () => {
    if (cleaningProcess.current) {
      cleaningProcess.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };
  const scrollToPricing = () => {
    if (pricing.current) {
      pricing.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsopen(false);
  };

  return (
    <>
      <div className='bg-black z-20 text-white fixed md:relative w-[100%] font-bold text-center flex flex-row items-center justify-between p-3'>
        <span className='md:text-center md:flex-1 p-2 text-lg'>Logo</span>
        <span className='md:hidden' onClick={() => setIsopen(true)}>
          Menu
        </span>
      </div>
      <div
        className={`${!isOpen && "hidden"} md:block w-[100%] z-20 font-medium  text-white h-fit bg-black md:bg-opacity-85 md:sticky fixed top-0`}
      >
        <div className='flex flex-row  items-center p-3 justify-between mr-2'>
          <div className='text-white flex  justify-between items-center w-[100%] h-[30vh] md:h-fit md:relative flex-col md:flex-row md:justify-between '>
            <span
              className='hover:underline w-fit '
              onClick={scrollTotestimonial}
            >
              Cleaning Services
            </span>
            <span className='hover:underline w-fit' onClick={scrollAboutUs}>
              About US
            </span>
            <span
              className='hover:underline w-fit'
              onClick={scrollCleaningProcess}
            >
              Cleaning Process
            </span>
            <span className='hover:underline w-fit' onClick={scrollToPricing}>
              Pricing
            </span>

            <button className='bg-blue-600 w-fit  h-fit p-2 rounded-md '>
              Contact us
            </button>
          </div>
          <span
            className='absolute bottom-0 right-0 p-3 md:hidden'
            onClick={() => setIsopen(false)}
          >
            Close
          </span>
        </div>
      </div>
    </>
  );
}
