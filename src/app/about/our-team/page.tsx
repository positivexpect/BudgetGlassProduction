import React from 'react'
import ResponsiveImage from '../../../components/ResponsiveImage'

export const metadata = {
  title: 'Our Team | Budget Glass Company',
  description: 'Meet the dedicated professionals at Budget Glass Company who make quality glass service possible.',
}

export default function OurTeam() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="mb-6">Our Team</h1>
          <p className="text-xl">Meet the Dedicated Professionals Behind Budget Glass</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add team member cards here when photos and bios are available */}
            <div className="bg-white p-6 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/placeholder-team.jpg"
                  alt="Team Member"
                  width={400}
                  height={400}
                  containerClassName="w-full aspect-square overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Team Member Name</h3>
              <p className="text-primary font-medium mb-3">Position</p>
              <p className="text-gray-600">Brief description of the team member's role and experience at Budget Glass Company.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <h2 className="text-center mb-12">Join Our Team</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              We're always looking for skilled professionals who share our commitment to quality and customer service. 
              If you're interested in joining the Budget Glass team, we'd love to hear from you.
            </p>
            <a href="mailto:careers@budgetglass.com" className="btn-primary">
              Contact Us About Careers
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 