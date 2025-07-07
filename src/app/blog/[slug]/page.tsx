import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '../../../lib/blog';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  return {
    title: `${post.title} | Budget Glass Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  try {
    const post = await getPostBySlug(params.slug);

    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">{post.date}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {post.category}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
} 