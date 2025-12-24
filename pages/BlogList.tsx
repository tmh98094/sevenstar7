import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS, EXTERNAL_LINK } from '../constants';
import { useTranslation } from '../src/hooks/useTranslation';

const BlogList: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 6;

    const getTranslatedPost = (post: any) => {
        const translated = t(`blog.${post.id}`) as any;
        if (typeof translated === 'object' && translated.title) {
            return { ...post, ...translated };
        }
        return post;
    };

    // Calculate pagination
    const totalPages = Math.ceil((BLOG_POSTS.length - 1) / POSTS_PER_PAGE); // -1 because first post is featured
    const startIndex = 1 + (currentPage - 1) * POSTS_PER_PAGE; // Start after featured post
    const endIndex = Math.min(startIndex + POSTS_PER_PAGE, BLOG_POSTS.length);
    const currentPosts = BLOG_POSTS.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-brand-black min-h-screen pt-20 pb-24 lg:pb-12">

            {/* Header */}
            <div className="bg-brand-dark py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <span className="text-brand-gold font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2 block">{t('blog.insightsGuides')}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4">{t('nav.blog')}</h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        {t('ui.latestNews')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">

                {/* Featured Post - Only show on first page */}
                {currentPage === 1 && (
                    <div className="mb-10 md:mb-16">
                        <Link to={`/blog/${BLOG_POSTS[0].id}`} className="group relative block rounded-2xl overflow-hidden min-h-[400px] md:h-[500px] shadow-2xl active:scale-[0.99] transition-transform">
                            <img
                                src={BLOG_POSTS[0].imageUrl}
                                alt={BLOG_POSTS[0].title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                                {(() => {
                                    const post = getTranslatedPost(BLOG_POSTS[0]);
                                    return (
                                        <>
                                            <span className="bg-brand-gold text-brand-black px-2 py-1 rounded font-black text-[9px] md:text-xs uppercase mb-3 inline-block">
                                                {post.category}
                                            </span>
                                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white mb-3 md:mb-4 leading-[1.2]">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-300 text-sm md:text-lg mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </>
                                    );
                                })()}
                                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-sm text-gray-400 font-bold">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {BLOG_POSTS[0].date}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={14} /> {BLOG_POSTS[0].readTime}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {currentPosts.map((post) => (
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
                                {(() => {
                                    const translated = getTranslatedPost(post);
                                    return (
                                        <>
                                            <div className="flex items-center gap-3 text-[10px] text-gray-500 font-bold mb-3 uppercase tracking-wider">
                                                <span>{post.date}</span>
                                                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <Link to={`/blog/${post.id}`} className="block flex-1">
                                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
                                                    {translated.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs md:text-sm mb-6 line-clamp-3">
                                                    {translated.excerpt}
                                                </p>
                                            </Link>
                                            <Link
                                                to={`/blog/${post.id}`}
                                                className="inline-flex items-center gap-2 text-brand-gold font-black text-xs uppercase tracking-widest mt-auto pt-4"
                                            >
                                                {t('ui.readMore')} <ArrowRight size={14} />
                                            </Link>
                                        </>
                                    );
                                })()}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg bg-brand-dark border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${currentPage === page
                                    ? 'bg-brand-gold text-brand-black'
                                    : 'bg-brand-dark border border-white/10 text-white hover:bg-white/5'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg bg-brand-dark border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {/* Play Now CTA for Blog */}
                <div className="mt-16 md:mt-24 bg-brand-gold p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-display font-black text-brand-black mb-2">{t('blog.testLuckTitle')}</h3>
                        <p className="text-brand-black font-bold opacity-80 text-sm md:text-base">{t('blog.testLuckSubtitle')}</p>
                    </div>
                    <a
                        href={EXTERNAL_LINK}
                        className="w-full md:w-auto bg-brand-black text-white px-10 py-4 rounded-xl font-black text-lg shadow-xl shadow-brand-black/20 transform transition-transform active:scale-95"
                    >
                        {t('ui.playNow')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogList;