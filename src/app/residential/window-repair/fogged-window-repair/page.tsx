import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Fogged Window Repair in Richmond | Budget Glass',
  description: 'Expert repair for foggy windows and failed seals. Same-day service available. Save up to 90% vs full window replacement.',
}

export default function FoggedWindowRepair() {
  const features = [
    {
      title: 'Cost Savings',
      description: 'Save up to 90% compared to full window replacement.',
    },
    {
      title: 'Quick Service',
      description: 'Same-day service when you drop off by 10am.',
    },
    {
      title: 'Clear Views',
      description: 'Eliminate fog and moisture between glass panes.',
    },
    {
      title: 'Energy Efficient',
      description: 'Restore your windows insulating properties.',
    },
  ]

  const problems = [
    {
      title: 'Foggy Glass',
      description: 'Cloudy appearance between panes',
      signs: [
        'Hazy appearance',
        'Moisture buildup',
        'White residue',
        'Seasonal changes',
      ],
    },
    {
      title: 'Failed Seals',
      description: 'Loss of insulating properties',
      signs: [
        'Drafty windows',
        'Higher energy bills',
        'Condensation',
        'Visible damage',
      ],
    },
    {
      title: 'Moisture Damage',
      description: 'Water between glass panes',
      signs: [
        'Water droplets',
        'Mineral deposits',
        'Mold growth',
        'Permanent stains',
      ],
    },
    {
      title: 'Performance Loss',
      description: 'Reduced window efficiency',
      signs: [
        'Poor insulation',
        'UV damage',
        'Sound transmission',
        'Temperature changes',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Fix Your Foggy Windows Today"
        description="Clear views restored. Drop off your window sash by 10am for same-day service."
        ctaText="Schedule Service"
        ctaLink="/schedule-appointment"
        secondaryCtaText="Get Help: (804) 231-1029"
        secondaryCtaLink="tel:+18042311029"
      />

      <FeatureSection
        title="Why Choose Our Fogged Window Repair"
        description="Fast, affordable solution for foggy windows"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Common Window Problems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <ul className="space-y-2">
                  {problem.signs.map((sign, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {sign}
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
              <h2 className="mb-6">Our Repair Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inspection</h3>
                    <p>We'll assess the extent of fogging and seal failure.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Glass Replacement</h3>
                    <p>Remove old glass and install new sealed unit.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seal Testing</h3>
                    <p>Verify proper seal and insulation performance.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Check</h3>
                    <p>Final inspection to ensure perfect clarity.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Why Windows Fog Up</h3>
                <p className="mb-4">Insulated glass units (IGUs) can fail due to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Age and natural wear
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Seal deterioration
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Temperature fluctuations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Manufacturing defects
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Installation issues
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
            <h2 className="mb-8">Ready to See Clearly Again?</h2>
            <p className="text-xl mb-8">
              Drop off your window sash by 10am for same-day service. Not sure how to remove it? We'll walk you through it!
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