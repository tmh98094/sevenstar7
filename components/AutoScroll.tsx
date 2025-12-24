import React from 'react';

interface AutoScrollProps {
  children: React.ReactNode;
  className?: string;
}

const AutoScroll: React.FC<AutoScrollProps> = ({ children, className = "" }) => {
  return (
    <div className={`overflow-hidden w-full relative ${className}`}>
      <div className="animate-marquee flex gap-8 md:gap-16 items-center">
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export default AutoScroll;