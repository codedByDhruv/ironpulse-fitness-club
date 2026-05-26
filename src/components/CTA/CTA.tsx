import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner reveal">
        <div>
          <div className="cta-eyebrow">Limited Spots Available</div>
          <h2>START YOUR FITNESS<br />JOURNEY TODAY</h2>
        </div>
        <Link to="/contact" className="cta-btn">
          Join Membership <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
