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
    title = "SevenStar7 - Malaysia's Official Online Casino | SevenStar Gambling",
    description = "SevenStar7 is Malaysia's trusted Sevenstar Casino and Gambling platform. Exclusive partner of Croco Gaming. Join Sevenstar Malaysia for high RTP slots and live casino action.",
    canonicalUrl,
    ogImage = "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop",
    ogType = 'website',
    schema,
    keywords = "Sevenstar Malaysia, Sevenstar Casino, Sevenstar Gambling, Sevenstar7, Sevenstar7 Malaysia, Sevenstar7 Casino, Malaysia Online Casino, Trusted Gambling Platform"
}) => {
    const siteUrl = 'https://sevenstar.services';
    const fullCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : siteUrl;

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SevenStar7",
        "legalName": "SevenStar7 Casino Malaysia",
        "alternateName": [
            "Sevenstar Malaysia",
            "Sevenstar Casino",
            "Sevenstar Gambling",
            "Sevenstar7",
            "Sevenstar7 Malaysia",
            "Sevenstar7 Casino"
        ],
        "url": siteUrl,
        "logo": `${siteUrl}/images/favico.png`,
        "description": description,
        "sameAs": [
            "https://web.facebook.com/profile.php?id=61581042925455",
            "https://twitter.com/sevenstar7",
            "https://www.instagram.com/sevenstar7"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "areaServed": "MY",
            "availableLanguage": ["en", "ms", "zh"]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SevenStar7",
        "alternateName": "SevenStar Malaysia",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
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
            <meta property="og:locale" content="en_MY" />
            <meta property="og:locale:alternate" content="zh_CN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schema ? [defaultSchema, websiteSchema, schema] : [defaultSchema, websiteSchema])}
            </script>
        </Helmet>
    );
};

export default SEO;

