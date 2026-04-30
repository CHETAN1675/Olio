import { lazy, Suspense } from "react";
import Spinner from "../common/Spinner";

// Lazy imports
const Hero = lazy(() => import("../sections/hero/Hero"));
const MacBook = lazy(() => import("../sections/Macbook"));
const WhyChoose = lazy(() => import("../sections/WhyChoose"));
const ExcelSection = lazy(() => import("../sections/ExcelSection"));
const WhyStuck = lazy(() => import("../sections/WhyStuck"));
const GrowthSystem = lazy(() => import("../sections/GrowthSystem"));
const HowWeWork = lazy(() => import("../sections/HowWeWork"));
const ComponentsSection = lazy(() => import("../sections/componentsSection/ComponentsSection"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
const CaseStudy = lazy(() => import("../sections/CaseStudy"));
const Testimonials = lazy(() => import("../sections/TestimonialSection/Testimonials"));
const Insights = lazy(() => import("../sections/Insights"));
const CTASection = lazy(() => import("../sections/CTASection"));

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <MacBook />
      </Suspense>

      <section id="about">
        <Suspense fallback={<Spinner />}>
          <WhyChoose />
        </Suspense>
      </section>

      <section id="services">
        <Suspense fallback={<Spinner />}>
          <ExcelSection />
        </Suspense>
      </section>

      <Suspense fallback={<Spinner />}>
        <WhyStuck />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <GrowthSystem />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <HowWeWork />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <ComponentsSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <WhyChooseUs />
      </Suspense>

      <section id="case-studies">
        <Suspense fallback={<Spinner />}>
          <CaseStudy />
        </Suspense>
      </section>

      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>

      <section id="insights">
        <Suspense fallback={<Spinner />}>
          <Insights />
        </Suspense>
      </section>

      <Suspense fallback={<Spinner />}>
        <CTASection />
      </Suspense>
    </>
  );
}