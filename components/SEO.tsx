import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    schema?: object;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "SevenStar7 - 马来西亚官方在线娱乐场 | Croco Gaming独家合作伙伴",
    description = "加入SevenStar7，马来西亚Croco Gaming授权合作伙伴。享受98.5%高回报率老虎机、3分钟快速提款、安全可靠的7星级游戏体验。Join SevenStar7, the authorized partner for Croco Gaming in Malaysia.",
    canonicalUrl,
    ogImage = "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop",
    ogType = 'website',
    schema,
    keywords = "SevenStar7, 马来西亚在线娱乐场, Croco Gaming, 老虎机, 真人娱乐场, 体育博彩, Malaysia Casino, Online Slots, Live Casino, Sports Betting, 918Kiss, Mega888, Pragmatic Play, JILI"
}) => {
    const siteUrl = 'https://sevenstar.services';
    const fullCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : siteUrl;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SevenStar7",
        "alternateName": "七星娱乐",
        "url": siteUrl,
        "description": description,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/?s={search_term_string}`,
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SevenStar7",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/images/favico.png`
            }
        }
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="SevenStar7" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="SevenStar7" />
            <meta property="og:locale" content="zh_CN" />
            <meta property="og:locale:alternate" content="en_MY" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;

