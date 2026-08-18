import { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { blogs } from '../data/blogs';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Handle sharing
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog.title;

  const openShare = (platform: string) => {
    let url = '';
    if (platform === 'twitter') url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
    if (platform === 'linkedin') url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    if (platform === 'facebook') url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    if (url) window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white min-h-screen relative">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-orange z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Back Button (appears when scrolled past header) */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : -20 }}
        onClick={() => navigate('/blog')}
        className="fixed top-24 left-4 md:left-8 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 text-gray-900 hover:text-brand-orange hover:scale-110 transition-all pointer-events-auto hidden lg:flex"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      {/* Hero Header */}
      <div className="relative min-h-[60vh] md:min-h-[75vh] pt-32 w-full flex items-end justify-center overflow-hidden isolate">
        {/* Parallax Background */}
        <div className="absolute inset-0 -z-20">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />
        
        {/* Header Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:pb-24 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20"
          >
            <span className="text-xs font-bold text-white uppercase tracking-widest">{blog.category}</span>
            <span className="w-1 h-1 bg-white/50 rounded-full" />
            <span className="text-xs font-bold text-white/90 uppercase tracking-widest flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {blog.readingTime}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.2] tracking-tight max-w-4xl mx-auto"
          >
            {blog.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{blog.author.name}</div>
                <div className="text-xs text-white/70">{blog.author.role}</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-left flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">{blog.date}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Sidebar (Desktop) */}
        <aside className="hidden lg:block w-48 shrink-0">
          <div className="sticky top-32 flex flex-col gap-8">
            <button 
              onClick={() => navigate('/blog')} 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-bold tracking-widest text-[10px] uppercase mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to List
            </button>

            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5" /> Share Article
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={() => openShare('twitter')} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm">
                  <Twitter className="w-4 h-4" />
                </button>
                <button onClick={() => openShare('linkedin')} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button onClick={() => openShare('facebook')} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm">
                  <Facebook className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Article Body */}
        <article className="max-w-3xl w-full mx-auto lg:mx-0">
          
          <div className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 pb-12 border-b border-gray-100 italic">
            {blog.excerpt}
          </div>

          {/* Premium HTML Rendering via Tailwind arbitrary variants */}
          <div className="max-w-none 
            text-lg md:text-[21px] text-gray-800 leading-[1.8] tracking-[-0.01em] font-serif
            
            /* First Paragraph Drop Cap */
            [&>p:first-of-type]:first-letter:float-left 
            [&>p:first-of-type]:first-letter:text-7xl 
            [&>p:first-of-type]:first-letter:font-black 
            [&>p:first-of-type]:first-letter:text-gray-900 
            [&>p:first-of-type]:first-letter:mr-4 
            [&>p:first-of-type]:first-letter:mt-2
            [&>p:first-of-type]:first-letter:leading-[0.8]

            /* Headings */
            [&>h2]:font-sans [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:tracking-tight
            [&>h3]:font-sans [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:tracking-tight
            
            /* Paragraphs */
            [&>p]:mb-8
            
            /* Links */
            [&>a]:text-brand-orange [&>a]:font-semibold [&>a]:no-underline [&>a]:border-b-2 [&>a]:border-brand-orange/30 hover:[&>a]:border-brand-orange transition-all
            
            /* Strong/Bold */
            [&>strong]:text-gray-900 [&>strong]:font-bold [&>strong]:font-sans
            
            /* Lists */
            [&>ul]:list-none [&>ul]:pl-0 [&>ul]:my-10 
            [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li]:mb-4
            [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-3 [&>ul>li]:before:w-2 [&>ul>li]:before:h-2 [&>ul>li]:before:bg-brand-orange [&>ul>li]:before:rounded-full
            
            /* Blockquotes */
            [&>blockquote]:border-l-4 [&>blockquote]:border-brand-orange [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-2xl [&>blockquote]:text-gray-600 [&>blockquote]:font-medium
          ">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Mobile Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 lg:hidden">
            <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" /> Share This Article
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={() => openShare('twitter')} className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={() => openShare('linkedin')} className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </button>
              <button onClick={() => openShare('facebook')} className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

        </article>
      </div>
    </div>
  );
}
