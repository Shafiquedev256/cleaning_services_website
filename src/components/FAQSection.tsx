// src/components/FAQ.tsx
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does your cleaning company offer?",
    answer:
      "We provide a comprehensive range of cleaning services, including residential, commercial, and specialized cleaning services such as carpet and upholstery cleaning.",
  },
  {
    question: "Are the cleaning products you use safe and eco-friendly?",
    answer:
      "Yes, all our cleaning products are eco-friendly and non-toxic, ensuring the safety of your family, pets, and the environment.",
  },
  {
    question: "Do I need to provide any cleaning supplies or equipment?",
    answer:
      "No, our team comes fully equipped with all the necessary cleaning supplies and tools. However, if you prefer specific products to be used, we are happy to accommodate your request.",
  },
  {
    question: "How can I schedule a cleaning service?",
    answer:
      "Scheduling a service is easy. You can book an appointment through our website or contact us via phone or email. We offer flexible scheduling options to meet your needs.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that sometimes plans change. Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment to avoid a cancellation fee.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=' mx-auto p-6 bg-blue-600  '>
      <h2 className='text-3xl font-semibold text-center mb-8 text-white'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-4'>
        {faqData.map((item, index) => (
          <div key={index} className='w-fit'>
            <button
              className='w-full text-left p-4 focus:outline-none'
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex space-x-4 items-center bg-blue-600'>
                <span className='text-lg font-medium text-white '>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill='none'
                  stroke='white'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </div>
            </button>
            {activeIndex === index && (
              <div className='p-4 text-gray-100 border-t border-gray-200 md:w-[50%]'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
