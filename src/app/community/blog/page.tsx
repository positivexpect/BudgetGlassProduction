import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Budget Glass',
  description: 'Stay updated with the latest news, tips, and stories from Budget Glass.',
};

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Understanding Different Types of Glass',
      date: 'Coming Soon',
      excerpt: 'Learn about the various types of glass used in residential and commercial applications.',
      category: 'Education',
    },
    {
      title: 'Maintaining Your Glass Windows',
      date: 'Coming Soon',
      excerpt: 'Essential tips for keeping your windows clean and well-maintained throughout the year.',
      category: 'Tips & Tricks',
    },
    {
      title: 'Energy Efficient Glass Solutions',
      date: 'Coming Soon',
      excerpt: 'Discover how modern glass solutions can help improve your home\'s energy efficiency.',
      category: 'Products',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Budget Glass Blog
        </h1>
        <p className="text-xl text-gray-600">
          Insights, updates, and expert advice from our team
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-primary font-semibold mb-2">
                {post.category}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-500">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-xl text-gray-600 mb-8">
          Get the latest articles and updates delivered to your inbox
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 