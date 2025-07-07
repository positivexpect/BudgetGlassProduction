import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";
import ShowerBuilder from "../../../components/ShowerBuilder";

export const metadata: Metadata = {
  title: "Custom Shower Doors & Installation | Budget Glass",
  description:
    "Virginia's largest shower door selection. Expert design and installation with free in-home consultation.",
};

export default function ShowerDoors() {
  const features = [
    {
      title: "Largest Selection",
      description: "Virginia's #1 shower door dealer.",
    },
    {
      title: "Expert Installation",
      description: "Professional fitting with warranty.",
    },
    {
      title: "Free Design Help",
      description: "In-home consultation and measuring.",
    },
    {
      title: "Premium Quality",
      description: "Top-grade materials and hardware.",
    },
  ];

  const styles = [
    {
      title: "Frameless",
      description: "Modern, minimalist design with maximum glass exposure.",
    },
    {
      title: "Semi-Frameless",
      description: "Perfect balance of style and value.",
    },
    {
      title: "Framed",
      description: "Classic look with sturdy construction.",
    },
    {
      title: "Custom Enclosures",
      description: "Unique solutions for any space.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Custom Shower Doors"
        description="Transform your bathroom with Virginia's largest selection of custom shower doors. Free in-home design consultation."
        ctaText="Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="View Gallery"
        secondaryCtaLink="/residential/shower-doors/gallery"
        imageSrc="/images/shower-door.jpg"
        imageAlt="Custom Shower Door Installation"
      />

      <FeatureSection
        title="Why Choose Our Shower Doors"
        description="The perfect combination of style, quality, and expert installation"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Shower Door Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {styles.map((style, index) => (
              <div key={index} className="relative group">
                <div className="aspect-w-4 aspect-h-3 bg-neutral-lightest rounded-lg overflow-hidden mb-4">
                  {/* Placeholder for style images */}
                  <div className="absolute inset-0 bg-primary-light/20" />
                </div>
                <h3 className="text-xl font-bold mb-2">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShowerBuilder />

      <section className="bg-neutral-lightest py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Free Consultation
                    </h3>
                    <p>
                      We'll visit your home to measure and discuss design
                      options that match your style and budget.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Design</h3>
                    <p>
                      Our team will create a custom design that perfectly fits
                      your space and preferences.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Expert Installation
                    </h3>
                    <p>
                      Our experienced installers ensure perfect fit and function
                      with professional installation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <h3 className="text-2xl font-bold mb-6">Why Choose Custom?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Perfect fit for your unique space
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Wide range of glass options and finishes
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Superior quality and durability
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Professional installation included
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Comprehensive warranty coverage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Ready to Transform Your Bathroom?</h2>
            <p className="text-xl mb-8">
              Schedule your free in-home consultation today. We'll help you
              choose the perfect shower door for your space and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Us for Free Consultation
              </a>
              <a
                href="/residential/shower-doors/gallery"
                className="btn-outline"
              >
                View Our Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
