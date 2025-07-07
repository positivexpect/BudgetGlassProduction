import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3">
            <h4 className="text-xl mb-4">Budget Glass Company</h4>
            <address className="not-italic">
              <a 
                href="https://maps.google.com/?q=5609+Hull+Street+Rd,+Suite+A,+Richmond,+VA+23224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white hover:text-neutral-lightest"
              >
                <p>5609 Hull Street Rd, Suite A</p>
                <p>Richmond, VA 23224</p>
              </a>
              <a href="tel:8042311029" className="block mt-2 text-white hover:text-neutral-lightest">
                (804) 231-1029
              </a>
              <a href="mailto:info@budgetglasscompany.com" className="block mt-2 text-white hover:text-neutral-lightest">
                info@budgetglasscompany.com
              </a>
            </address>
          </div>

          {/* Commercial Services */}
          <div className="md:col-span-3">
            <h4 className="text-xl mb-4">Commercial Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/commercial/new-storefront" className="text-white hover:text-neutral-lightest">
                  New Storefronts
                </Link>
              </li>
              <li>
                <Link href="/commercial/storefront-repair" className="text-white hover:text-neutral-lightest">
                  Storefront Repair
                </Link>
              </li>
              <li>
                <Link href="/commercial/emergency-repair" className="text-white hover:text-neutral-lightest">
                  Emergency Repair
                </Link>
              </li>
              <li>
                <Link href="/commercial/storefront-service" className="text-white hover:text-neutral-lightest">
                  Storefront Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Residential Services */}
          <div className="md:col-span-3">
            <h4 className="text-xl mb-4">Residential Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/residential/window-repair" className="text-white hover:text-neutral-lightest">
                  Window Repair
                </Link>
              </li>
              <li>
                <Link href="/residential/foggy-window-repair" className="text-white hover:text-neutral-lightest">
                  Foggy Window Repair
                </Link>
              </li>
              <li>
                <Link href="/residential/glass-replacement" className="text-white hover:text-neutral-lightest">
                  Glass Replacement
                </Link>
              </li>
              <li>
                <Link href="/residential/hardware-repair" className="text-white hover:text-neutral-lightest">
                  Hardware Repair
                </Link>
              </li>
              <li>
                <Link href="/residential/shower-doors" className="text-white hover:text-neutral-lightest">
                  Shower Doors
                </Link>
              </li>
              <li>
                <Link href="/residential/insulated-glass" className="text-white hover:text-neutral-lightest">
                  Insulated Glass Units
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Hours */}
          <div className="md:col-span-3">
            <div>
              <h4 className="text-xl mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white hover:text-neutral-lightest">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/our-team" className="text-white hover:text-neutral-lightest">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/gallery" className="text-white hover:text-neutral-lightest">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about/testimonials" className="text-white hover:text-neutral-lightest">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/about/in-memory-of-butch" className="text-white hover:text-neutral-lightest">
                    In Memory of Butch
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-xl mb-4">Hours</h4>
              <ul className="space-y-2">
                <li>Monday-Friday: 8:00am-4:30pm</li>
                <li>Saturday-Sunday: Closed</li>
                <li className="mt-4 font-semibold">24/7 Emergency Service Available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p>&copy; {currentYear} Budget Glass Company. All rights reserved.</p>
            <div className="md:text-right">
              <Link href="/sitemap" className="text-white hover:text-neutral-lightest mr-6">
                Sitemap
              </Link>
              <Link href="/privacy-policy" className="text-white hover:text-neutral-lightest mr-6">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-neutral-lightest">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 