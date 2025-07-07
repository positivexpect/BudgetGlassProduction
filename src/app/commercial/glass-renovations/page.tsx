import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../components/ServiceHero'
import FeatureSection from '../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Commercial Glass Renovations & Upgrades | Budget Glass',
  description: 'Modernize your commercial property with glass renovations and upgrades. Energy-efficient solutions, security improvements, and aesthetic enhancements.',
}

export default function GlassRenovations() {
  const features = [
    {
      title: 'Energy Savings',
      description: 'Upgrade to modern energy-efficient glass systems that reduce HVAC costs.',
    },
    {
      title: 'Minimal Disruption',
      description: 'We work around your schedule to minimize business interruption.',
    },
    {
      title: 'Property Value',
      description: 'Enhance your property value with modern glass solutions.',
    },
    {
      title: 'Safety & Security',
      description: 'Improve security with modern glass and door systems.',
    },
  ]

  const upgrades = [
    {
      title: 'Energy Efficiency',
      items: [
        'Low-E glass installation',
        'Double-pane retrofits',
        'Solar control films',
        'Thermal break frames',
      ],
    },
    {
      title: 'Security & Safety',
      items: [
        'Security glass upgrades',
        'Access control integration',
        'Impact-resistant systems',
        'Emergency exit compliance',
      ],
    },
    {
      title: 'Aesthetics',
      items: [
        'Modern storefront conversion',
        'Decorative glass options',
        'Updated door systems',
        'Interior glass walls',
      ],
    },
    {
      title: 'Maintenance',
      items: [
        'Hardware upgrades',
        'Weather sealing',
        'Frame restoration',
        'Glass replacement',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Commercial Glass Renovations"
        description="Transform your commercial property with modern glass solutions. Improve energy efficiency, security, and aesthetics."
        ctaText="Schedule Consultation"
        ctaLink="/schedule-appointment"
        secondaryCtaText="View Projects"
        secondaryCtaLink="/commercial/portfolio"
      />

      <FeatureSection
        title="Benefits of Glass Renovation"
        description="Modernize your property while improving efficiency and security"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Upgrade Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upgrades.map((upgrade, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">{upgrade.title}</h3>
                <ul className="space-y-3">
                  {upgrade.items.map((item, i) => (
                    <li key={i} className="flex items-start">
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
              <h2 className="mb-6">Renovation Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assessment</h3>
                    <p>Thorough evaluation of your current glass systems and improvement opportunities.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Recommendations</h3>
                    <p>Detailed proposal with options and ROI analysis for each upgrade.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Planning</h3>
                    <p>Careful scheduling to minimize business disruption during installation.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Installation</h3>
                    <p>Professional installation with strict quality control measures.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Common Applications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Property Types</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Office Buildings
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Retail Centers
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Hotels
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Restaurants
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Upgrade Types</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Storefronts
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Entry Systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Windows
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Interior Glass
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Ready to Modernize Your Property?</h2>
            <p className="text-xl mb-8">
              Schedule a consultation to discuss your renovation needs. We'll help you identify the best upgrades for your budget and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/schedule-appointment" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="/commercial/portfolio" className="btn-outline">
                View Past Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 