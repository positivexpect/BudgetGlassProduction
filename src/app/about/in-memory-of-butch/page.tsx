import React from 'react'
import ResponsiveImage from '../../../components/ResponsiveImage'

export const metadata = {
  title: 'In Memory of Butch | Budget Glass Company',
  description: 'Honoring the legacy of Butch, whose dedication and leadership helped shape Budget Glass Company.',
}

export default function ButchMemorial() {
  return (
    <main>
      <section className="bg-gradient-to-b from-amber-300 to-amber-500 text-black py-20">
        <div className="container text-center">
          <h1 className="mb-6">In Memory of Butch</h1>
          <p className="text-xl">A Legacy of Excellence and Leadership</p>
          <p className="text-lg mt-4">1950 - 2023</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <ResponsiveImage
                src="/images/butch-placeholder.jpg"
                alt="Butch"
                width={500}
                height={600}
                containerClassName="w-full overflow-hidden rounded-lg shadow-lg"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="mb-6">A Life Dedicated to Excellence</h2>
              <p className="text-gray-600 mb-4">
                Butch was more than just a leader at Budget Glass Company - he was a mentor, 
                a friend, and the embodiment of our core values. His unwavering commitment 
                to quality and customer service set the standard for everything we do.
              </p>
              <p className="text-gray-600">
                Under his guidance, Budget Glass grew from a small local business to the 
                trusted name in glass services it is today. His legacy lives on in every 
                project we complete and every customer we serve.
              </p>
            </div>
          </div>

          <div className="border-t border-b py-12 my-12">
            <blockquote className="text-center italic text-xl text-gray-600 max-w-3xl mx-auto">
              "Quality is not just about the materials we use or the work we do - it's about 
              the relationships we build and the trust we earn with every customer."
              <footer className="mt-4 text-base font-bold">- Butch</footer>
            </blockquote>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Continuing His Legacy</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Today, we honor Butch's memory by maintaining the high standards he set 
              and treating every customer with the same care and respect he showed 
              throughout his career. His spirit of excellence and dedication continues 
              to guide everything we do at Budget Glass Company.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-8">Share Your Memories</h2>
            <p className="text-gray-600 mb-8">
              If you have memories of Butch that you'd like to share, we'd love to hear them. 
              Your stories help keep his legacy alive and remind us of the impact he had on 
              our community.
            </p>
            <a href="mailto:memories@budgetglass.com" className="btn-primary">
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 