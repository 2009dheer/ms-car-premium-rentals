import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';

export function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 md:pt-32 pb-20 relative min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-orange transition-colors font-bold tracking-widest text-[10px] md:text-xs uppercase group"
        >
          <div className="p-2 md:p-2.5 rounded-full bg-white border border-gray-200 shadow-sm group-hover:border-brand-orange transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
          Go Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest news, travel tips, and updates from MS CAR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.slug}`}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-semibold text-brand-orange mb-3">{blog.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-brand-orange transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider group/btn mt-auto">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
