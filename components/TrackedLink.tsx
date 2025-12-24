import React from 'react';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    eventName: string; // e.g., 'play_now_click', 'partner_signup_click'
    eventParams?: Record<string, any>;
    children: React.ReactNode;
}

const TrackedLink: React.FC<TrackedLinkProps> = ({
    href,
    eventName,
    eventParams = {},
    children,
    className,
    ...props
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Mock GA4 Event
        console.log(`[GA4 Track] Event: ${eventName}`, {
            url: href,
            timestamp: new Date().toISOString(),
            ...eventParams
        });

        // In a real app: window.gtag('event', eventName, eventParams);

        if (props.onClick) props.onClick(e);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children}
        </a>
    );
};

export default TrackedLink;
