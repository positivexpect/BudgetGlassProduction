import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Community & Resources | Budget Glass',
  description: 'Connect with Budget Glass through our blog, social media, and community events. Stay updated with the latest in glass repair and installation.',
};

const CommunityPage = () => {
  const sections = [
    {
      title: 'Blog',
      description: 'Expert tips and insights about glass repair, maintenance, and installation.',
      link: '/blog',
      icon: '📝',
      isExternal: false
    },
    {
      title: 'Facebook',
      description: 'Follow us for daily updates, tips, and customer stories.',
      link: 'https://www.facebook.com/BudgetGlassCompany/',
      icon: '👥',
      isExternal: true
    },
    {
      title: 'Instagram',
      description: 'See our latest projects and behind-the-scenes content.',
      link: 'https://instagram.com/budgetglassva',
      icon: '📸',
      isExternal: true
    },
    {
      title: 'Community Events',
      description: 'Join us at local events and workshops in the Richmond area.',
      link: '/community/events',
      icon: '🎉',
      isExternal: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Connect With Our Community
        </h1>
        <p className="text-xl text-gray-600">
          Stay connected with Budget Glass through our various channels and community initiatives
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.link}
            target={section.isExternal ? "_blank" : undefined}
            rel={section.isExternal ? "noopener noreferrer" : undefined}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {section.description}
              </p>
              <div className="inline-block text-primary font-semibold">
                {section.isExternal ? 'Visit Page →' : 'Learn More →'}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Community Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Community Highlights</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <h3>Supporting Our Local Community</h3>
            <p>
              At Budget Glass, we're proud to be an active member of the Richmond community. 
              From sponsoring local events to providing educational workshops, we're committed 
              to giving back to the community that has supported us for over 35 years.
            </p>
            <ul>
              <li>Free glass repair workshops for homeowners</li>
              <li>Local business partnerships</li>
              <li>Community event sponsorships</li>
              <li>Educational resources for DIY enthusiasts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 