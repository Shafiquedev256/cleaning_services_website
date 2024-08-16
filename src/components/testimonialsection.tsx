import React from "react";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    quote: "This cleaning service is amazing! My house has never been cleaner.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "John Smith",
    quote: "Professional, efficient, and friendly. Highly recommended!",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Emily Johnson",
    quote: "Fantastic service with great attention to detail.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold text-center mb-8'>
          What Our Clients Say
        </h2>
        <div className='flex flex-wrap justify-center'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='max-w-sm bg-white rounded-lg shadow-md p-6 m-4 flex flex-col items-center'
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-24 h-24 rounded-full mb-4'
              />
              <p className='italic text-gray-600 text-center'>
                "{testimonial.quote}"
              </p>
              <h3 className='mt-4 text-lg font-semibold text-gray-800'>
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
