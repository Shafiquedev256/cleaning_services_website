import qualityIcone from "../assets/icones/quality-diamond-svgrepo-com.svg";
import teamIcone from "../assets/icones/team-svgrepo-com (1).svg";
import assuredIcone from "../assets/icones/verified-svgrepo-com.svg";
import techIcone from "../assets/icones/home-svgrepo-com.svg";

const WhyChooseUs = () => {
  return (
    <>
      <div className='my-4 pb-4 flex flex-col items-center space-y-3'>
        <h1 className='font-bold text-center text-gray-800 text-3xl p-2 my-4'>
          WHY CHOOSE US
        </h1>
        <p className=' text-center font-semibold w-[90%] md:w-[50%] mb-4'>
          Max clean operates in USA and provides a variety of cleaning services.
          Choose us because of our reputation for excellence.
        </p>
        <div className=' md:flex md:flex-row md:space-x-4 md:items-center md:justify-center md:py-3'>
          <div className='flex flex-col justify-evenly items-center md:w-3/6'>
            <div className=' py-3 '>
              <div className='flex flex-col items-center'>
                <img src={qualityIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[60%]'>
                  SPARKLING CLEAN
                </div>
                <div className='text-sm text-gray-600 font-semibold  w-[70%] text-center'>
                  We keep your home sparkling clean and germ free. Our
                  disinfecting process kills 99% of common bacteria and viruses.
                </div>
              </div>
            </div>
            <div className='py-4 '>
              <div className='flex flex-col items-center'>
                <img src={assuredIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[60%]'>
                  INSURED AND BONDED
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[60%] text-center'>
                  Our cleaners are insured and bonded so no need to worry about
                  your apartment, office or garden
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-3/7'>
            <img
              src='/src/assets/mid-shot-baby-searching-drawer.jpg'
              className='w-60 h-60 rounded-full border-2 border-dotted border-blue-700'
            />
          </div>

          <div className='flex flex-col justify-evenly items-center md:w-3/6'>
            <div className=' py-4'>
              <div className='flex flex-col items-center'>
                <img src={techIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[70%]'>
                  LEADING TECHNOLOGIES
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[70%] text-center'>
                  We use safe hospital-grade disinfectants, HEPA filtrations and
                  microfiber cleaning cloths to reduce cross contamination.
                </div>
              </div>
            </div>
            <div className='py-4 '>
              <div className='flex flex-col items-center'>
                <img src={teamIcone} alt='' />
                <div className=' text-2xl text-gray-800 text-center w-[70%]'>
                  Expert Team
                </div>
                <div className='text-sm text-gray-600 font-semibold w-[70%] text-center'>
                  Our reliable and stable crews understand your specific house
                  and office clearning service needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
