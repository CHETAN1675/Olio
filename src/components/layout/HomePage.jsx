import Hero from "../sections/hero/Hero";
import MacBook from "../sections/Macbook";
import WhyChoose from "../sections/WhyChoose";
import ExcelSection from "../sections/ExcelSection";
import WhyStuck from "../sections/WhyStuck";
import GrowthSystem from "../sections/GrowthSystem";
import HowWeWork from "../sections/HowWeWork";
import ComponentsSection from "../sections/componentsSection/ComponentsSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import CaseStudy from "../sections/CaseStudy";
import Testimonials from "../sections/TestimonialSection/Testimonials";
import Insights from "../sections/Insights";
import CTASection from "../sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MacBook />

      <section id="about">
        <WhyChoose />
      </section>

      <section id="services">
        <ExcelSection />
      </section>

      <WhyStuck />
      <GrowthSystem />
      <HowWeWork />
      <ComponentsSection />
      <WhyChooseUs />

      <section id="case-studies">
        <CaseStudy />
      </section>

      <Testimonials />

      <section id="insights">
        <Insights />
      </section>

      <CTASection />
    </>
  );
}