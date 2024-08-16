// src/components/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className='  p-8 rounded-lg'>
      <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
        About Our Company
      </h2>
      <div className='flex md:flex-row flex-col'>
        <div className='flex flex-row space-x-2 md:w-2/5'>
          <img
            className='w-2/4'
            src='https://img.freepik.com/free-photo/still-life-cleaning-tools_23-2150552244.jpg?t=st=1723798190~exp=1723801790~hmac=e32a33ccde9a1dd1531d7855f7677b22e925650cee68487385e1bbb63ce90544&w=360'
          />
          <div className='w-2/5 flex flex-col justify-between'>
            <img
              src='https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?t=st=1723798229~exp=1723801829~hmac=43884a453b9581cc3e2cc0817042bb02f23dd89efc0b886810b8256dd2db1423&w=740'
              alt=''
            />
            <img
              src='https://img.freepik.com/free-photo/close-up-hands-holding-cleaning-supplies_23-2148563581.jpg?uid=R159145325&ga=GA1.1.338249258.1711012052&semt=ais_hybrid'
              alt=''
              className=' '
            />
          </div>
        </div>
        <div className='text-lg text-semibold text-gray-600 text-center space-y-6 md:w-3/5'>
          <p>
            Welcome to our cleaning services company, where quality and customer
            satisfaction are our top priorities. With years of experience in the
            industry, we have built a reputation for delivering exceptional
            cleaning services tailored to meet the unique needs of our clients.
          </p>
          <p>
            Our team of professional cleaners is dedicated to providing a
            spotless environment for both residential and commercial spaces. We
            understand that a clean space is not only visually appealing but
            also contributes to a healthier and more productive environment.
          </p>

          <p>
            At our company, we believe in transparency and integrity. We are
            fully licensed and insured, ensuring that you can trust us to take
            care of your property with the utmost respect and professionalism.
          </p>
          <p>
            Thank you for considering us for your cleaning needs. We look
            forward to the opportunity to serve you and help you maintain a
            clean and healthy environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
