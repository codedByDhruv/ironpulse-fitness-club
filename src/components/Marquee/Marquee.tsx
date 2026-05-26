import React from 'react';
import './Marquee.css';

const Marquee: React.FC = () => {
  const items = [
    { text: 'Strength Training', highlight: false },
    { text: 'Personal Coaching', highlight: true },
    { text: 'Cardio Fitness', highlight: false },
    { text: 'Elite Equipment', highlight: true },
    { text: 'Nutrition Plans', highlight: false },
    { text: 'VIP Lounge', highlight: true },
    { text: 'Bodybuilding', highlight: false },
    { text: 'Recovery Zones', highlight: true },
  ];

  // Repeat items to fill space and enable continuous loop
  const displayItems = [...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {displayItems.map((item, index) => (
          <span
            key={index}
            className={`marquee-item ${item.highlight ? 'highlight' : ''}`}
          >
            <span className="dot"></span> {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
