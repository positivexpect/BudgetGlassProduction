import React from 'react'
import ResponsiveImage from '../../../components/ResponsiveImage'

export const metadata = {
  title: 'Project Gallery | Budget Glass Company',
  description: 'View our portfolio of completed glass projects, showcasing our quality workmanship and attention to detail.',
}

export default function Gallery() {
  const categories = [
    {
      title: 'Commercial Projects',
      description: 'Storefront installations, office partitions, and commercial glass solutions',
      image: '/images/commercial-placeholder.jpg'
    },
    {
      title: 'Residential Projects',
      description: 'Window replacements, shower enclosures, and custom glass installations',
      image: '/images/residential-placeholder.jpg'
    },
    {
      title: 'Custom Work',
      description: 'Specialty glass projects and unique custom installations',
      image: '/images/custom-placeholder.jpg'
    }
  ]

  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="mb-6">Project Gallery</h1>
          <p className="text-xl">Showcasing Our Quality Workmanship</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg shadow-subtle">
                  <ResponsiveImage
                    src={category.image}
                    alt={category.title}
                    width={600}
                    height={400}
                    containerClassName="w-full aspect-4/3 overflow-hidden"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-8">Have a Project in Mind?</h2>
            <p className="text-gray-600 mb-8">
              Whether it's a commercial storefront, residential windows, or a custom glass installation, 
              we have the expertise to bring your vision to life.
            </p>
            <a href="/schedule-appointment" className="btn-primary">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 