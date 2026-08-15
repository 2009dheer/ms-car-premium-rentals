import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { blogs } from '../data/blogs';

export function BlogPage() {
  const navigate = useNavigate();
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="pt-24 md:pt-32 pb-20 relative min-h-screen bg-gray-50 overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-gray-200/50 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl -z-10" />

      {/* Top Nav/Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 z-10 relative">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 tracking-tighter">
            Insights <span className="text-brand-orange">&</span> News
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Explore the latest trends, travel guides, and premium transport insights directly from the experts at MS CAR.
          </p>
        </motion.div>

        {/* Featured Post (Hero) */}
        {featuredBlog && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-16 md:mb-24"
          >
            <Link 
              to={`/blog/${featuredBlog.slug}`}
              className="group relative block rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl bg-white isolate"
            >
              <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
                {/* Image Section */}
                <div className="relative h-[350px] md:h-full overflow-hidden">
                  <img 
                    src={featuredBlog.imageUrl} 
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/30">
                    {featuredBlog.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110" />

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredBlog.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredBlog.readingTime}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {featuredBlog.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{featuredBlog.author.name}</div>
                        <div className="text-xs text-gray-500">{featuredBlog.author.role}</div>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-brand-orange transition-all duration-300 transform group-hover:translate-x-2">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Remaining Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {remainingBlogs.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={blog.id}
            >
              <Link 
                to={`/blog/${blog.slug}`}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {blog.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{blog.readingTime}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-3 leading-snug group-hover:text-brand-orange transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="text-sm font-bold text-gray-900">{blog.author.name}</div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider group/btn">
                      Read
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
