import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Glass Replacement Service | Budget Glass Richmond",
  description:
    "Professional glass replacement for windows, doors, and more in Richmond. Save money by replacing just the glass, not the entire unit.",
};

export default function GlassReplacement() {
  const features = [
    {
      title: "All Glass Types",
      description: "Single pane, double pane, safety glass, and more.",
    },
    {
      title: "Cost Effective",
      description: "Save money by replacing glass instead of entire units.",
    },
    {
      title: "Expert Installation",
      description: "Professional installation with warranty protection.",
    },
    {
      title: "Quick Service",
      description: "Fast turnaround to minimize inconvenience.",
    },
  ];

  const glassTypes = [
    {
      title: "Single Pane Glass",
      description: "Standard window glass replacement for older homes.",
      features: [
        "Clear or tinted options",
        "Custom cutting",
        "Weather sealing",
      ],
    },
    {
      title: "Double Pane Glass",
      description: "Energy-efficient insulated glass units.",
      features: ["Energy savings", "Noise reduction", "Condensation control"],
    },
    {
      title: "Safety Glass",
      description: "Tempered or laminated glass for doors and large windows.",
      features: [
        "Impact resistant",
        "Safety compliance",
        "Various thicknesses",
      ],
    },
    {
      title: "Specialty Glass",
      description: "Custom solutions for unique applications.",
      features: ["Frosted glass", "Decorative patterns", "Low-E coatings"],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Professional Glass Replacement"
        description="Replace damaged glass in windows, doors, and other applications. Save money with expert glass replacement service."
        ctaText="Get Free Estimate"
        ctaLink="/contact"
        secondaryCtaText="Call Now"
        secondaryCtaLink="tel:+18042311029"
        imageSrc="/images/window-repair.jpg"
        imageAlt="Professional Glass Replacement Service"
      />

      <FeatureSection
        title="Why Choose Our Glass Replacement Service"
        description="Professional service that saves you money and time"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Types of Glass We Replace</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {glassTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightest py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">When to Replace Glass vs. Entire Unit</h2>
              <p className="text-lg text-gray-600 mb-6">
                In most cases, you can save significant money by replacing just
                the glass instead of the entire window or door unit.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Replace Glass When:
                  </h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Glass is cracked or broken</li>
                    <li>• Double pane units are fogged</li>
                    <li>• Frame and hardware are in good condition</li>
                    <li>• Window operates properly</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Replace Entire Unit When:
                  </h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Frame is damaged or rotted</li>
                    <li>• Hardware is broken or worn out</li>
                    <li>• Window doesn't open or close properly</li>
                    <li>• Upgrading to new style or size</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">
                Glass Replacement Process
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold">Assessment & Measurement</h4>
                    <p className="text-gray-600">
                      We evaluate the damage and take precise measurements.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold">Glass Fabrication</h4>
                    <p className="text-gray-600">
                      Custom glass is cut and prepared to exact specifications.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold">Professional Installation</h4>
                    <p className="text-gray-600">
                      Expert installation with proper sealing and cleanup.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold">Quality Inspection</h4>
                    <p className="text-gray-600">
                      Final check to ensure perfect fit and operation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-lg text-center">
            <h2 className="mb-6">Need Glass Replacement?</h2>
            <p className="text-xl mb-8">
              Get a free estimate for your glass replacement project.
              Professional service with competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-white">
                Get Free Estimate
              </a>
              <a href="tel:+18042311029" className="btn btn-outline-white">
                Call (804) 231-1029
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
