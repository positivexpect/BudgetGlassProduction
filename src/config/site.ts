export const siteConfig = {
  name: 'Budget Glass Company',
  description: 'Expert storefront repairs, window repair, and custom shower doors in Richmond, VA. Same-day service available. Family-owned since 1982.',
  url: 'https://budgetglasscompany.com',
  ogImage: 'https://budgetglasscompany.com/og.jpg',
  links: {
    facebook: 'https://facebook.com/budgetglasscompany',
    twitter: 'https://twitter.com/budgetglassco',
  },
  contact: {
    phone: '(804) 555-1234',
    email: 'info@budgetglasscompany.com',
    address: {
      street: '123 Glass Road',
      city: 'Richmond',
      state: 'VA',
      zip: '23112',
    },
  },
  hours: {
    weekday: '8am - 5pm',
    saturday: '9am - 2pm',
    sunday: 'Closed',
  },
  serviceArea: {
    radius: 30,
    center: {
      city: 'Brandermill',
      zip: '23112',
    },
    cities: [
      'Richmond',
      'Brandermill',
      'Midlothian',
      'Chesterfield',
      'Chester',
      'Petersburg',
      'Hopewell',
      'Colonial Heights',
    ],
  },
} as const 