
import React from 'react';

interface ListItemProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  number?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ title, description, icon, number }) => {
  return (
    <div className="relative flex items-start">
      {icon && <span className="absolute left-0 top-1 h-5 w-5 text-sky-400">{icon}</span>}
      {number && <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-slate-800 text-sky-400 font-bold mr-4">{number}</span>}
      <div className={icon ? 'pl-8' : ''}>
        <h4 className="text-lg font-medium text-white">{title}</h4>
        {description && <p className="mt-1 text-slate-400">{description}</p>}
      </div>
    </div>
  );
};
