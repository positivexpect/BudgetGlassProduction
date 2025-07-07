import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Professional Shower Door Installation | Budget Glass',
  description: 'Expert shower door installation in Richmond. Custom solutions, professional installation, and premium hardware. Free consultation available.',
}

export default function ShowerDoorInstallation() {
  const features = [
    {
      title: 'Expert Installation',
      description: 'Professional installation by certified technicians.',
    },
    {
      title: 'Custom Solutions',
      description: 'Perfect fit for any shower configuration.',
    },
    {
      title: 'Quality Materials',
      description: 'Premium glass and hardware options.',
    },
    {
      title: 'Warranty Coverage',
      description: '1-year warranty on parts and labor.',
    },
  ]

  const process = [
    {
      title: 'Measurement',
      description: 'Precise measurements for perfect fit',
      steps: [
        'Digital measurements',
        'Level assessment',
        'Wall condition check',
        'Opening evaluation',
      ],
    },
    {
      title: 'Design',
      description: 'Custom design consultation',
      steps: [
        'Style selection',
        'Hardware options',
        'Glass choices',
        'Feature planning',
      ],
    },
    {
      title: 'Fabrication',
      description: 'Custom glass preparation',
      steps: [
        'Precision cutting',
        'Edge treatment',
        'Tempering process',
        'Quality control',
      ],
    },
    {
      title: 'Installation',
      description: 'Professional installation',
      steps: [
        'Surface preparation',
        'Hardware mounting',
        'Glass installation',
        'Final adjustments',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Professional Shower Door Installation"
        description="Transform your bathroom with a custom shower door. Expert installation and premium materials."
        ctaText="Schedule Free Consultation"
        ctaLink="/schedule-appointment"
        secondaryCtaText="View Door Types"
        secondaryCtaLink="/residential/shower-doors/types-options"
      />

      <FeatureSection
        title="Why Choose Our Installation Service"
        description="Expert installation backed by 40 years of experience"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Installation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.steps.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What to Expect</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p>Free consultation to discuss your needs and explore options.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Measurement</h3>
                    <p>Precise measurements to ensure a perfect fit.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Fabrication</h3>
                    <p>Your glass is custom cut and tempered to specifications.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Installation</h3>
                    <p>Professional installation with attention to detail.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Installation Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Professional installation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    All necessary hardware
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Silicone sealing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Cleanup and disposal
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Final inspection
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    1-year warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Ready to Transform Your Bathroom?</h2>
            <p className="text-xl mb-8">
              Schedule your free consultation today. We'll help you choose the perfect shower door and handle everything from measurement to installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/schedule-appointment" className="btn-primary">
                Schedule Free Consultation
              </a>
              <a href="/residential/shower-doors/types-options" className="btn-outline">
                Explore Door Types
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 