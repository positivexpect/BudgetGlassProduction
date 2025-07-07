import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Window & Door Hardware Repair | Budget Glass Richmond",
  description:
    "Fix broken window and door hardware in Richmond. Repair or replace locks, handles, hinges, and more. Extend the life of your windows and doors.",
};

export default function HardwareRepair() {
  const features = [
    {
      title: "Expert Repair",
      description: "Skilled technicians who know all hardware types.",
    },
    {
      title: "Quality Parts",
      description: "High-quality replacement parts that last.",
    },
    {
      title: "Cost Effective",
      description: "Much cheaper than replacing entire units.",
    },
    {
      title: "Quick Service",
      description: "Fast repairs to restore functionality.",
    },
  ];

  const hardwareTypes = [
    {
      title: "Window Hardware",
      items: [
        "Casement window cranks and operators",
        "Double-hung window balances and springs",
        "Window locks and latches",
        "Sliding window rollers and tracks",
        "Window handles and pulls",
      ],
    },
    {
      title: "Door Hardware",
      items: [
        "Door handles and knobs",
        "Door locks and deadbolts",
        "Hinges and pivot assemblies",
        "Door closers and operators",
        "Weatherstripping and seals",
      ],
    },
    {
      title: "Patio Door Hardware",
      items: [
        "Sliding door rollers",
        "Patio door handles and locks",
        "Track systems and guides",
        "Door adjusters and springs",
        "Screen door hardware",
      ],
    },
    {
      title: "Specialty Hardware",
      items: [
        "Awning and hopper window hardware",
        "Tilt-in window mechanisms",
        "Multi-point locking systems",
        "Security hardware upgrades",
        "Custom hardware solutions",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Window & Door Hardware Repair"
        description="Fix broken hardware and restore smooth operation to your windows and doors. Professional repair service that saves you money."
        ctaText="Get Free Estimate"
        ctaLink="/contact"
        secondaryCtaText="Call Now"
        secondaryCtaLink="tel:+18042311029"
        imageSrc="/images/window-repair.jpg"
        imageAlt="Window and Door Hardware Repair Service"
      />

      <FeatureSection
        title="Why Choose Our Hardware Repair Service"
        description="Professional repair that extends the life of your windows and doors"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Common Hardware Problems</h2>
              <p className="text-lg text-gray-600 mb-8">
                Over time, window and door hardware can wear out, break, or
                become misaligned. Our expert repair service can fix most
                hardware issues quickly and affordably.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    !
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hard to Open/Close</h4>
                    <p className="text-gray-600">
                      Windows or doors that stick, bind, or require excessive
                      force.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    !
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Broken Locks</h4>
                    <p className="text-gray-600">
                      Locks that don't engage properly or handles that won't
                      turn.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    !
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Worn Rollers</h4>
                    <p className="text-gray-600">
                      Sliding doors that jump track or don't slide smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    !
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Missing Parts</h4>
                    <p className="text-gray-600">
                      Handles, cranks, or other components that have broken off.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-lightest p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Benefits of Hardware Repair
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Restore smooth operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improve security and safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Extend window/door lifespan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Save money vs. replacement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Improve energy efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reduce drafts and air leaks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightest py-20">
        <div className="container">
          <h2 className="text-center mb-12">Hardware We Repair & Replace</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hardwareTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600">
                We identify the problem and determine the best repair approach.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Parts Sourcing</h3>
              <p className="text-gray-600">
                We obtain the correct replacement parts for your specific
                hardware.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Repair</h3>
              <p className="text-gray-600">
                Professional installation and adjustment for optimal operation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
                We test operation and make final adjustments for smooth
                function.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-lg text-center">
            <h2 className="mb-6">Fix Your Hardware Problems Today</h2>
            <p className="text-xl mb-8">
              Don't struggle with hard-to-operate windows and doors. Get
              professional hardware repair service.
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
