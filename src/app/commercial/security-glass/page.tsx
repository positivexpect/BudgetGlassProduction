import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../components/ServiceHero'
import FeatureSection from '../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Commercial Security Glass Solutions | Budget Glass',
  description: 'Protect your business with advanced security glass solutions. Impact-resistant glass, security films, and reinforced entry systems.',
}

export default function SecurityGlass() {
  const features = [
    {
      title: 'Break-In Protection',
      description: 'Reinforced glass systems that deter and delay forced entry attempts.',
    },
    {
      title: 'Impact Resistance',
      description: 'Glass that withstands high impacts while maintaining visibility.',
    },
    {
      title: 'UV Protection',
      description: 'Shield inventory and interiors from harmful UV rays.',
    },
    {
      title: 'Clear Visibility',
      description: 'Maximum security without compromising aesthetics or natural light.',
    },
  ]

  const solutions = [
    {
      title: 'Laminated Security Glass',
      description: 'Multi-layer protection that holds together when broken',
      features: [
        'Break-in resistant',
        'Sound reduction',
        'UV protection',
        'Various thicknesses',
      ],
    },
    {
      title: 'Security Window Film',
      description: 'Retrofit solution for existing glass',
      features: [
        'Break-in deterrent',
        'Shatter protection',
        'Solar control',
        'Quick installation',
      ],
    },
    {
      title: 'Bullet-Resistant Glass',
      description: 'Maximum protection for high-security areas',
      features: [
        'Multiple security levels',
        'Crystal clear visibility',
        'Custom configurations',
        'Professional install',
      ],
    },
    {
      title: 'Wire Mesh Glass',
      description: 'Added security for specific applications',
      features: [
        'Fire-rated options',
        'Break-in protection',
        'Cost-effective',
        'Code compliant',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Commercial Security Glass Solutions"
        description="Protect your business with advanced security glass systems. Expert consultation and installation."
        ctaText="Get a Quote"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#solutions"
      />

      <FeatureSection
        title="The Budget Glass Security Advantage"
        description="Comprehensive protection without compromising aesthetics"
        features={features}
        columns={4}
      />

      <section id="solutions" className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Security Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
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
              <h2 className="mb-6">Common Applications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Business Types</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Retail Stores
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Banks & Credit Unions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Jewelry Stores
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Government Buildings
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Applications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Storefronts
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Display Cases
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Transaction Windows
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Entry Systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Security Assessment</h3>
                <p className="mb-4">Our security experts will:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">1.</span>
                    Evaluate your current security vulnerabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">2.</span>
                    Recommend appropriate security measures
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">3.</span>
                    Provide detailed cost analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">4.</span>
                    Create a custom security plan
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
            <h2 className="mb-8">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8">
              Contact us for a free security assessment. We'll help you choose the right solution for your security needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Request Assessment
              </a>
              <a href="/commercial/portfolio" className="btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 