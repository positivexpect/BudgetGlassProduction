import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Insulated Glass Unit Repair & Replacement | Budget Glass',
  description: 'Expert repair and replacement of foggy or failed insulated glass units. Same-day service available for window sash drop-offs.',
}

export default function InsulatedGlassUnits() {
  const features = [
    {
      title: 'Energy Savings',
      description: 'Restore your windows energy efficiency with new sealed units.',
    },
    {
      title: 'Clear Views',
      description: 'Eliminate foggy glass and moisture between panes.',
    },
    {
      title: 'Same-Day Service',
      description: 'Drop off your window sash by 10am for same-day service.',
    },
    {
      title: 'Expert Installation',
      description: 'Professional installation by experienced technicians.',
    },
  ]

  const services = [
    {
      title: 'Standard IGU',
      description: 'Double-pane insulated glass units',
      details: [
        'Most common replacement',
        'Energy efficient',
        'Clear or Low-E glass',
        'Various spacer options',
      ],
    },
    {
      title: 'Triple Pane',
      description: 'Maximum insulation and sound control',
      details: [
        'Superior energy savings',
        'Enhanced sound reduction',
        'Argon or Krypton gas',
        'Premium performance',
      ],
    },
    {
      title: 'Decorative Options',
      description: 'Custom glass designs and patterns',
      details: [
        'Internal grids/muntins',
        'Obscure glass options',
        'Tinted glass available',
        'Custom patterns',
      ],
    },
    {
      title: 'Safety Glass',
      description: 'Tempered and laminated options',
      details: [
        'Code compliance',
        'Enhanced safety',
        'Various thicknesses',
        'Custom sizes',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Insulated Glass Unit Repair"
        description="Fix foggy windows fast. Drop off your window sash by 10am for same-day service."
        ctaText="Schedule Service"
        ctaLink="/schedule-appointment"
        secondaryCtaText="Get Help: (804) 231-1029"
        secondaryCtaLink="tel:+18042311029"
      />

      <FeatureSection
        title="Why Replace Your Insulated Glass Units"
        description="Restore energy efficiency and clarity to your windows"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Replacement Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {detail}
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
              <h2 className="mb-6">Our Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Remove Sash</h3>
                    <p>Remove your window sash (the part that moves). Need help? Give us a call.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Drop Off</h3>
                    <p>Bring the sash to our shop by 10am for same-day service.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">New IGU</h3>
                    <p>We'll replace the glass unit with a new, sealed IGU.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pick Up</h3>
                    <p>Pick up your repaired window and reinstall it yourself.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Common Signs of IGU Failure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Foggy or cloudy glass
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Moisture between panes
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Drafty windows
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Higher energy bills
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Visible seal failure
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
            <h2 className="mb-8">Ready to Fix Those Foggy Windows?</h2>
            <p className="text-xl mb-8">
              Drop off your window sash by 10am for same-day service. Not sure how to remove it? Give us a call!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/schedule-appointment" className="btn-primary">
                Schedule Drop-Off
              </a>
              <a href="tel:+18042311029" className="btn-outline">
                Call for Help: (804) 231-1029
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 