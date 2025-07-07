import React from 'react'
import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon?: string
  iconAlt?: string
}

interface FeatureSectionProps {
  title: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

const FeatureSection = ({
  title,
  description,
  features,
  columns = 3,
}: FeatureSectionProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  return (
    <section className="py-20 bg-neutral-lightest">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          {description && <p className="text-xl text-gray-600">{description}</p>}
        </div>
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-subtle"
            >
              {feature.icon && (
                <div className="mb-4 relative w-12 h-12">
                  <Image
                    src={feature.icon}
                    alt={feature.iconAlt || ''}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection 