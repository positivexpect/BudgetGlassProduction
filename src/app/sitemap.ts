import { MetadataRoute } from 'next'
import { siteConfig } from '../config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://budgetglassva.com'

  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/schedule-appointment',
    '/blog',
    '/service-area',
    '/testimonials',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const serviceRoutes = [
    '/commercial/storefront-repair',
    '/commercial/storefront-installation',
    '/residential/shower-doors',
    '/residential/window-repair',
    '/residential/in-home-services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog posts - This will be dynamically generated in the future
  const blogPosts = [
    '/blog/storefront-break-immediate-steps',
    '/blog/window-repair-vs-replacement-2025',
    '/blog/diy-remove-window-sash',
    '/blog/shower-door-trends-2025',
    '/blog/foggy-windows-clear-faster',
    '/blog/commercial-glass-maintenance-checklist',
    '/blog/frameless-vs-framed-shower',
    '/blog/energy-savings-igu-repair',
    '/blog/customer-story-storefront-savings',
    '/blog/shower-glass-care-guide',
    '/blog/security-glass-upgrades',
    '/blog/holiday-storefront-protection',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...blogPosts]
} 