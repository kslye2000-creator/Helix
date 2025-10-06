
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-slate-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};
