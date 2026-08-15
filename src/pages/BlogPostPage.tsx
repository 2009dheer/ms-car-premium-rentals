import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button 
          onClick={() => navigate('/blog')} 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors font-bold tracking-widest text-[10px] md:text-xs uppercase group"
        >
          <div className="p-2 md:p-2.5 rounded-full bg-gray-50 border border-gray-200 shadow-sm group-hover:border-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
          Back to Blog
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="text-brand-orange font-semibold tracking-wider uppercase mb-4">
            {blog.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {blog.title}
          </h1>
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden relative shadow-lg">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="max-w-none mx-auto text-lg md:text-xl text-gray-700
          [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:text-3xl [&>h2]:mt-12 [&>h2]:mb-6
          [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:text-2xl [&>h3]:mt-10 [&>h3]:mb-4
          [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-6
          [&>a]:text-brand-orange [&>a]:no-underline hover:[&>a]:underline
          [&>strong]:text-gray-900 [&>strong]:font-bold
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>li]:text-gray-600 [&>li]:mb-2
        ">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </div>
  );
}
