
import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950/50"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
                From Strategy on Paper to <span className="text-sky-400">Strategy in Motion</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
                Most companies have great plans — but few see them come alive. 
                Strategy Co-Pilot transforms your goals into a living system that thinks, learns, and acts with you.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                It’s not just software — it’s a strategic intelligence partner that keeps your vision moving, even when markets change.
            </p>
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-white">
                Turn plans into progress. Automatically.
            </h2>
            <div className="mt-8 flex justify-center gap-4">
                <Button variant="primary" size="large">Get Started</Button>
                <Button variant="secondary" size="large">Watch How It Works</Button>
            </div>
        </div>
    </section>
  );
};
