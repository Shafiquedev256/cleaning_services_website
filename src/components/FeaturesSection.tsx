import React from "react";
import {
  FaCogs,
  FaChartLine,
  FaCloud,
  FaLock,
  FaSync,
  FaStar,
} from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Advanced Automation",
      description:
        "Automate repetitive tasks and streamline your workflow effortlessly with our advanced automation tools. Increase efficiency and reduce manual effort significantly.",
      icon: <FaCogs size={50} className='text-blue-600 mb-6' />,
    },
    {
      title: "Real-Time Analytics",
      description:
        "Gain actionable insights with our real-time analytics. Track performance, measure metrics, and make data-driven decisions on the fly.",
      icon: <FaChartLine size={50} className='text-blue-600 mb-6' />,
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with major cloud services for enhanced accessibility and scalability. Keep your data synchronized and available from anywhere.",
      icon: <FaCloud size={50} className='text-blue-600 mb-6' />,
    },
    {
      title: "Enhanced Security",
      description:
        "Protect your data with industry-leading security features. Our platform uses advanced encryption and secure access protocols to keep your information safe.",
      icon: <FaLock size={50} className='text-blue-600 mb-6' />,
    },
    {
      title: "Automatic Backups",
      description:
        "Never worry about data loss again. Our automatic backup system ensures your data is regularly backed up and easily recoverable in case of emergencies.",
      icon: <FaSync size={50} className='text-blue-600 mb-6' />,
    },
    {
      title: "Customizable Dashboards",
      description:
        "Create and customize dashboards to fit your needs. Display the most relevant metrics and data in a way that works best for you and your team.",
      icon: <FaStar size={50} className='text-blue-600 mb-6' />,
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-16'>Key Features</h2>
        <div className='flex flex-wrap justify-center gap-10'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='w-full sm:w-1/3 max-w-sm bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105'
            >
              <div className='flex flex-col items-center text-center'>
                {feature.icon}
                <h3 className='text-2xl font-semibold mb-4'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
