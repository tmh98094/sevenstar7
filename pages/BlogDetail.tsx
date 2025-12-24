import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS, EXTERNAL_LINK } from '../constants';

const BlogDetail: React.FC = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(p => p.id === blogId);
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== blogId).slice(0, 3);

  if (!post) {
    return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center flex-col p-6 text-center">
            <h1 className="text-3xl font-display font-black text-white mb-4">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The guide you're looking for might have been moved.</p>
            <button onClick={() => navigate('/blog')} className="bg-brand-gold text-brand-black font-black px-8 py-3 rounded-full uppercase tracking-widest text-sm">Return to Blog</button>
        </div>
    )
  }

  return (
    <div className="bg-brand-black min-h-screen pt-16 md:pt-20 pb-24 lg:pb-12">
      
      {/* Back Button for Mobile - Floats or fixed at top left */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white font-bold text-sm uppercase transition-colors">
            <ChevronLeft size={20} /> Back
        </Link>
      </div>

      <article className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            {/* Header Content */}
            <div className="mb-8 md:mb-12">
                <span className="bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-3 py-1 rounded font-black text-[10px] uppercase mb-4 inline-block tracking-widest">
                    {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1.15] mb-6 md:mb-8 tracking-tight">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-gray-400 text-xs md:text-sm font-bold border-b border-white/5 pb-8">
                    <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg"><User size={16} className="text-brand-gold" /> {post.author}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                </div>
            </div>

            {/* Post Image */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-10 md:mb-16 shadow-2xl">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Text Content */}
                <div className="lg:col-span-2 prose prose-invert prose-sm md:prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-p:text-gray-300 prose-p:leading-relaxed prose-img:rounded-2xl prose-strong:text-white prose-a:text-brand-gold">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Tags for Mobile-first discovery */}
                    <div className="mt-12 flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-[10px] md:text-xs font-bold text-gray-500 border border-white/10 px-3 py-1.5 rounded-full bg-white/5">#{tag}</span>
                        ))}
                    </div>

                    {/* Social Share Mobile */}
                    <div className="mt-12 py-8 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <span className="text-white font-black text-sm uppercase tracking-widest">Share this guide</span>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-white active:bg-[#1877F2] active:scale-90 transition-all shadow-lg"><Facebook size={20} /></button>
                            <button className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-white active:bg-[#1DA1F2] active:scale-90 transition-all shadow-lg"><Twitter size={20} /></button>
                            <button className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-white active:bg-brand-gold active:text-brand-black active:scale-90 transition-all shadow-lg"><Share2 size={20} /></button>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Stacks on mobile */}
                <aside className="space-y-8">
                    {/* High Conversion CTA */}
                    <div className="bg-brand-dark rounded-2xl p-8 border-2 border-brand-gold/20 text-center shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-gold/5 -z-10 transition-colors group-hover:bg-brand-gold/10"></div>
                        <h3 className="text-xl md:text-2xl font-display font-black text-white mb-3">READY TO WIN?</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">Claim your exclusive 150% bonus and start playing now.</p>
                        <a 
                            href={EXTERNAL_LINK} 
                            className="block w-full gold-btn-gradient text-brand-black font-black py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
                        >
                            PLAY NOW
                        </a>
                    </div>

                    {/* Related Posts */}
                    <div className="pt-4">
                        <h3 className="text-lg font-display font-black text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-brand-gold rounded-full"></span>
                            Related Guides
                        </h3>
                        <div className="space-y-5">
                            {relatedPosts.map(rel => (
                                 <Link key={rel.id} to={`/blog/${rel.id}`} className="flex gap-4 group active:scale-[0.98] transition-all">
                                     <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                                         <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover" />
                                     </div>
                                     <div className="flex flex-col justify-center">
                                         <span className="text-[9px] text-brand-gold font-black uppercase mb-1">{rel.category}</span>
                                         <h4 className="text-white text-sm md:text-base font-bold leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">{rel.title}</h4>
                                     </div>
                                 </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
      </article>

      {/* Floating Bottom Action for Blog on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-brand-black/90 backdrop-blur-xl border-t border-white/5">
          <a 
            href={EXTERNAL_LINK} 
            className="block w-full gold-btn-gradient text-brand-black font-black py-4 rounded-2xl text-center text-sm shadow-2xl active:scale-95 transition-all uppercase tracking-widest"
          >
            Play Real Money Now
          </a>
      </div>
    </div>
  );
};

export default BlogDetail;