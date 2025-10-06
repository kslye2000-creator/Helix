
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
      <div className="flex justify-center items-center mb-4 h-12 w-12 rounded-md bg-sky-500/10 text-sky-400 mx-auto">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};
