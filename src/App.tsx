import React from "react";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { useScroll } from "./hooks/navigation";
import { Header } from "./components/Header";
import CleaningServices from "./components/CleaningServices";
import WhyChooseUs from "./components/whyChooseus";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/AboutUs";
import CleaningProcess from "./components/cleaningProcess";
import TestimonialSection from "./components/testimonialsection";

const App: React.FC = () => {
  const { testimonial, about, cleaningProcess, pricing } = useScroll();
  return (
    <div>
      <Header
        testimonial={testimonial}
        about={about}
        cleaningProcess={cleaningProcess}
        pricing={pricing}
      />
      <HeroSection />
      <WhyChooseUs />
      <div ref={testimonial}>
        <CleaningServices />
      </div>
      <div ref={about}>
        <AboutUs />
      </div>
      <div ref={cleaningProcess}>
        <CleaningProcess />
      </div>
      <div ref={pricing}>
        <PricingSection />
      </div>

      <FAQSection />
      <TestimonialSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
