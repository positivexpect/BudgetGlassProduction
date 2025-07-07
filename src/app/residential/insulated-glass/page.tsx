import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Insulated Glass Units (IGUs) | Budget Glass Richmond",
  description:
    "Custom insulated glass units in Richmond. Energy-efficient double and triple pane windows. Professional installation and replacement service.",
};

export default function InsulatedGlass() {
  const features = [
    {
      title: "Energy Efficient",
      description: "Reduce heating and cooling costs significantly.",
    },
    {
      title: "Custom Fabrication",
      description: "Made to exact specifications for perfect fit.",
    },
    {
      title: "Professional Installation",
      description: "Expert installation with warranty protection.",
    },
    {
      title: "Noise Reduction",
      description: "Improved sound insulation for quieter homes.",
    },
  ];

  const benefits = [
    {
      title: "Lower Energy Bills",
      description:
        "Advanced insulation reduces heating and cooling costs by up to 25%.",
      icon: "💡",
    },
    {
      title: "Improved Comfort",
      description:
        "Better temperature control and reduced drafts throughout your home.",
      icon: "🏠",
    },
    {
      title: "Condensation Control",
      description: "Proper sealing prevents moisture buildup and fogging.",
      icon: "💧",
    },
    {
      title: "UV Protection",
      description:
        "Special coatings protect furniture and flooring from sun damage.",
      icon: "☀��",
    },
    {
      title: "Sound Reduction",
      description: "Multiple glass layers significantly reduce outside noise.",
      icon: "🔇",
    },
    {
      title: "Increased Home Value",
      description: "Energy-efficient windows add value to your property.",
      icon: "📈",
    },
  ];

  const glassOptions = [
    {
      title: "Standard Double Pane",
      description: "Two panes of glass with insulating air space",
      features: [
        "Basic energy efficiency",
        "Cost-effective solution",
        "Standard argon gas fill",
      ],
    },
    {
      title: "Low-E Double Pane",
      description: "Enhanced coating for better energy performance",
      features: [
        "Superior insulation",
        "UV protection",
        "Reduced energy costs",
      ],
    },
    {
      title: "Triple Pane",
      description: "Maximum insulation with three glass layers",
      features: [
        "Highest energy efficiency",
        "Excellent sound reduction",
        "Premium performance",
      ],
    },
    {
      title: "Specialty Coatings",
      description: "Custom solutions for specific needs",
      features: [
        "Privacy glass options",
        "Decorative patterns",
        "Security laminated glass",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Insulated Glass Units (IGUs)"
        description="Custom energy-efficient glass units that reduce energy costs and improve comfort. Professional fabrication and installation."
        ctaText="Get Free Estimate"
        ctaLink="/contact"
        secondaryCtaText="Call Now"
        secondaryCtaLink="tel:+18042311029"
        imageSrc="/images/window-repair.jpg"
        imageAlt="Insulated Glass Units Installation"
      />

      <FeatureSection
        title="Why Choose Our Insulated Glass Units"
        description="Superior quality and performance for your home or business"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What Are Insulated Glass Units?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Insulated Glass Units (IGUs) are multi-pane glass assemblies
                with sealed air or gas-filled spaces between the glass layers.
                This design provides superior insulation compared to single-pane
                windows, resulting in significant energy savings and improved
                comfort.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Multiple Glass Layers
                    </h4>
                    <p className="text-gray-600">
                      Two or three panes of glass provide multiple barriers to
                      heat transfer.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Insulating Gas Fill</h4>
                    <p className="text-gray-600">
                      Argon or krypton gas between panes provides better
                      insulation than air.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Low-E Coatings</h4>
                    <p className="text-gray-600">
                      Special coatings reflect heat while allowing light to pass
                      through.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sealed Construction</h4>
                    <p className="text-gray-600">
                      Airtight seals prevent moisture and maintain gas fill
                      integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-lightest p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">When to Replace IGUs</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Fogging or condensation between panes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Visible seal failure around edges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Drafts or air leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>High energy bills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Single-pane windows</span>
                </li>
              </ul>

              <div className="bg-primary text-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Free Energy Assessment</h4>
                <p className="text-sm">
                  We'll evaluate your current windows and recommend the best IGU
                  solution for maximum savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightest py-20">
        <div className="container">
          <h2 className="text-center mb-12">
            Benefits of Insulated Glass Units
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">IGU Options & Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {glassOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
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

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our IGU Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Measurement</h3>
              <p className="text-gray-600">
                Precise measurement of your existing window openings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Fabrication</h3>
              <p className="text-gray-600">
                IGUs manufactured to exact specifications with quality
                materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Expert installation with proper sealing and insulation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Final inspection and testing to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-lg text-center">
            <h2 className="mb-6">Ready to Save on Energy Costs?</h2>
            <p className="text-xl mb-8">
              Upgrade to energy-efficient insulated glass units and start saving
              immediately. Get your free estimate today.
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
