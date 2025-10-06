
import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
    return (
        <section className="bg-slate-950/50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">🚀 Ready to see your strategy come alive?</h2>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                    Let’s build a smarter, faster, more adaptive organization — together.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button variant="primary" size="large">Book a Demo</Button>
                    <Button variant="secondary" size="large">Explore the Platform</Button>
                </div>
            </div>
        </section>
    );
};
