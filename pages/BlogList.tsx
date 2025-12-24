import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, EXTERNAL_LINK } from '../constants';

const BlogList: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen pt-20 pb-24 lg:pb-12">
      
      {/* Header */}
      <div className="bg-brand-dark py-12 md:py-16 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2 block">Insights & Player Guides</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4">SevenStar7 News</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Strategies, reviews, and industry updates to help you win bigger and smarter.
            </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        
        {/* Featured Post - More vertical on mobile */}
        <div className="mb-10 md:mb-16">
            <Link to={`/blog/${BLOG_POSTS[0].id}`} className="group relative block rounded-2xl overflow-hidden min-h-[400px] md:h-[500px] shadow-2xl active:scale-[0.99] transition-transform">
                <img 
                    src={BLOG_POSTS[0].imageUrl} 
                    alt={BLOG_POSTS[0].title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                    <span className="bg-brand-gold text-brand-black px-2 py-1 rounded font-black text-[9px] md:text-xs uppercase mb-3 inline-block">
                        {BLOG_POSTS[0].category}
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white mb-3 md:mb-4 leading-[1.2]">
                        {BLOG_POSTS[0].title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-lg mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                        {BLOG_POSTS[0].excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-sm text-gray-400 font-bold">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {BLOG_POSTS[0].date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {BLOG_POSTS[0].readTime}</span>
                    </div>
                </div>
            </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
                <article key={post.id} className="bg-brand-dark rounded-xl overflow-hidden border border-white/5 flex flex-col h-full group active:scale-[0.98] transition-transform">
                    <Link to={`/blog/${post.id}`} className="block relative h-48 md:h-56 overflow-hidden">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4">
                            <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-[9px] font-black uppercase border border-white/10">
                                {post.category}
                            </span>
                        </div>
                    </Link>
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-[10px] text-gray-500 font-bold mb-3 uppercase tracking-wider">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                            <span>{post.readTime}</span>
                        </div>
                        <Link to={`/blog/${post.id}`} className="block flex-1">
                             <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </Link>
                        <Link 
                            to={`/blog/${post.id}`} 
                            className="inline-flex items-center gap-2 text-brand-gold font-black text-xs uppercase tracking-widest mt-auto pt-4"
                        >
                            Read More <ArrowRight size={14} />
                        </Link>
                    </div>
                </article>
            ))}
        </div>

        {/* Play Now CTA for Blog */}
        <div className="mt-16 md:mt-24 bg-brand-gold p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
            <div>
                <h3 className="text-2xl md:text-3xl font-display font-black text-brand-black mb-2">PUT YOUR LUCK TO THE TEST</h3>
                <p className="text-brand-black font-bold opacity-80 text-sm md:text-base">Malaysians' favorite site with the highest winning odds.</p>
            </div>
            <a 
                href={EXTERNAL_LINK}
                className="w-full md:w-auto bg-brand-black text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl shadow-brand-black/20 transform transition-transform active:scale-95"
            >
                PLAY NOW!
            </a>
        </div>
      </div>
    </div>
  );
};

export default BlogList;