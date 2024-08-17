import React from "react";

const CleaningServices: React.FC = () => {
  const CommercialServices = [
    {
      service: "Office Cleaning Services",
      description:
        "We provide high-quality and efficient office cleaning services in the country to keep your workspace brilliant, welcoming, and professional.",
      imge: "https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?t=st=1723731600~exp=1723735200~hmac=6fa5a9221f2ebb2cd569a247f25f149987cbf528660e0150783f5d9661cbf054&w=740",
    },

    {
      service: "Warehouse Cleaning",
      description:
        "We specialize in comprehensive warehouse cleaning, ensuring cleanliness and organization for efficient operations.",
      imge: "https://img.freepik.com/free-photo/portrait-engineers-work-hours-job-site_23-2151589569.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },

    {
      service: "Hotel Cleaning Services",
      description:
        "Our top-notch hotel cleaning services in  create a welcoming atmosphere for guests, reflecting impeccable standards.",
      imge: "https://img.freepik.com/free-photo/chambermaid-cleaning-hotel-room_23-2148095339.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },
    {
      service: "Restaurant Cleaning Services",
      description:
        "We maintain impeccable cleanliness in restaurants, ensuring a pleasant eating and cooking experience for your customers and cooks.",
      imge: "https://img.freepik.com/free-photo/waitress-cleaning-tables-with-disinfectant-wearing-protective-face-mask-cafe_637285-8934.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },
    {
      service: "Paint Cleaning/Treatment",
      description:
        "Our paint cleaning and treatment services refresh your surfaces, removing dirt and enhancing their appearance.",
      imge: "https://img.freepik.com/free-photo/man-with-safety-protection-equipment-painting_23-2148908414.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },

    {
      service: "Swimming Pool Cleaning Services",
      description:
        "We provide thorough swimming pool cleaning services, keeping your pool crystal clear, free from bacteria, and inviting.",
      imge: "https://img.freepik.com/free-photo/stair-swimming-pool-beautiful-luxury-hotel-pool-resort_1339-5452.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },
    {
      service: "Fumigation & Pest Control Services",
      description:
        "Safeguard your space from pests with our effective fumigation and pest control services in the country",
      imge: "https://img.freepik.com/free-photo/person-white-chemical-protection-suit-doing-disinfection-public-areas-stop-spreading-highly-contagious-corona-virus_342744-915.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },
    {
      service: "Furniture Enhancement & Cleaning",
      description:
        "Restore the beauty of your furniture with our specialized cleaning services in the country and enhancement techniques.",
      imge: "https://img.freepik.com/free-photo/front-view-woman-cleaning-chair_23-2148465014.jpg?size=626&ext=jpg&uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    },
  ];

  return (
    <section className='py-20 bg-blue-100'>
      <div className=' md:px-6 px-2'>
        <h2 className='text-3xl font-bold mb-12 text-center text-gray-800'>
          Commercial Cleaning Services
        </h2>
        <div className='grid grid-cols-2 gap-y-2 gap-x-4 items-center md:grid-cols-4 '>
          {CommercialServices.map((service) => (
            <div
              key={service.description}
              className=' flex flex-col items-center justify-between relative w-36 md:w-52  bg-white text-white mt-2 rounded-md'
            >
              <img
                src={service.imge}
                alt={service.service}
                className=' rounded-t-md'
              />
              <div className='p-3 flex flex-col items-center '>
                <div className='flex-1'>
                  <div className='font-bold  text-gray-800 w-fit'>
                    {service.service}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
