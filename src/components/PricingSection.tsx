import React from "react";

const PricingSection: React.FC = () => {
  const plans = [
    { name: "Basic", price: "$9/month", features: ["Feature A", "Feature B"] },
    {
      name: "Pro",
      price: "$29/month",
      features: ["Feature A", "Feature B", "Feature C"],
    },
    {
      name: "Enterprise",
      price: "$99/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
    },
  ];

  return (
    <section className='bg-white py-4 mt-4  '>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold mb-12'>
          Simple pricing,no commitment
        </h2>
        <div className='flex flex-col-reverse md:flex-row '>
          {plans.map((plan, index) => (
            <div key={index} className='w-full  px-6 mb-12 '>
              <div className='border border-gray-500 hover:border-blue-500 p-8 rounded-lg  relative'>
                <h3 className='text-2xl font-bold my-4'>{plan.name}</h3>
                {plan.name == "Pro" && (
                  <div className='p-2 my-2 absolute  w-[100%] top-0 right-0 bg-gray-100 text-sm font-bold text-blue-700'>
                    Recommended
                  </div>
                )}
                <div className='flex flex-row w-[100%] items-center space-x-3 md:justify-between'>
                  <p className='text-gray-600 text-md font-bold'>
                    {plan.price}
                  </p>
                  <button className='bg-blue-800 font-bold rounded-md text-xs w-fit h-fit text-white p-2 hover:bg-blue-700'>
                    Choose
                  </button>
                </div>

                <ul className='flex flex-col '>
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className='text-gray-600 py-2 text-left font-semibold text-sm'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
