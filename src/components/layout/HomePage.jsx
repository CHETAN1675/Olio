import Insights from "../sections/Insights";
import CaseStudy from "../sections/CaseStudy";
import ComponentsSection from "../sections/componentsSection/ComponentsSection";
import CTASection from "../sections/CTASection";
import ExcelSection from "../sections/ExcelSection";
import GrowthSystem from "../sections/GrowthSystem";
import Hero from "../sections/hero/Hero";
import HowWeWork from "../sections/HowWeWork";
import MacBook from "../sections/Macbook";
import Testimonials from "../sections/TestimonialSection/Testimonials";
import WhyChoose from "../sections/WhyChoose";
import WhyChooseUs from "../sections/WhyChooseUs";
import WhyStuck from "../sections/WhyStuck";

function HomePage(){
    return(
        <>
        <Hero/>
        <MacBook/>
        <WhyChoose/>
        <ExcelSection/>
        <WhyStuck/>
        <GrowthSystem/>
        <HowWeWork/>
        <ComponentsSection/>
        <WhyChooseUs/>
        <CaseStudy/>
        <Testimonials/>
        <Insights/>
        <CTASection/>
        </>
    );
};
export default HomePage;