import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/images/hero-bg.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow fade-right delay-1">#1 Luxury Fitness Club — Surat</div>
        <h1 className="fade-right delay-2">
          PUSH<br />YOUR<br /><em>LIMITS</em>
        </h1>
        <p className="hero-desc fade-right delay-3">
          Experience elite training, premium interiors, world-class equipment, and personalized coaching — crafted for modern athletes who refuse to settle.
        </p>
        <div className="hero-actions fade-right delay-4">
          <Link to="/contact" className="btn-primary">
            Start Membership <i className="ri-arrow-right-line"></i>
          </Link>
          <Link to="/programs" className="btn-ghost">Explore Programs</Link>
        </div>

        <div className="hero-number-strip fade-up delay-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px' }}>
          <div className="hero-num"><strong>12K+</strong><span>Members</span></div>
          <div className="hero-num"><strong>65+</strong><span>Trainers</span></div>
          <div className="hero-num"><strong>98%</strong><span>Success Rate</span></div>
          <div className="hero-num"><strong>24/7</strong><span>Access</span></div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={heroBg}
          alt="Elite gym training"
        />
      </div>
    </section>
  );
};

export default Hero;
