import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Foggy Window Repair | Budget Glass Richmond",
  description:
    "Fix cloudy, foggy double-pane windows in Richmond. Save up to 90% vs full window replacement. Same-day service available.",
};

export default function FoggyWindowRepair() {
  const features = [
    {
      title: "Same-Day Service",
      description: "Quick repair to restore clear views.",
    },
    {
      title: "90% Cost Savings",
      description: "Much cheaper than full window replacement.",
    },
    {
      title: "Improved Energy Efficiency",
      description: "Restore your window's insulation properties.",
    },
    {
      title: "Expert Installation",
      description: "Professional installation with warranty.",
    },
  ];

  const causes = [
    {
      title: "Seal Failure",
      description:
        "When the seal around the glass unit fails, moisture enters between the panes.",
    },
    {
      title: "Temperature Changes",
      description:
        "Extreme temperature fluctuations can stress window seals over time.",
    },
    {
      title: "Age of Windows",
      description:
        "Older windows are more prone to seal deterioration and fogging issues.",
    },
    {
      title: "Poor Installation",
      description:
        "Improperly installed windows may develop seal problems sooner.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Foggy Window Repair"
        description="Clear up cloudy, foggy double-pane windows and restore your view. Professional repair service that saves you money."
        ctaText="Get Free Estimate"
        ctaLink="/contact"
        secondaryCtaText="Call Now"
        secondaryCtaLink="tel:+18042311029"
        imageSrc="/images/window-repair.jpg"
        imageAlt="Foggy Window Repair Service"
      />

      <FeatureSection
        title="Why Choose Our Foggy Window Repair"
        description="Professional repair service that restores clarity and efficiency"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What Causes Foggy Windows?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Foggy or cloudy windows occur when moisture gets trapped between
                the glass panes of double or triple-pane windows. This happens
                when the seal around the insulated glass unit fails, allowing
                humid air to enter the space between the panes.
              </p>
              <div className="space-y-4">
                {causes.map((cause, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{cause.title}</h4>
                      <p className="text-gray-600">{cause.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-lightest p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Signs You Need Foggy Window Repair
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Cloudiness or haze between glass panes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Water droplets visible inside the window</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Mineral deposits on the inner glass surface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reduced visibility through the window</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Higher energy bills due to lost insulation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightest py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Repair Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Inspection</h3>
              <p className="text-gray-600">
                We assess the extent of the seal failure and measure your
                window.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Fabrication</h3>
              <p className="text-gray-600">
                We create a new insulated glass unit to exact specifications.
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
                Expert installation of your new glass unit with proper sealing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Final inspection to ensure clear views and proper sealing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-lg text-center">
            <h2 className="mb-6">Ready to Clear Up Your View?</h2>
            <p className="text-xl mb-8">
              Don't let foggy windows ruin your home's appearance and energy
              efficiency. Get a free estimate today.
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
