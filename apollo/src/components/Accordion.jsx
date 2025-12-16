import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-dark-border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between bg-dark-card hover:bg-dark-border transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-text-primary text-left">
              {item.title}
            </h3>
            <span className={`text-accent-blue text-2xl transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}>
              ↓
            </span>
          </button>
          {openIdx === idx && (
            <div className="px-6 py-4 bg-dark-bg border-t border-dark-border">
              <p className="text-text-secondary leading-relaxed">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
